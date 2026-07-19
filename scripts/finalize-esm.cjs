#!/usr/bin/env node
/* global __dirname, module, require */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const esmRoot = path.resolve(__dirname, "../esm");
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap((entry) => {
  const absolute = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(absolute) : [absolute];
});

function runtimeSpecifier(fromFile, specifier) {
  if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
    if (path.extname(specifier)) return specifier;
    try {
      require.resolve(`${specifier}.js`, { paths: [path.dirname(fromFile), esmRoot] });
      return `${specifier}.js`;
    } catch {
      try {
        require.resolve(`${specifier}/index.js`, { paths: [path.dirname(fromFile), esmRoot] });
        return `${specifier}/index.js`;
      } catch {
        return specifier;
      }
    }
  }
  if (path.extname(specifier)) return specifier;
  const target = path.resolve(path.dirname(fromFile), specifier);
  if (fs.existsSync(`${target}.js`)) return `${specifier}.js`;
  if (fs.existsSync(path.join(target, "index.js"))) return `${specifier}/index.js`;
  throw new Error(`cannot resolve ESM specifier ${specifier} from ${fromFile}`);
}

function rewriteSource(file, source) {
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, false, ts.ScriptKind.JS);
  const specifiers = [];
  const visit = (node) => {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteralLike(node.moduleSpecifier)) {
      specifiers.push(node.moduleSpecifier);
    } else if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword && node.arguments.length >= 1 && ts.isStringLiteralLike(node.arguments[0])) {
      specifiers.push(node.arguments[0]);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);

  const replacements = specifiers.map((node) => ({
    start: node.getStart(sourceFile) + 1,
    end: node.getEnd() - 1,
    value: runtimeSpecifier(file, node.text),
  })).filter(({ start, end, value }) => source.slice(start, end) !== value).sort((a, b) => b.start - a.start);
  return replacements.reduce((result, replacement) => `${result.slice(0, replacement.start)}${replacement.value}${result.slice(replacement.end)}`, source);
}

function main() {
  for (const file of walk(esmRoot).filter((candidate) => candidate.endsWith(".js"))) {
    fs.writeFileSync(file, rewriteSource(file, fs.readFileSync(file, "utf8")));
  }
  fs.writeFileSync(path.join(esmRoot, "package.json"), '{"type":"module"}\n');
}

if (require.main === module) main();
module.exports = { rewriteSource, runtimeSpecifier };
