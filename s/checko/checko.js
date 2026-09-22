// Checko v1: words come only from the document. Changing these rules needs a new version.
async function checko(scroll) {
  const text = scroll.replace(/\r\n?/g, '\n').replace(/^checko(?:[ \t][^\n]*)?(?:\n|$)/gm, '').replace(/\n*$/, '\n');
  const words = [...new Set((text.match(/\p{L}[\p{L}\p{M}]*/gu) || []).map(word => word.toLowerCase()).filter(word => /^[a-z]+$/.test(word)))].sort();
  if (words.length < 2) throw new Error('Add at least two distinct A–Z words to make a Checko.');
  const hash = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode('checko:v1\n' + text)));
  let value = BigInt('0x' + Array.from(hash.slice(0, 9), byte => byte.toString(16).padStart(2, '0')).join(''));
  const base = BigInt(words.length), phrase = [];
  let capacity = 1n, length = 0;
  while (capacity < 2n ** 72n) { capacity *= base; length++; }
  for (let i = length - 1; i >= 0; i--) { phrase[i] = words[Number(value % base)]; value /= base; }
  return phrase.map((word, i) => i ? word[0].toUpperCase() + word.slice(1) : word).join('');
}

const knowbooksCheckoWords = "magnets focus levers beams sales carpentry plumbing capital light tools gravity sound electricity air heat glass cells iron elements copper gold venture banking fire sleep fields energy frequency waves helices springs voltage motors gears colors matter atoms motion momentum friction ropes wind aerodynamics water rust time patience centuries liberty courage property membranes decay bonds teamwork motivation competition alignment collusion anger paper ink folding metals steel aluminum brass wood seeds wheels wedges stars exploration fabric food trees breath smell rain budgeting bookkeeping screws payroll batteries software scroll marketing twitter hydration hurricanes currency bitcoin guitar piano drums singing actuators rockets transistors mitochondria cancer fusion raising attraction basketball football soccer boxing golf baseball flow gluons bosons solar knowbooks";

// Keep the default output compatible with Knowbooks order checksums.
async function checkoGeneratorV1(scroll, wordList = knowbooksCheckoWords) {
  const words = [...new Set(wordList.trim().split(/\s+/).filter(Boolean))];
  if (words.length < 2) throw new Error("Add at least two different words.");
  const text = scroll.replace(/\r\n?/g, '\n').replace(/\n*$/, '\n');
  const hash = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode('checkoGeneratorV1\n' + text)));
  let value = BigInt('0x' + Array.from(hash, byte => byte.toString(16).padStart(2, '0')).join(''));
  const phrase = Array(5), base = BigInt(words.length);
  for (let i = 4; i >= 0; i--) { phrase[i] = words[Number(value % base)]; value /= base; }
  return phrase.join(' ');
}
