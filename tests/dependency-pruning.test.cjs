/* eslint-disable @typescript-eslint/no-require-imports */
/* global __dirname, require */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const projectRoot = path.resolve(__dirname, "..");
const manifest = require(path.join(projectRoot, "package.json"));

const removedRuntimeRoots = [
  "@cityofzion/neon-api",
  "@cityofzion/neon-core",
  "@cityofzion/neon-core-next",
  "@cityofzion/neon-js",
  "@cosmos-kit/leap",
  "@metamask/detect-provider",
  "base58check",
  "eventemitter3",
  "secp256r1",
];

for (const packageName of removedRuntimeRoots) {
  test(`${packageName} is not a direct runtime dependency`, () => {
    assert.equal(manifest.dependencies[packageName], undefined);
  });
}

const requiredRuntimeContracts = {
  "@cosmos-kit/core": "1.8.0",
  "@cosmos-kit/leap-extension": "0.18.0",
  "crypto-js": "4.2.0",
};

for (const [packageName, expectedVersion] of Object.entries(requiredRuntimeContracts)) {
  test(`${packageName} is an exact direct runtime dependency`, () => {
    assert.equal(manifest.dependencies[packageName], expectedVersion);
    assert.doesNotThrow(() => require.resolve(path.join(packageName, "package.json")));
  });
}

test("@types/crypto-js is the exact direct development type contract", () => {
  assert.equal(manifest.devDependencies["@types/crypto-js"], "4.0.1");
  assert.doesNotThrow(() => require.resolve("@types/crypto-js/package.json"));
});

test("removed roots are absent from source and compiled module specifiers", () => {
  const roots = ["src", "lib", "scripts", "examples"];
  const sourceExtensions = new Set([".cjs", ".js", ".mjs", ".ts", ".tsx"]);
  const findings = [];

  const checkSpecifier = (entryPath, specifier) => {
    const removedRoot = removedRuntimeRoots.find(
      (packageName) => specifier === packageName || specifier.startsWith(`${packageName}/`),
    );
    if (removedRoot) {
      findings.push(`${path.relative(projectRoot, entryPath)} imports ${removedRoot}`);
    }
  };

  const inspectNode = (entryPath, node) => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteralLike(node.moduleSpecifier)
    ) {
      checkSpecifier(entryPath, node.moduleSpecifier.text);
    } else if (
      ts.isImportEqualsDeclaration(node) &&
      ts.isExternalModuleReference(node.moduleReference) &&
      node.moduleReference.expression &&
      ts.isStringLiteralLike(node.moduleReference.expression)
    ) {
      checkSpecifier(entryPath, node.moduleReference.expression.text);
    } else if (
      ts.isImportTypeNode(node) &&
      ts.isLiteralTypeNode(node.argument) &&
      ts.isStringLiteralLike(node.argument.literal)
    ) {
      checkSpecifier(entryPath, node.argument.literal.text);
    } else if (
      ts.isCallExpression(node) &&
      node.arguments.length > 0 &&
      ts.isStringLiteralLike(node.arguments[0])
    ) {
      const callee = node.expression;
      const isStaticRequire = ts.isIdentifier(callee) && callee.text === "require";
      const isDynamicImport = callee.kind === ts.SyntaxKind.ImportKeyword;
      const isRequireResolve =
        ts.isPropertyAccessExpression(callee) &&
        ts.isIdentifier(callee.expression) &&
        callee.expression.text === "require" &&
        callee.name.text === "resolve";
      if (isStaticRequire || isDynamicImport || isRequireResolve) {
        checkSpecifier(entryPath, node.arguments[0].text);
      }
    }
    ts.forEachChild(node, (child) => inspectNode(entryPath, child));
  };

  const scan = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        scan(entryPath);
        continue;
      }
      if (!sourceExtensions.has(path.extname(entry.name))) continue;

      const content = fs.readFileSync(entryPath, "utf8");
      const sourceFile = ts.createSourceFile(
        entryPath,
        content,
        ts.ScriptTarget.Latest,
        true,
        entry.name.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
      );
      for (const directive of sourceFile.typeReferenceDirectives) {
        checkSpecifier(entryPath, directive.fileName);
      }
      inspectNode(entryPath, sourceFile);
    }
  };

  for (const root of roots) {
    const directory = path.join(projectRoot, root);
    if (fs.existsSync(directory)) scan(directory);
  }

  assert.deepEqual(findings, []);
});

test("removed ambient package declarations do not survive the pruning", () => {
  const declarationFiles = ["src/util/types.d.ts", "examples/_setup.ts"];
  for (const declarationFile of declarationFiles) {
    const declarations = fs.readFileSync(path.join(projectRoot, declarationFile), "utf8");
    assert.doesNotMatch(declarations, /declare module ["'](?:base58check|secp256r1)["']/);
  }
});

test("the compiled Leap declarations expose the exact replacement contracts", () => {
  const indexDeclarations = fs.readFileSync(
    path.join(projectRoot, "lib/provider/leap/index.d.ts"),
    "utf8",
  );
  const accountDeclarations = fs.readFileSync(
    path.join(projectRoot, "lib/provider/leap/LeapAccount.d.ts"),
    "utf8",
  );
  assert.match(indexDeclarations, /from ["']@cosmos-kit\/core["']/);
  assert.match(indexDeclarations, /from ["']@cosmos-kit\/leap-extension["']/);
  assert.match(accountDeclarations, /from ["']@cosmos-kit\/leap-extension["']/);
});
