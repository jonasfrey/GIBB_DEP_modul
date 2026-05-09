function emit(level, msg, extra) {
  const line = {
    ts: new Date().toISOString(),
    level,
    msg,
    ...extra
  };
  process.stdout.write(JSON.stringify(line) + "\n");
}

module.exports = {
  info: (msg, extra) => emit("info", msg, extra),
  warn: (msg, extra) => emit("warn", msg, extra),
  error: (msg, extra) => emit("error", msg, extra)
};
