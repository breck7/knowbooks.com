// Checkem v1: words come only from the document. Changing these rules needs a new version.
async function checkem(scroll) {
  const text = scroll.replace(/\r\n?/g, '\n').replace(/^checkem(?:[ \t][^\n]*)?(?:\n|$)/gm, '').replace(/\n*$/, '\n');
  const words = [...new Set((text.match(/\p{L}[\p{L}\p{M}]*/gu) || []).map(word => word.toLowerCase()).filter(word => /^[a-z]+$/.test(word)))].sort();
  if (words.length < 2) throw new Error('Add at least two distinct A–Z words to make a Checkem.');
  const hash = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode('checkem:v1\n' + text)));
  let value = BigInt('0x' + Array.from(hash.slice(0, 9), byte => byte.toString(16).padStart(2, '0')).join(''));
  const base = BigInt(words.length), phrase = [];
  let capacity = 1n, length = 0;
  while (capacity < 2n ** 72n) { capacity *= base; length++; }
  for (let i = length - 1; i >= 0; i--) { phrase[i] = words[Number(value % base)]; value /= base; }
  return phrase.map((word, i) => i ? word[0].toUpperCase() + word.slice(1) : word).join('');
}
