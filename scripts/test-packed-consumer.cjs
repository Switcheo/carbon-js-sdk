#!/usr/bin/env node
/* global __dirname, process, require */
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-packed-consumer-"));
process.on("exit", () => fs.rmSync(workspace, { recursive: true, force: true }));

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { cwd: options.cwd || root, encoding: "utf8", env: process.env });
  if (result.status !== 0) throw new Error(`${command} ${args.join(" ")} failed\n${result.stdout}\n${result.stderr}`);
  return result.stdout;
}

const packJson = JSON.parse(run("npm", ["pack", "--ignore-scripts", "--json", "--pack-destination", workspace]));
const tarball = path.join(workspace, packJson[0].filename);
const packageRoot = path.join(workspace, "consumer/node_modules/carbon-js-sdk");
fs.mkdirSync(packageRoot, { recursive: true });
run("tar", ["-xzf", tarball, "-C", packageRoot, "--strip-components=1"]);

const packedFiles = new Set(packJson[0].files.map((entry) => entry.path));
const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
for (const [publicPath, conditions] of Object.entries(manifest.exports)) {
  for (const target of typeof conditions === "string" ? [conditions] : Object.values(conditions)) {
    const relative = target.replace(/^\.\//, "");
    if (!packedFiles.has(relative)) throw new Error(`${publicPath} target missing from tarball: ${relative}`);
  }
}
if ([...packedFiles].some((file) => file.startsWith("src/") || file.startsWith("tests/") || file.startsWith("scripts/"))) {
  throw new Error("source, tests, or scripts leaked into packed artifact");
}

const consumerRoot = path.join(workspace, "consumer");
const consumerModules = path.join(consumerRoot, "node_modules");
const declaredDependencies = Object.keys(manifest.dependencies || {}).sort();
for (const dependency of declaredDependencies) {
  const source = path.join(root, "node_modules", ...dependency.split("/"));
  const destination = path.join(consumerModules, ...dependency.split("/"));
  if (!fs.existsSync(source)) throw new Error(`declared dependency is not installed: ${dependency}`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.symlinkSync(source, destination, "dir");
}

fs.writeFileSync(path.join(consumerRoot, "cjs.cjs"), `
const root = require("carbon-js-sdk");
const legacy = require("carbon-js-sdk/lib/util/number");
const legacyJs = require("carbon-js-sdk/lib/util/number.js");
const stable = require("carbon-js-sdk/util/number");
const compose = require("carbon-js-sdk/compose");
const order = require("carbon-js-sdk/features/order");
const abi = require("carbon-js-sdk/lib/eth/abis/erc20.json");
if (!root.Models.registry || legacy.bnOrZero !== legacyJs.bnOrZero || stable.bnOrZero("2").toString() !== "2" || typeof compose.composeModules !== "function" || typeof order.orderFeature.createModules !== "function" || !Array.isArray(abi)) process.exit(1);
`);
fs.writeFileSync(path.join(consumerRoot, "esm.mjs"), `
import * as root from "carbon-js-sdk";
import { composeModules } from "carbon-js-sdk/compose";
import { orderFeature } from "carbon-js-sdk/features/order";
import { bnOrZero as stable } from "carbon-js-sdk/util/number";
import { bnOrZero as legacy } from "carbon-js-sdk/lib/util/number.js";
import { MsgBlacklistAddress } from "carbon-js-sdk/codec/carbon/bank/tx";
if (!root.Models.registry || stable("3").toString() !== "3" || stable !== legacy || typeof composeModules !== "function" || typeof orderFeature.createModules !== "function" || !MsgBlacklistAddress.fromPartial) process.exit(1);
`);
run(process.execPath, ["cjs.cjs"], { cwd: consumerRoot });
run(process.execPath, ["esm.mjs"], { cwd: consumerRoot });

fs.writeFileSync(path.join(consumerRoot, "classic.ts"), `
import CarbonSDK, { Models, NumberUtils } from "carbon-js-sdk";
import { bnOrZero } from "carbon-js-sdk/util/number";
import { MsgBlacklistAddress } from "carbon-js-sdk/codec/carbon/bank/tx";
const sdk: typeof CarbonSDK = CarbonSDK;
const value: string = bnOrZero("1").toString();
void [sdk, Models.registry, NumberUtils.bnOrZero, MsgBlacklistAddress.fromPartial, value];
`);
fs.writeFileSync(path.join(consumerRoot, "modern.mts"), `
import CarbonSDK, { Models } from "carbon-js-sdk";
import { bnOrZero } from "carbon-js-sdk/util/number";
import { MsgBlacklistAddress } from "carbon-js-sdk/codec/carbon/bank/tx";
void [CarbonSDK, Models.registry, bnOrZero, MsgBlacklistAddress.fromPartial];
`);
const tsc = path.join(root, "node_modules/typescript/bin/tsc");
run(process.execPath, [tsc, "--noEmit", "--skipLibCheck", "--target", "ES2020", "--module", "CommonJS", "--moduleResolution", "node", "--esModuleInterop", "classic.ts"], { cwd: consumerRoot });
run(process.execPath, [tsc, "--noEmit", "--skipLibCheck", "--target", "ES2022", "--module", "NodeNext", "--moduleResolution", "NodeNext", "modern.mts"], { cwd: consumerRoot });

console.log(`verified packed consumer: ${packedFiles.size} files, ${Object.keys(manifest.exports).length} exports, ${declaredDependencies.length} isolated declared dependencies`);
