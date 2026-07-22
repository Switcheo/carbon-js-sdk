/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const moduleBuiltin = require("node:module");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const projectRoot = path.resolve(__dirname, "..");
const manifest = require(path.join(projectRoot, "package.json"));
const builtins = new Set(
  moduleBuiltin.builtinModules.flatMap((name) => [name, name.replace(/^node:/, "")]),
);

const expectedDirectContracts = {
  "@cosmjs/crypto": "0.38.1",
  "@cosmjs/encoding": "0.38.1",
  "@cosmjs/math": "0.38.1",
  "@cosmjs/tendermint-rpc": "0.38.1",
  "@cosmjs/utils": "0.38.1",
  "@ethersproject/abstract-signer": "5.8.0",
  "@ledgerhq/hw-transport": "6.28.8",
  axios: "0.33.0",
  bech32: "1.1.4",
  long: "4.0.0",
  protobufjs: "7.6.5",
  rxjs: "6.6.7",
};

function packageRoot(specifier) {
  if (
    specifier.startsWith(".") ||
    specifier.startsWith("/") ||
    specifier.startsWith("node:") ||
    specifier.startsWith("@carbon-sdk/") ||
    builtins.has(specifier)
  ) {
    return undefined;
  }
  const parts = specifier.split("/");
  return specifier.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
}

function collectSourceDependencies() {
  const dependencies = new Set();
  const add = (specifier) => {
    const dependency = packageRoot(specifier);
    if (dependency) dependencies.add(dependency);
  };

  const visit = (node) => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteralLike(node.moduleSpecifier)
    ) {
      add(node.moduleSpecifier.text);
    } else if (
      ts.isImportEqualsDeclaration(node) &&
      ts.isExternalModuleReference(node.moduleReference) &&
      node.moduleReference.expression &&
      ts.isStringLiteralLike(node.moduleReference.expression)
    ) {
      add(node.moduleReference.expression.text);
    } else if (
      ts.isImportTypeNode(node) &&
      ts.isLiteralTypeNode(node.argument) &&
      ts.isStringLiteralLike(node.argument.literal)
    ) {
      add(node.argument.literal.text);
    } else if (
      ts.isCallExpression(node) &&
      node.arguments.length > 0 &&
      ts.isStringLiteralLike(node.arguments[0])
    ) {
      const callee = node.expression;
      const isRequire = ts.isIdentifier(callee) && callee.text === "require";
      const isDynamicImport = callee.kind === ts.SyntaxKind.ImportKeyword;
      if (isRequire || isDynamicImport) add(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  };

  const scan = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        scan(entryPath);
        continue;
      }
      if (!/\.(?:ts|tsx)$/.test(entry.name)) continue;
      const source = ts.createSourceFile(
        entryPath,
        fs.readFileSync(entryPath, "utf8"),
        ts.ScriptTarget.Latest,
        true,
        entry.name.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
      );
      for (const directive of source.typeReferenceDirectives) add(directive.fileName);
      visit(source);
    }
  };

  scan(path.join(projectRoot, "src"));
  return [...dependencies].sort();
}

for (const [packageName, expectedVersion] of Object.entries(expectedDirectContracts)) {
  test(`${packageName} is an exact direct runtime contract`, () => {
    assert.equal(manifest.dependencies[packageName], expectedVersion);
    assert.doesNotThrow(() => require.resolve(packageName));
  });
}

test("every external source import is a direct runtime dependency", () => {
  const missing = collectSourceDependencies().filter(
    (packageName) => !Object.prototype.hasOwnProperty.call(manifest.dependencies, packageName),
  );
  assert.deepEqual(missing, []);
});

test("every direct runtime dependency is imported or an explicit support contract", () => {
  const sourceDependencies = new Set(collectSourceDependencies());
  const nonSourceDependencies = Object.keys(manifest.dependencies)
    .filter((packageName) => !sourceDependencies.has(packageName))
    .sort();

  assert.deepEqual(nonSourceDependencies, [
    "@bufbuild/protobuf",
    "@types/long",
    "google-protobuf",
  ]);
});
