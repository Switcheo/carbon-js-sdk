#!/usr/bin/env node
/* global __dirname, process, require */
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const sourceRootArgument = process.argv.indexOf("--source-root");
const defaultSourceRoot = path.join(root, "src");
if (sourceRootArgument !== -1 && !process.argv[sourceRootArgument + 1]) {
  throw new Error("--source-root requires a path");
}
const sourceRoot = sourceRootArgument === -1
  ? defaultSourceRoot
  : path.resolve(process.argv[sourceRootArgument + 1]);
const auditingDefaultSource = sourceRoot === defaultSourceRoot;
const fixturePath = path.join(root, "tests/fixtures/side-effect-audit.json");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(absolute) : [absolute];
    });
}

function decoratorsOf(node) {
  return ts.canHaveDecorators(node) ? (ts.getDecorators(node) || []) : [];
}

function isAssignmentOperator(kind) {
  return kind >= ts.SyntaxKind.FirstAssignment && kind <= ts.SyntaxKind.LastAssignment;
}

function computedNameHasEagerEffect(member) {
  return Boolean(member.name && ts.isComputedPropertyName(member.name) && nodeHasEagerEffect(member.name.expression));
}

function classHasEagerEffect(node) {
  if (decoratorsOf(node).length) return true;
  if (node.heritageClauses?.some((clause) => clause.types.some((type) => nodeHasEagerEffect(type.expression)))) return true;
  for (const member of node.members) {
    if (decoratorsOf(member).length || computedNameHasEagerEffect(member)) return true;
    if (ts.isClassStaticBlockDeclaration(member)) {
      if (member.body.statements.length > 0) return true;
      continue;
    }
    const isStatic = member.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.StaticKeyword);
    if (isStatic && member.initializer && nodeHasEagerEffect(member.initializer)) return true;
  }
  return false;
}

function nodeHasEagerEffect(node) {
  if (!node) return false;
  if (ts.isCallExpression(node) || ts.isNewExpression(node) || ts.isTaggedTemplateExpression(node) ||
      ts.isAwaitExpression(node) || ts.isYieldExpression(node) || ts.isDeleteExpression(node)) return true;
  if (ts.isPostfixUnaryExpression(node)) return true;
  if (ts.isPrefixUnaryExpression(node) &&
      (node.operator === ts.SyntaxKind.PlusPlusToken || node.operator === ts.SyntaxKind.MinusMinusToken)) return true;
  if (ts.isBinaryExpression(node) && isAssignmentOperator(node.operatorToken.kind)) return true;
  if (ts.isClassExpression(node)) return classHasEagerEffect(node);
  if (ts.isArrowFunction(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node) ||
      ts.isGetAccessorDeclaration(node) || ts.isSetAccessorDeclaration(node) || ts.isConstructorDeclaration(node)) return false;

  let effect = false;
  ts.forEachChild(node, (child) => {
    if (!effect && nodeHasEagerEffect(child)) effect = true;
  });
  return effect;
}

function compact(node, ast) {
  return node.getText(ast).replace(/\s+/g, " ").trim();
}

function exactFingerprint(relative, node, ast) {
  return `${relative}\0${node.pos}\0${node.end}\0${node.getText(ast)}`;
}

const generatedLongInitializers = [];
const eagerInitializers = [];
const violations = [];
function recordEagerInitializer(relative, node, ast) {
  eagerInitializers.push(exactFingerprint(relative, node, ast));
  if (!auditingDefaultSource) violations.push(`${relative}: ${compact(node, ast)}`);
}

