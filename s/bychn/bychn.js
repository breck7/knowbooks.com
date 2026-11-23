const bychn = {
  defaultUser: "breck",
  firebaseUser: id => "https://hacker-news.firebaseio.com/v0/user/" + encodeURIComponent(id) + ".json",
  firebaseItem: id => "https://hacker-news.firebaseio.com/v0/item/" + id + ".json",
  algoliaPage: (id, until) => {
    let url = "https://hn.algolia.com/api/v1/search_by_date?tags=author_" + encodeURIComponent(id) + "&hitsPerPage=1000"
    if (until != null) url += "&numericFilters=" + encodeURIComponent("created_at_i<" + until)
    return url
  },

  iso(unix) {
    if (unix == null || unix === "") return ""
    const d = new Date(Number(unix) * 1000)
    return Number.isNaN(d.getTime()) ? "" : d.toISOString().replace(".000Z", "Z")
  },

  decodeEntities(s) {
    return String(s || "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x2F;/gi, "/").replace(/&#x27;/gi, "'").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
  },

  htmlToText(html) {
    if (!html) return ""
    let s = this.decodeEntities(html)
    s = s.replace(/<\s*br\s*\/?\s*>/gi, "\n").replace(/<\s*\/\s*p\s*>/gi, "\n").replace(/<\s*p[^>]*>/gi, "")
    s = s.replace(/<a\s[^>]*href=["']([^"']+)["'][^>]*>/gi, (m, href) => this.decodeEntities(href) + " ")
    s = s.replace(/<[^>]+>/g, "")
    return s.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim()
  },

  indent(text) {
    const lines = String(text || "").replace(/\r\n/g, "\n").split("\n")
    if (!lines.length || (lines.length === 1 && !lines[0])) return ""
    return "\n" + lines.map(line => " " + line).join("\n")
  },

  field(name, value) {
    if (value == null || value === "") return ""
    const s = String(value)
    return s.includes("\n") ? name + this.indent(s) + "\n" : name + " " + s + "\n"
  },

  itemType(tags) {
    tags = tags || []
    if (tags.includes("comment")) return "comment"
    if (tags.includes("story")) return "story"
    if (tags.includes("job")) return "job"
    if (tags.includes("poll")) return "poll"
    if (tags.includes("pollopt")) return "pollopt"
    return "story"
  },

  fromAlgolia(hit) {
    const type = this.itemType(hit._tags)
    const id = String(hit.objectID)
    const time = this.iso(hit.created_at_i)
    const title = hit.title || hit.story_title || ""
    const text = this.htmlToText(hit.comment_text || hit.story_text || "")
    return { id, type, time, title, url: hit.url || hit.story_url || "", score: hit.points, descendants: hit.num_comments, parent: hit.parent_id, thread: hit.story_id, text }
  },

  fromFirebase(item) {
    if (!item || !item.id) return null
    return {
      id: String(item.id),
      type: item.type || "story",
      time: this.iso(item.time),
      title: item.title || "",
      url: item.url || "",
      score: item.score,
      descendants: item.descendants,
      parent: item.parent,
      thread: item.story || item.parent,
      text: this.htmlToText(item.text || ""),
      deleted: item.deleted ? "true" : "",
      dead: item.dead ? "true" : ""
    }
  },

  emitItem(item) {
    const kind = item.type === "comment" || item.type === "pollopt" ? "reply" : "story"
    let out = kind + " " + item.id + "\n"
    out += this.field("time", item.time)
    if (kind === "story" && item.type && item.type !== "story") out += this.field("type", item.type)
    if (item.parent) out += this.field("parent", item.parent)
    if (item.thread && String(item.thread) !== String(item.id) && String(item.thread) !== String(item.parent)) out += this.field("thread", item.thread)
    out += this.field("headline", item.title)
    out += this.field("url", item.url)
    if (item.score != null && item.score !== "") out += this.field("score", item.score)
    if (item.descendants != null && item.descendants !== "") out += this.field("descendants", item.descendants)
    out += this.field("deleted", item.deleted)
    out += this.field("dead", item.dead)
    out += this.field("text", item.text)
    return out + "\n"
  },

  emitHeader(profile) {
    const id = profile.id
    return "https://breck.lol/bychn.parsers\n" +
      "title " + id + "'s Hacker News\n" +
      "description Full Hacker News export of " + id + "\n" +
      "htmlLang en\n" +
      "buildHtml\n" +
      "metaTags\n\n"
  },

  emitUser(profile) {
    let out = this.emitHeader(profile)
    out += "user " + profile.id + "\n"
    out += this.field("created", this.iso(profile.created))
    out += this.field("karma", profile.karma)
    const about = this.htmlToText(profile.about || "")
    out += this.field("about", about)
    return out + "\n"
  },

  async json(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error("HTTP " + res.status + " for " + url)
    return res.json()
  },

  async exportUser(username, onChunk, onStatus, signal) {
    const id = String(username || "").trim()
    if (!/^[A-Za-z0-9_-]+$/.test(id)) throw new Error("That does not look like a Hacker News username.")
    onStatus("Loading profile…")
    const profile = await this.json(this.firebaseUser(id))
    if (!profile || !profile.id) throw new Error("No Hacker News user named “" + id + "”.")
    const submitted = Array.isArray(profile.submitted) ? profile.submitted.map(String) : []
    let out = this.emitUser(profile)
    onChunk(out, { stories: 0, comments: 0, done: false, karma: profile.karma, submitted: submitted.length, items: [] })

    const seen = new Set()
    let stories = 0, comments = 0, until
    // Algolia is paged in 1000-hit windows (faster than one Firebase fetch per item).
    while (true) {
      if (signal && signal.aborted) throw new Error("Stopped.")
      onStatus("Loading items… " + (stories + comments) + (submitted.length ? " of " + submitted.length : ""))
      const page = await this.json(this.algoliaPage(id, until))
      const hits = page.hits || []
      if (!hits.length) break
      let chunk = ""
      const batch = []
      let lastTime = until
      for (const hit of hits) {
        const item = this.fromAlgolia(hit)
        if (seen.has(item.id)) continue
        seen.add(item.id)
        chunk += this.emitItem(item)
        batch.push(item)
        if (item.type === "comment" || item.type === "pollopt") comments++
        else stories++
        lastTime = hit.created_at_i
      }
      if (chunk) onChunk(chunk, { stories, comments, done: false, karma: profile.karma, submitted: submitted.length, items: batch })
      if (hits.length < 1000 || lastTime == null || lastTime === until) break
      until = lastTime
    }

    const missing = submitted.filter(itemId => !seen.has(itemId))
    const batchSize = 20
    for (let i = 0; i < missing.length; i += batchSize) {
      if (signal && signal.aborted) throw new Error("Stopped.")
      onStatus("Filling " + (missing.length - i) + " items not in Algolia…")
      const batch = missing.slice(i, i + batchSize)
      const fetched = await Promise.all(batch.map(itemId => this.json(this.firebaseItem(itemId)).catch(() => null)))
      let chunk = ""
      const found = []
      for (const raw of fetched) {
        const item = this.fromFirebase(raw)
        if (!item || seen.has(item.id)) continue
        seen.add(item.id)
        chunk += this.emitItem(item)
        found.push(item)
        if (item.type === "comment" || item.type === "pollopt") comments++
        else stories++
      }
      if (chunk) onChunk(chunk, { stories, comments, done: false, karma: profile.karma, submitted: submitted.length, items: found })
    }

    onStatus("Done. " + stories + " stories, " + comments + " comments" + (submitted.length ? " (" + submitted.length + " submitted ids)" : "") + ".")
    onChunk("", { stories, comments, done: true, karma: profile.karma, submitted: submitted.length, exported: stories + comments, items: [] })
    return { stories, comments, submitted: submitted.length, exported: stories + comments, karma: profile.karma }
  }
}

function bychnApp() {
  const form = document.querySelector("#bychn-form")
  const input = document.querySelector("#bychn-user")
  const out = document.querySelector("#bychn-out")
  const status = document.querySelector("#bychn-status")
  const copyBtn = document.querySelector("#bychn-copy")
  const downloadBtn = document.querySelector("#bychn-download")
  const feed = document.querySelector("#bychn-feed")
  const topList = document.querySelector("#bychn-top")
  const stage = document.querySelector("#bychn-stage")
  const nStories = document.querySelector("#n-stories")
  const nComments = document.querySelector("#n-comments")
  const nKarma = document.querySelector("#n-karma")
  const nLoaded = document.querySelector("#n-loaded")
  const nTotal = document.querySelector("#n-total")
  const bar = document.querySelector("#bychn-bar")
  const params = new URLSearchParams(location.search)
  input.value = params.get("user") || bychn.defaultUser
  let run = 0
  let controller = null
  let queue = []
  let pumping = false
  let topStories = []
  const FEED_MAX = 28
  const esc = s => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
  const hnUrl = id => "https://news.ycombinator.com/item?id=" + encodeURIComponent(id)
  const isComment = item => item.type === "comment" || item.type === "pollopt"
  const setStatus = text => { status.textContent = text }

  const addCard = item => {
    const li = document.createElement("li")
    const comment = isComment(item)
    li.className = "card " + (comment ? "reply" : "story")
    const score = item.score != null && item.score !== "" ? item.score : ""
    const label = comment
      ? (item.text || item.title || "comment").replace(/\s+/g, " ").slice(0, 140)
      : (item.title || "Untitled")
    li.innerHTML = (score !== "" ? `<span class="score">${esc(score)}</span>` : `<span class="score muted">${comment ? "•" : "–"}</span>`)
      + `<a href="${hnUrl(item.id)}" target="_blank" rel="noopener">${esc(label)}</a>`
    feed.prepend(li)
    while (feed.children.length > FEED_MAX) feed.removeChild(feed.lastChild)
  }

  const pump = () => {
    if (pumping) return
    pumping = true
    const step = () => {
      const n = Math.min(2, queue.length)
      for (let i = 0; i < n; i++) addCard(queue.shift())
      if (queue.length) setTimeout(step, 70)
      else pumping = false
    }
    setTimeout(step, 40)
  }

  const renderTop = () => {
    topList.innerHTML = topStories.map(item =>
      `<li><span class="score">${esc(item.score)}</span><a href="${hnUrl(item.id)}" target="_blank" rel="noopener">${esc(item.title || "Untitled")}</a></li>`
    ).join("")
  }

  const considerTop = items => {
    let changed = false
    for (const item of items) {
      if (isComment(item) || item.score == null || item.score === "" || !item.title) continue
      const exists = topStories.findIndex(s => s.id === item.id)
      if (exists >= 0) {
        if (topStories[exists].score !== item.score) { topStories[exists] = item; changed = true }
        continue
      }
      topStories.push(item)
      changed = true
    }
    if (!changed) return
    topStories.sort((a, b) => b.score - a.score || Number(b.id) - Number(a.id))
    if (topStories.length > 10) topStories.length = 10
    renderTop()
  }

  const updateStats = info => {
    nStories.textContent = info.stories
    nComments.textContent = info.comments
    if (info.karma != null) nKarma.textContent = info.karma
    const loaded = (info.stories || 0) + (info.comments || 0)
    const total = info.submitted || 0
    nLoaded.textContent = loaded
    nTotal.textContent = total || "—"
    bar.style.width = total ? Math.min(100, (loaded / total) * 100) + "%" : (info.done ? "100%" : "0%")
    stage.hidden = false
  }

  const download = () => {
    const name = (input.value.trim() || "hackernews") + ".bychn.scroll"
    const blob = new Blob([out.value], { type: "text/plain;charset=utf-8" })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = name
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(out.value)
      setStatus("Copied to clipboard.")
    } catch (e) {
      out.select()
      document.execCommand("copy")
      setStatus("Copied to clipboard.")
    }
  }

  const start = async () => {
    const id = input.value.trim()
    if (!id) return
    if (controller) controller.abort()
    controller = new AbortController()
    const thisRun = ++run
    const url = new URL(location.href)
    url.searchParams.set("user", id)
    history.replaceState(null, "", url)
    out.value = ""
    feed.innerHTML = ""
    topList.innerHTML = ""
    queue = []
    pumping = false
    topStories = []
    bar.style.width = "0%"
    nStories.textContent = nComments.textContent = nLoaded.textContent = "0"
    nTotal.textContent = "—"
    setStatus("Starting…")
    stage.hidden = false
    try {
      await bychn.exportUser(id, (chunk, info) => {
        if (thisRun !== run) return
        if (chunk) out.value += chunk
        updateStats(info)
        if (info.items && info.items.length) {
          considerTop(info.items)
          for (const item of info.items) queue.push(item)
          if (queue.length > FEED_MAX * 2) {
            const stories = queue.filter(item => !isComment(item))
            const comments = queue.filter(isComment)
            queue = stories.concat(comments).slice(-FEED_MAX)
          }
          pump()
        }
      }, text => { if (thisRun === run) setStatus(text) }, controller.signal)
    } catch (err) {
      if (thisRun !== run) return
      setStatus(err.message || String(err))
    }
  }

  form.addEventListener("submit", event => { event.preventDefault(); start() })
  copyBtn.addEventListener("click", copy)
  downloadBtn.addEventListener("click", download)
  start()
}

document.addEventListener("DOMContentLoaded", bychnApp)
