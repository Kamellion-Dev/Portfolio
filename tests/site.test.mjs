import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, extname, relative } from 'node:path';

const root = resolve(process.env.SITE_DIR || '_site');
const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap(item =>
  item.isDirectory() ? htmlFiles(resolve(dir, item.name)) : item.name.endsWith('.html') ? [resolve(dir, item.name)] : []);
const files = htmlFiles(root);
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1], m[2]]));
const ids = (text) => [...text.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]);

test('published pages have one main heading and unique IDs', () => {
  assert.ok(files.length);
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    assert.equal((text.match(/<h1\b/g) || []).length, 1, relative(root, file));
    assert.equal(ids(text).length, new Set(ids(text)).size, `duplicate IDs: ${file}`);
  }
});

test('every published internal link, asset and fragment resolves', () => {
  const failures = [];
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    for (const match of text.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
      const a = attrs(match[0]);
      const value = a.href ?? a.src;
      if (value === undefined || /^(https?:|mailto:|tel:|data:)/.test(value)) continue;
      if (!value || value === '#') { failures.push(`${relative(root,file)}: empty destination`); continue; }
      const [url, fragment] = value.split('#');
      const path = decodeURIComponent(url.split('?')[0]);
      let target = path.startsWith('/Portfolio/') ? resolve(root, path.slice(11)) : path.startsWith('/') ? resolve(root, path.slice(1)) : resolve(dirname(file), path);
      if (!path) target = file;
      else if (!extname(target)) target = resolve(target, 'index.html');
      if (!target.startsWith(root + '\\') && !target.startsWith(root + '/') && target !== root) { failures.push(`outside output: ${value}`); continue; }
      if (!existsSync(target)) { failures.push(`${relative(root,file)}: missing ${value}`); continue; }
      if (fragment && extname(target) === '.html' && !ids(readFileSync(target,'utf8')).includes(fragment)) failures.push(`missing fragment: ${value}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('product images are local, named and dimensioned to reserve layout space', () => {
  for (const file of files) {
    for (const match of readFileSync(file,'utf8').matchAll(/<img\b[^>]*>/g)) {
      const a = attrs(match[0]);
      assert.ok(a.alt?.trim(), `missing alt in ${file}`);
      assert.ok(Number(a.width)>0 && Number(a.height)>0, `missing dimensions in ${file}`);
      assert.ok(!/^(https?:|data:)/.test(a.src), `image must be bundled: ${file}`);
    }
  }
});

test('every page exposes named mobile navigation and a PDF download', () => {
  for (const file of files) {
    const text = readFileSync(file,'utf8');
    const toggle = [...text.matchAll(/<button\b[^>]*>/g)].map(m=>attrs(m[0])).find(a=>a['aria-controls']==='site-nav');
    assert.ok(toggle?.['aria-label'], `unnamed menu: ${file}`);
    assert.equal(toggle['aria-expanded'], 'false');
    const pdf = text.match(/href=["']([^"']+\.pdf)["']/)?.[1];
    assert.ok(pdf, `missing resume: ${file}`);
    const target = resolve(dirname(file),pdf);
    assert.equal(readFileSync(target).subarray(0,5).toString(),'%PDF-');
  }
});

test('release includes only the four personal projects and excludes development material', () => {
  const projectDirs = readdirSync(resolve(root,'projects')).sort();
  assert.deepEqual(projectDirs,['food-sawa','ledgerflow','nexus-core','semsarco']);
  for (const name of ['.git','.venv','docs','config','site','tests','scripts','old-index.html','projects-seed.json']) {
    assert.ok(!existsSync(resolve(root,name)), `development material published: ${name}`);
  }
  for (const file of files) {
    const text = readFileSync(file,'utf8');
    assert.ok(!/Parcel Express|ERP Jeyad|Atom B2B|Klipbot|Almathal|Shopsze/.test(text),`commercial showcase in ${file}`);
  }
});

test('published theme exposes the cloud palette and non-interactive data-grid layer', () => {
  const css = readFileSync(resolve(root,'assets/css/portfolio.css'),'utf8');
  for (const token of [
    '--teal:#2dd4bf',
    '--violet:#8b5cf6',
    '--pink:#ff4d9d',
    '--grid-opacity:.24',
    '--glass:rgba(15,19,56,.72)',
    '--mobile-body-size:16px'
  ]) assert.ok(css.includes(token), `missing theme token: ${token}`);
  assert.match(css,/body::before\s*\{[^}]*pointer-events:none[^}]*background-image:/s);
  assert.match(css,/\.hero\s*\{[^}]*overflow:clip/s);
  assert.match(css,/\.system-visual\s*\{[^}]*position:relative[^}]*overflow:hidden/s);
  assert.match(css,/@media\s*\(prefers-reduced-motion:reduce\)/);
});
