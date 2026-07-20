/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, process, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

test("feature composition preserves the selected query and module types", () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-compose-types-"));
  try {
    const nodeModules = path.join(workspace, "node_modules");
    fs.mkdirSync(nodeModules);
    fs.symlinkSync(root, path.join(nodeModules, "carbon-js-sdk"), "dir");
    fs.writeFileSync(path.join(workspace, "consumer.ts"), `
import { composeModules, composeQueries, createFeatureRegistry } from "carbon-js-sdk/compose";
import { orderFeature } from "carbon-js-sdk/features/order";
import type { OrderModule } from "carbon-js-sdk/lib/modules/order";

declare const rpc: Parameters<typeof composeQueries>[0];
declare const provider: Parameters<typeof composeModules>[0];
declare const legacyOrder: OrderModule;

legacyOrder.sdkProvider.query;
const query = composeQueries(rpc, [orderFeature]);
const modules = composeModules(provider, [orderFeature]);
query.order.Order({ id: "42" });
modules.order.cancel({ id: "42" });
createFeatureRegistry([orderFeature]);
// @ts-expect-error unselected query groups must not appear in the inferred type
query.bank;
// @ts-expect-error unselected transaction modules must not appear in the inferred type
modules.bank;
`);
    fs.writeFileSync(path.join(workspace, "tsconfig.json"), JSON.stringify({
      compilerOptions: {
        module: "Node16",
        moduleResolution: "Node16",
        noEmit: true,
        skipLibCheck: true,
        strict: true,
        target: "ES2022",
      },
      files: ["consumer.ts"],
    }));
    const result = spawnSync(process.execPath, [
      path.join(root, "node_modules/typescript/bin/tsc"),
      "--project",
      path.join(workspace, "tsconfig.json"),
    ], { cwd: workspace, encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr || result.stdout);
  } finally {
    fs.rmSync(workspace, { recursive: true, force: true });
  }
});
