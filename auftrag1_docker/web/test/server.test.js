const test = require("node:test");
const assert = require("node:assert/strict");

// In-Memory-Modus erzwingen (kein DATABASE_URL gesetzt) -> Tests laufen ohne DB.
delete process.env.DATABASE_URL;
process.env.APP_NAME = "dep-myapp-c3-test";
process.env.APP_VERSION = "9.9.9";

const { app, db } = require("../server.js");

let server;
let baseUrl;

test.before(async () => {
  await db.init();
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
  await db.close();
});

test("GET /api/health -> 200, status healthy", async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.status, "healthy");
  assert.equal(typeof body.persistent, "boolean");
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
  assert.equal(body.app, "dep-myapp-c3-test");
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
  assert.deepEqual(await res.json(), { n: 97, prime: true });
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

test("POST /api/visits -> erhoeht den Counter", async () => {
  const before = await fetch(`${baseUrl}/api/visits`).then(r => r.json());
  const post = await fetch(`${baseUrl}/api/visits`, { method: "POST" });
  assert.equal(post.status, 201);
  const after = await fetch(`${baseUrl}/api/visits`).then(r => r.json());
  assert.equal(after.total, before.total + 1);
  assert.ok(Array.isArray(after.recent));
});

test("In-Memory-Fallback signalisiert sich korrekt", async () => {
  const res = await fetch(`${baseUrl}/api/status`).then(r => r.json());
  assert.equal(res.persistent, false, "ohne DATABASE_URL erwartet wir In-Memory-Mode");
});
