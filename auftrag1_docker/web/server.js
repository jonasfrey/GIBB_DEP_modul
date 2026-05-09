const express = require("express");
const path = require("path");
const os = require("os");
const log = require("./logger");
const db = require("./db");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const APP_NAME = process.env.APP_NAME || "dep-myapp-c3";
const APP_VERSION = process.env.APP_VERSION || "1.0.0";

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  log.info("http", { method: req.method, path: req.path, ip: req.ip });
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", async (_req, res) => {
  res.json({ status: "healthy", persistent: db.isPersistent() });
});

app.get("/api/info", (_req, res) => {
  res.json({ name: "Jonas Frey", class: "HFI_DEP", hobby: "3D-Druck" });
});

app.get("/api/status", (_req, res) => {
  res.json({
    hostname: os.hostname(),
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
    app: APP_NAME,
    persistent: db.isPersistent()
  });
});

app.get("/api/echo/:message", (req, res) => {
  const message = String(req.params.message).slice(0, 200);
  res.json({
    received: message,
    length: message.length,
    reversed: message.split("").reverse().join("")
  });
});

app.get("/api/prime", (req, res) => {
  const n = parseInt(req.query.n, 10);
  if (!Number.isFinite(n) || n < 0 || n > 1_000_000) {
    return res.status(400).json({ error: "Parameter n muss Zahl zwischen 0 und 1000000 sein" });
  }
  let prime = n >= 2;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) { prime = false; break; }
  }
  res.json({ n, prime });
});

app.post("/api/visits", async (req, res, next) => {
  try {
    await db.recordHit(req.ip, req.path);
    const total = await db.totalHits();
    res.status(201).json({ ok: true, total });
  } catch (err) { next(err); }
});

app.get("/api/visits", async (_req, res, next) => {
  try {
    const [total, recent] = await Promise.all([db.totalHits(), db.recentHits(20)]);
    res.json({ total, recent, persistent: db.isPersistent() });
  } catch (err) { next(err); }
});

app.use((err, _req, res, _next) => {
  log.error("unhandled", { err: err.message, stack: err.stack });
  res.status(500).json({ error: "internal error" });
});

async function start() {
  await db.init();
  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      log.info("listening", { port: PORT, app: APP_NAME, version: APP_VERSION });
      resolve(server);
    });
  });
}

if (require.main === module) {
  start().catch((err) => {
    log.error("startup failed", { err: err.message });
    process.exit(1);
  });
}

module.exports = { app, start, db };
