const path = require("node:path");

function assertSafeSubpath(label, value, options = {}) {
  const allowRoot = options.allowRoot === true;
  const validRoot = allowRoot && value === ".";
  const segments = typeof value === "string" ? value.split("/") : [];
  const safe = validRoot || (
    typeof value === "string" &&
    value.length > 0 &&
    !path.posix.isAbsolute(value) &&
    !path.win32.isAbsolute(value) &&
    !/^[A-Za-z]:/.test(value) &&
    !value.includes("\\") &&
    segments.every((segment) => segment.length > 0 && segment !== "." && segment !== "..")
  );
  if (!safe) throw new Error(`${label} must be a safe normalized package subpath: ${String(value)}`);
  return value;
}

module.exports = { assertSafeSubpath };
