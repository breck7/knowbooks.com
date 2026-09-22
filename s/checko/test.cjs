// Run: node s/checko/test.cjs
const {readFileSync} = require('node:fs');
const {webcrypto, createHash} = require('node:crypto');
const {runInNewContext} = require('node:vm');
const assert = require('node:assert/strict');
const source = readFileSync(__dirname + '/checko.js', 'utf8');
const checko = runInNewContext(source + '\nchecko', {crypto:webcrypto, TextEncoder});
const sample = 'title A little discovery\nexperiments Bend Build Explore\n';
(async () => {
 const generator = runInNewContext(source + '\ncheckoGeneratorV1', {crypto:webcrypto, TextEncoder});
 const vocabulary = source.match(/const words = "([^"]+)"\.split/)[1].split(' ');
 const details = 'orderDetails\n currency USD\n items\n  item magnets\n   quantity 1\n   unitPriceUsd 249.00\n';
 const phrase = await generator(details);
 assert.equal(phrase.split(' ').length,5);
 assert.ok(phrase.split(' ').every(word => vocabulary.includes(word)));
 let value=BigInt('0x'+createHash('sha256').update('checkoGeneratorV1\n'+details).digest('hex'));
 const expected=Array(5);
 for(let i=4;i>=0;i--){expected[i]=vocabulary[Number(value%BigInt(vocabulary.length))];value/=BigInt(vocabulary.length);}
 assert.equal(phrase,expected.join(' '));
 assert.equal(await generator(details.replaceAll('\n','\r\n')+'\r\n'),phrase);
 for(const edit of [details.replace('249.00','250.00'),details.replace('quantity 1','quantity 2'),details+'   customization forest\n']) assert.notEqual(await generator(edit),phrase);
 console.log('checkoGeneratorV1 passed: 5 frozen-vocabulary words, independent SHA-256 encoding, normalization, price/quantity/customization changes.');
 const base=await checko(sample);
 // Frozen vector independently produced with Python hashlib and integer base conversion.
 assert.equal(base,'littleBendAExperimentsBuildExperimentsLittleAExploreExploreExperimentsBuildBuildExperimentsTitleExperimentsBendDiscoveryBuildBuildExperimentsABendBend');
 for(const text of [sample.trimEnd(),sample.replaceAll('\n','\r\n'),sample.replaceAll('\n','\r'),sample+'\n',sample+`checko v1 ${base}\n`,'checko v1 wrong\n'+sample,sample+'checko']) assert.equal(await checko(text),base);
 for(const text of [sample.replace('title','Title'),sample.replace('title',' title'),sample.replace('little','little '),sample+' checko v1 nested\n',sample+'checkoOther word\n',sample+'checksum sha256 old\n',sample+'42']) assert.notEqual(await checko(text),base);
 for(const text of ['', '12345','hello','hello HELLO','你好 世界','Café']) await assert.rejects(checko(text),/two distinct/);
 assert.equal((await checko('alpha beta')).match(/[a-z]+|[A-Z][a-z]*/g).length,72);
 assert.notEqual(await checko('title Café\nword test'),await checko('title Cafe\u0301\nword test'));
 assert.ok((await checko('title Café\nword test')).match(/[a-z]+|[A-Z][a-z]*/g).every(w=>['title','word','test'].includes(w.toLowerCase())));
 // Decode each poem back to its 72 hash bits, independently of the implementation.
 const poems=[];let changes=0;
 for(let i=0;i<512;i++) {
  const text=sample+`number ${i}\n`, words=[...new Set(text.match(/[A-Za-z]+/g).map(w=>w.toLowerCase()))].sort(), poem=await checko(text), tokens=poem.match(/[a-z]+|[A-Z][a-z]*/g);
  let decoded=0n;
  for(const word of tokens) {const index=words.indexOf(word.toLowerCase());assert.ok(index>=0,'Every output word must occur in the input');decoded=decoded*BigInt(words.length)+BigInt(index);}
  const expected=BigInt('0x'+createHash('sha256').update('checko:v1\n'+text).digest('hex').slice(0,18));
  assert.equal(decoded,expected);assert.ok(BigInt(words.length)**BigInt(tokens.length)>=2n**72n);assert.ok(BigInt(words.length)**BigInt(tokens.length-1)<2n**72n);
  if(i) changes+=tokens.filter((w,j)=>w!==poems[i-1].match(/[a-z]+|[A-Z][a-z]*/g)[j]).length/tokens.length;
  poems.push(poem);
 }
 assert.equal(new Set(poems).size,poems.length);assert.ok(changes/(poems.length-1)>.8);
 console.log(`Checko v1 passed: document-only words, independent vector and 72-bit decoding, adaptive length, normalization, metadata, Unicode, short-input errors; ${(100*changes/(poems.length-1)).toFixed(1)}% of words changed across adjacent edit samples.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