for (const file of walk(sourceRoot).filter((name) => name.endsWith(".ts") && !name.endsWith(".d.ts"))) {
  const relative = path.relative(root, file).split(path.sep).join("/");
  const sourceRelative = path.relative(sourceRoot, file).split(path.sep).join("/");
  const source = fs.readFileSync(file, "utf8");
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  for (const diagnostic of ast.parseDiagnostics) {
    const position = ast.getLineAndCharacterOfPosition(diagnostic.start || 0);
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, " ");
    violations.push(`${relative}:${position.line + 1}:${position.character + 1}: parse error TS${diagnostic.code}: ${message}`);
  }

  for (const statement of ast.statements) {
    if (ts.isImportDeclaration(statement)) {
      if (!statement.importClause) {
        violations.push(`${relative}: side-effect-only import ${compact(statement, ast)}`);
      } else if (!statement.importClause.isTypeOnly && !statement.importClause.name &&
          ts.isNamedImports(statement.importClause.namedBindings) && statement.importClause.namedBindings.elements.length === 0) {
        violations.push(`${relative}: empty-binding import ${compact(statement, ast)}`);
      }
      continue;
    }

    if (ts.isImportEqualsDeclaration(statement)) {
      if (!statement.isTypeOnly) violations.push(`${relative}: runtime import-equals ${compact(statement, ast)}`);
      continue;
    }

    if (ts.isExportDeclaration(statement)) {
      const emptyNamedExport = statement.moduleSpecifier && !statement.isTypeOnly &&
        statement.exportClause && ts.isNamedExports(statement.exportClause) && statement.exportClause.elements.length === 0;
      if (emptyNamedExport) violations.push(`${relative}: empty re-export ${compact(statement, ast)}`);
      continue;
    }

    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (declaration.initializer && nodeHasEagerEffect(declaration.initializer)) {
          recordEagerInitializer(relative, statement, ast);
          break;
        }
      }
      continue;
    }

    if (ts.isEnumDeclaration(statement) || ts.isModuleDeclaration(statement)) {
      recordEagerInitializer(relative, statement, ast);
      continue;
    }

    if (ts.isClassDeclaration(statement)) {
      if (decoratorsOf(statement).length) violations.push(`${relative}: decorator ${compact(statement, ast)}`);
      if (statement.heritageClauses?.some((clause) => clause.types.some((type) => nodeHasEagerEffect(type.expression))) ||
          statement.members.some(computedNameHasEagerEffect)) {
        recordEagerInitializer(relative, statement, ast);
      }
      for (const member of statement.members) {
        if (decoratorsOf(member).length) violations.push(`${relative}: decorator ${compact(member, ast)}`);
        if (ts.isClassStaticBlockDeclaration(member) && member.body.statements.length > 0) {
          violations.push(`${relative}: ${compact(member, ast)}`);
          continue;
        }
        const isStatic = member.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.StaticKeyword);
        if (isStatic && member.initializer && nodeHasEagerEffect(member.initializer)) {
          recordEagerInitializer(relative, member, ast);
        }
      }
      continue;
    }

    if (ts.isExportAssignment(statement)) {
      if (nodeHasEagerEffect(statement.expression)) recordEagerInitializer(relative, statement, ast);
      continue;
    }

    if (ts.isIfStatement(statement)) {
      const text = compact(statement, ast);
      const generatedLongSetup = sourceRelative.startsWith("codec/") &&
        /^if \(_m0\.util\.Long !== Long\) \{ _m0\.util\.Long = Long as any; _m0\.configure\(\); \}$/.test(text);
      if (generatedLongSetup) generatedLongInitializers.push(exactFingerprint(relative, statement, ast));
      else violations.push(`${relative}: ${text}`);
      continue;
    }

    const declarationOnly = ts.isFunctionDeclaration(statement) || ts.isInterfaceDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement) ||
      ts.isEmptyStatement(statement) || ts.isNamespaceExportDeclaration(statement);
    if (!declarationOnly) violations.push(`${relative}: ${compact(statement, ast)}`);
  }
}

const exactGeneratedLongInitializers = [...generatedLongInitializers].sort();
const exactEagerInitializers = [...eagerInitializers].sort();
const report = {
  generatedLongInitializerEntries: exactGeneratedLongInitializers.length,
  generatedLongInitializerDigest: crypto.createHash("sha256").update(exactGeneratedLongInitializers.join("\n")).digest("hex"),
  eagerInitializerEntries: exactEagerInitializers.length,
  eagerInitializerDigest: crypto.createHash("sha256").update(exactEagerInitializers.join("\n")).digest("hex"),
  violations,
};
if (process.argv.includes("--report")) {
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  process.exitCode = violations.length ? 1 : 0;
} else {
  const fixture = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  if (JSON.stringify(packageJson.sideEffects) !== "[]") violations.push("package.json sideEffects must be an audited empty allowlist");
  if (fixture.generatedLongInitializerEntries !== report.generatedLongInitializerEntries ||
      fixture.generatedLongInitializerDigest !== report.generatedLongInitializerDigest) {
    violations.push(`generated Long initializer fingerprint changed: ${report.generatedLongInitializerEntries}/${report.generatedLongInitializerDigest}`);
  }
  if (fixture.eagerInitializerEntries !== report.eagerInitializerEntries ||
      fixture.eagerInitializerDigest !== report.eagerInitializerDigest) {
    violations.push(`eager initializer fingerprint changed: ${report.eagerInitializerEntries}/${report.eagerInitializerDigest}`);
  }
  if (violations.length) {
    console.error(violations.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`verified no package side-effect entrypoints; audited ${report.generatedLongInitializerEntries} exact generated Long initializers and ${report.eagerInitializerEntries} exact eager declarations`);
  }
}
