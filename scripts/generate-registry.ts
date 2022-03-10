import path from "path";

const files = process.argv;

const [pwd, registryFile, cosmosModelsFile, ibcModelsFile] = files.slice(-4);
const codecFiles = files.slice(2, files.length - 4);

console.log(`import { Registry } from "@cosmjs/proto-signing";`);

const modules: { [name: string]: string[] } = {};
for (const moduleFile of codecFiles) {

  if (!["/tx.ts", "/tendermint.ts"].some(fileName => moduleFile.endsWith(fileName))) {
    continue
  }

  const codecModule = require(`${pwd}/${moduleFile}`);
  const messages = Object.keys(codecModule).filter((key) => (key.startsWith("Msg") && key !== "MsgClientImpl") || key.startsWith("Header"));

  if (messages.length) {
    modules[codecModule.protobufPackage] = messages;
    const relativePath = path.relative(registryFile, moduleFile)
      .replace(/^\.\.\//, "./")
      .replace(/\.ts$/, "");
    console.log(`import { ${messages.join(", ")} } from "${relativePath}";`)
  }
}

console.log("");
const cosmosModelsImportPath = path.relative(registryFile, cosmosModelsFile);
console.log(`export * from '${cosmosModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
const ibcModelsImportPath = path.relative(registryFile, ibcModelsFile);
console.log(`export * as IBC from '${ibcModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
console.log("export const registry = new Registry();");

const typeMap: { [msg: string]: string } = {};
for (const packageName in modules) {
  console.log("");
  for (const key of modules[packageName]) {
    const typeUrl = `/${packageName}.${key}`;
    typeMap[key] = typeUrl;
    console.log(`registry.register("${typeUrl}", ${key});`);
  }
}

console.log("");
console.log(`export const TxTypes = ${JSON.stringify(typeMap, null, 2)};\n`);

console.log("");
console.log('// Exported for convenience');
const directoryBlacklist = ['cosmos', 'ibc', 'tendermint']
const fileNameBlacklist = ['genesis.ts', 'keys.ts']
const relativePathBlacklist = ['./marketstats/params']
const modelBlacklist = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl']

for (const moduleFile of codecFiles) {
  if (!moduleFile.endsWith(".ts")) {
    continue
  }

  const file = moduleFile.split("/")
  const fileName = file[file.length - 1]
  const firstDirectory = file[2]

  if (directoryBlacklist.includes(firstDirectory) || fileNameBlacklist.includes(fileName)) continue

  const codecModule = require(`${pwd}/${moduleFile.replace(/\.ts$/i, '')}`);

  const messages = Object.keys(codecModule).filter((key) =>
    !modelBlacklist.includes(key)
  );

  if (messages.length) {
    modules[codecModule.protobufPackage] = messages;
    const relativePath = path.relative(registryFile, moduleFile)
      .replace(/^\.\.\//, "./")
      .replace(/\.ts$/, "");
    if (relativePath === "" || relativePathBlacklist.includes(relativePath)) {
      continue
    }

    console.log(`export { ${messages.join(", ")} } from "${relativePath}";`)
  }
}
