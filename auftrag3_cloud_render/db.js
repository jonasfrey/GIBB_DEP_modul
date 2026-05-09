const { Pool } = require("pg");
const log = require("./logger");

let pool = null;
const memLog = [];

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === "disable" ? false : { rejectUnauthorized: false }
  });
  pool.on("error", (err) => log.error("pg pool error", { err: err.message }));
}

async function init() {
  if (!pool) {
    log.warn("DATABASE_URL not set, falling back to in-memory log (non-persistent)");
    return;
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS request_log (
      id     SERIAL PRIMARY KEY,
      ts     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      ip     TEXT,
      path   TEXT
    )
  `);
  log.info("postgres ready, request_log table ensured");
}

async function recordHit(ip, path) {
  if (!pool) {
    memLog.push({ id: memLog.length + 1, ts: new Date().toISOString(), ip, path });
    return;
  }
  await pool.query("INSERT INTO request_log (ip, path) VALUES ($1, $2)", [ip, path]);
}

async function recentHits(limit = 50) {
  if (!pool) return memLog.slice(-limit).reverse();
  const r = await pool.query(
    "SELECT id, ts, ip, path FROM request_log ORDER BY id DESC LIMIT $1",
    [limit]
  );
  return r.rows;
}

async function totalHits() {
  if (!pool) return memLog.length;
  const r = await pool.query("SELECT COUNT(*)::int AS count FROM request_log");
  return r.rows[0].count;
}

async function close() {
  if (pool) await pool.end();
}

module.exports = {
  init,
  recordHit,
  recentHits,
  totalHits,
  close,
  isPersistent: () => Boolean(pool)
};
