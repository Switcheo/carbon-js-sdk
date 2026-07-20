/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

test("packed artifact supports legacy, stable, CJS, ESM, and TypeScript consumers", () => {
  const cleanHome = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-packed-home-"));
  try {
    const result = spawnSync(process.execPath, [path.join(root, "scripts/test-packed-consumer.cjs")], {
      cwd: root,
      encoding: "utf8",
      env: { ...process.env, HOME: cleanHome },
    });
    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(result.stdout, /verified packed consumer/);
    assert.match(result.stdout, /isolated declared dependencies/);
  } finally {
    fs.rmSync(cleanHome, { recursive: true, force: true });
  }
});
