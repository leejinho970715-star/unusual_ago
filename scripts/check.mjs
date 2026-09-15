import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('app.js', 'utf8');
const motion = fs.readFileSync('motion.js', 'utf8');
new vm.Script(app); new vm.Script(motion);
new vm.Script(fs.readFileSync('section-motion.js', 'utf8'));
const portraits = [...app.matchAll(/fashionImg:\s*['"](assets\/types\/[^'"]+)['"]/g)].map(m => m[1]);
assert.equal(portraits.length, 16, 'Every MBTI type needs a portrait');
assert.equal(new Set(portraits).size, 16, 'Every MBTI portrait must be distinct');
assert(html.includes('<title>unusual ago</title>'));
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(match[1]), `Missing anchor ${match[1]}`);
const refs = new Set([...[...html.matchAll(/(?:src|href)="((?:assets\/|\.\/)?[^":#]+\.(?:jpg|png|js|css))"/g)].map(m=>m[1]), ...[...app.matchAll(/['"](assets\/[^'"]+)['"]/g)].map(m=>m[1])]);
for (const file of refs) assert(fs.existsSync(file), `Missing file ${file}`);
// Exercise real quiz logic for every combination; rendering targets are minimal DOM doubles.
const elements = new Map();
const element = id => { if (!elements.has(id)) elements.set(id, { innerText:'',src:'',classList:{toggle(){}} }); return elements.get(id); };
const context = vm.createContext({ document:{addEventListener(){},getElementById:element}, localStorage:{getItem(){return '{bad persisted data';}} });
vm.runInContext(app, context);
assert.equal(vm.runInContext('cart.length', context), 0, 'Malformed storage must not stop the app');
assert.equal(vm.runInContext('Object.keys(MBTI_MATRIX).length', context), 16);
const recommendations = vm.runInContext('Object.values(MBTI_MATRIX).map(type => type.recommendedItems)', context);
for (const items of recommendations) {
  assert.equal(new Set(items.map(item => item.img)).size, items.length, 'Different recommended products need distinct images');
  for (const item of items) assert(item.img.startsWith('assets/products/'), `Missing product photograph: ${item.name}`);
}
const results = new Set();
for (let bits=0; bits<16; bits++) {
  const traits = [0,1,2,3].map(i=>(bits>>i)&1);
  vm.runInContext(`quizTraits=${JSON.stringify(traits)}; toggleQuizTrait(0); toggleQuizTrait(0);`,context);
  const expected = (traits[0]?'I':'E')+(traits[1]?'S':'N')+(traits[2]?'T':'F')+(traits[3]?'J':'P');
  assert.equal(element('quiz-result-code').innerText, expected);
  assert(fs.existsSync(element('quiz-result-img').src));
  results.add(expected);
}
assert.equal(results.size,16);
console.log(`PASS: JavaScript syntax, ${ids.length} unique IDs, local links, ${refs.size} asset references, 16 MBTI combinations, malformed storage fallback.`);
