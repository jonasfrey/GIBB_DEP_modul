const test = require("node:test");
const assert = require("node:assert/strict");
const os = require("node:os");
const path = require("node:path");
const fs = require("node:fs");

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "dep-test-"));
process.env.APP_NAME = "dep-myapp-test";
process.env.APP_VERSION = "9.9.9";

const app = require("../server.js");

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const { port } = server.address();
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test("GET /api/health -> 200, status healthy", async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.deepEqual(body, { status: "healthy" });
});

test("GET /api/info -> Pflichtfelder vorhanden", async () => {
  const res = await fetch(`${baseUrl}/api/info`);
  assert.equal(res.status, 200);
  const body = await res.json();
  for (const key of ["name", "class", "hobby"]) {
    assert.ok(body[key], `feld ${key} fehlt`);
  }
});

test("GET /api/status -> liefert App-Metadaten aus ENV", async () => {
  const res = await fetch(`${baseUrl}/api/status`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.app, "dep-myapp-test");
  assert.equal(body.version, "9.9.9");
  assert.ok(body.hostname);
  assert.ok(!Number.isNaN(Date.parse(body.timestamp)));
});

test("GET /api/echo/:message -> Echo + reversed", async () => {
  const res = await fetch(`${baseUrl}/api/echo/hallo`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.received, "hallo");
  assert.equal(body.length, 5);
  assert.equal(body.reversed, "ollah");
});

test("GET /api/prime?n=97 -> prime=true", async () => {
  const res = await fetch(`${baseUrl}/api/prime?n=97`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.deepEqual(body, { n: 97, prime: true });
});

test("GET /api/prime?n=100 -> prime=false", async () => {
  const res = await fetch(`${baseUrl}/api/prime?n=100`);
  const body = await res.json();
  assert.equal(body.prime, false);
});

test("GET /api/prime?n=-1 -> 400", async () => {
  const res = await fetch(`${baseUrl}/api/prime?n=-1`);
  assert.equal(res.status, 400);
});

test("GET /api/log -> schreibt + liefert Eintrag", async () => {
  const res = await fetch(`${baseUrl}/api/log`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.ok(body.total >= 1);
  assert.ok(Array.isArray(body.entries));
});
