const express = require("express");
const path = require("path");
const fs = require("fs");
const os = require("os");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const APP_NAME = process.env.APP_NAME || "dep-myapp";
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({ status: "healthy" });
});

app.get("/api/info", (_req, res) => {
  res.json({
    name: "Jonas Frey",
    class: "HFI_DEP",
    hobby: "3D-Druck"
  });
});

app.get("/api/status", (_req, res) => {
  res.json({
    hostname: os.hostname(),
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
    app: APP_NAME
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

app.get("/api/log", (_req, res) => {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const logFile = path.join(DATA_DIR, "requests.log");
  const entry = `${new Date().toISOString()}\n`;
  fs.appendFileSync(logFile, entry);
  const content = fs.readFileSync(logFile, "utf-8");
  const entries = content.split("\n").filter(l => l.trim());
  res.json({ total: entries.length, entries });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`[${APP_NAME}] v${APP_VERSION} läuft auf Port ${PORT}`);
  });
}

module.exports = app;
