import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const js = readFileSync('app.js', 'utf8');
const css = readFileSync('style.css', 'utf8');

test('HTML enthält Seitentitel und Hauptüberschrift', () => {
  assert.match(html, /<title>CI\/CD Demo<\/title>/);
  assert.match(html, /<h1>.+<\/h1>/);
});

test('HTML lädt CSS und JavaScript', () => {
  assert.match(html, /href="style\.css"/);
  assert.match(html, /src="app\.js"/);
  assert.ok(css.length > 0);
});

test('Button und Nachrichtenelement existieren', () => {
  assert.match(html, /id="test-button"/);
  assert.match(html, /id="message"/);
  assert.match(js, /getElementById\('test-button'\)/);
  assert.match(js, /getElementById\('message'\)/);
});
