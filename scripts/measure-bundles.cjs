#!/usr/bin/env node
/* global __dirname, process, require */
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const zlib = require("node:zlib");
const { rollup } = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const webpack = require("webpack");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const cases = {
  "root-number": 'import { NumberUtils } from "carbon-js-sdk"; console.log(NumberUtils.bnOrZero("1").toString());\n',
  "stable-number": 'import { bnOrZero } from "carbon-js-sdk/util/number"; console.log(bnOrZero("1").toString());\n',
  "stable-model": 'import { MsgBlacklistAddress } from "carbon-js-sdk/codec/carbon/bank/tx"; console.log(MsgBlacklistAddress.fromPartial({ authority: "x" }).authority);\n',
  provider: 'import { Eip6963Provider } from "carbon-js-sdk/provider/eip6963"; console.log(typeof Eip6963Provider);\n',
  wallet: 'import { CarbonPrivateKeySigner } from "carbon-js-sdk/wallet/signer"; console.log(typeof CarbonPrivateKeySigner);\n',
  sdk: 'import { CarbonSDK } from "carbon-js-sdk"; console.log(typeof CarbonSDK);\n',
  registry: 'import { registry } from "carbon-js-sdk/codec/registry"; console.log(Boolean(registry.lookupType("/cosmos.authz.v1beta1.GenericAuthorization")));\n',
};

function isThirdParty(request) {
  return Boolean(request && !request.startsWith(".") && !path.isAbsolute(request) && request !== "carbon-js-sdk" && !request.startsWith("carbon-js-sdk/"));
}
function owner(request) {
  const clean = request.replace(/^node:/, "");
  return clean.startsWith("@") ? clean.split("/").slice(0, 2).join("/") : clean.split("/")[0];
}
function emittedOwners(source, file) {
  const ast = ts.createSourceFile(file, source.toString(), ts.ScriptTarget.Latest, false, ts.ScriptKind.JS);
  return new Set(ast.statements
    .filter((statement) => (ts.isImportDeclaration(statement) || ts.isExportDeclaration(statement)) &&
      statement.moduleSpecifier && ts.isStringLiteralLike(statement.moduleSpecifier))
    .map((statement) => statement.moduleSpecifier.text)
    .filter(isThirdParty)
    .map(owner));
}
function smoke(args, options) {
  const result = spawnSync(process.execPath, args, { ...options, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return {
    passed: result.status === 0,
    error: result.status === 0 ? undefined : (result.error?.message || result.stderr || result.stdout || "unknown runtime failure").trim(),
  };
}
function metric(source, owners, warnings, ignoredWarnings, runtime) {
  const text = Buffer.isBuffer(source) ? source : Buffer.from(source);
  return {
    raw: text.length,
    gzip: zlib.gzipSync(text, { level: 9 }).length,
    containsRegistry: text.includes("GenericAuthorization") || text.includes("MsgExecuteContract"),
    owners: [...owners].sort(),
    warnings: [...warnings].sort(),
    ignoredWarnings: [...ignoredWarnings].sort(),
    runtimeSmoke: runtime.passed,
    ...(runtime.error ? { runtimeError: runtime.error } : {}),
  };
}
function runWebpack(config) {
  return new Promise((resolve, reject) => webpack(config, (error, stats) => {
    if (error) return reject(error);
    if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true, errorDetails: true })));
    resolve(stats.toJson({ all: false, warnings: true }).warnings || []);
  }));
}

(async () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "carbon-bundles-"));
  process.on("exit", () => fs.rmSync(workspace, { recursive: true, force: true }));
  const modules = path.join(workspace, "node_modules");
  fs.mkdirSync(modules, { recursive: true });
  fs.symlinkSync(root, path.join(modules, "carbon-js-sdk"), "dir");
  for (const entry of fs.readdirSync(path.join(root, "node_modules")).sort()) {
    if (entry === ".bin" || entry === "carbon-js-sdk") continue;
    fs.symlinkSync(path.join(root, "node_modules", entry), path.join(modules, entry), "dir");
  }
  const results = {};

  for (const [name, source] of Object.entries(cases)) {
    const input = path.join(workspace, `${name}.mjs`);
    fs.writeFileSync(input, source);

    const rollupWarnings = new Set();
    const rollupIgnoredWarnings = new Set();
    const rollupBundle = await rollup({
      input,
      external: (id) => isThirdParty(id),
      plugins: [nodeResolve({ exportConditions: ["import", "default"] }), commonjs()],
      treeshake: { moduleSideEffects: false },
      onwarn(warning) {
        if (warning.code === "CIRCULAR_DEPENDENCY") rollupIgnoredWarnings.add(warning.code);
        else rollupWarnings.add(warning.code || warning.message);
      },
    });
    const generated = await rollupBundle.generate({ format: "esm", compact: true });
    await rollupBundle.close();
    const rollupSource = generated.output.filter((item) => item.type === "chunk").map((item) => item.code).join("\n");
    const rollupOwners = new Set(generated.output
      .filter((item) => item.type === "chunk")
      .flatMap((item) => [...item.imports, ...item.dynamicImports])
      .filter(isThirdParty)
      .map(owner));
    const rollupFile = path.join(workspace, "rollup", `${name}.mjs`);
    fs.mkdirSync(path.dirname(rollupFile), { recursive: true });
    fs.writeFileSync(rollupFile, rollupSource);

    const webpackOutput = path.join(workspace, "webpack", name);
    const webpackWarnings = await runWebpack({
      mode: "production",
      target: "node24",
      context: workspace,
      entry: input,
      devtool: false,
      output: { path: webpackOutput, filename: "bundle.mjs", module: true },
      experiments: { outputModule: true },
      externalsType: "module",
      resolve: { conditionNames: ["import", "module", "default"], symlinks: true },
      externals: [({ request }, callback) => {
        if (!isThirdParty(request)) return callback();
        return callback(null, request);
      }],
      optimization: { minimize: true, usedExports: true, sideEffects: true },
      stats: "errors-only",
    });
    const webpackFile = path.join(webpackOutput, "bundle.mjs");
    const webpackSource = fs.readFileSync(webpackFile);
    const webpackOwners = emittedOwners(webpackSource, webpackFile);
    const rollupRuntime = smoke([rollupFile], { cwd: workspace });
    const webpackRuntime = smoke([webpackFile], { cwd: workspace });
    results[name] = {
      rollup: metric(rollupSource, rollupOwners, rollupWarnings, rollupIgnoredWarnings, rollupRuntime),
      webpack: metric(
        webpackSource,
        webpackOwners,
        new Set(webpackWarnings.map((warning) => warning.message || String(warning))),
        new Set(),
        webpackRuntime,
      ),
    };
  }
  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
