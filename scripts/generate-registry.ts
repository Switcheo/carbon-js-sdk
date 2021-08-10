
import path from "path";

const files = process.argv;
const cmd = files.shift()
const thisFile = files.shift()

const [pwd, registryFile] = files.splice(files.length - 2, 2);

console.log(`import { Registry } from "@cosmjs/proto-signing";`);

const modules: { [name: string]: string[] } = {};
for (const moduleFile of files) {
  const codecModule = require(`${pwd}/${moduleFile}`);
  const messages = Object.keys(codecModule).filter((key) => key.startsWith("Msg") && key !== "MsgClientImpl");

  if (messages.length) {
    modules[codecModule.protobufPackage] = messages;
    const relativePath = path.relative(registryFile, moduleFile)
      .replace(/^\.\.\//, "./")
      .replace(/\.ts$/, "");
    console.log(`import { ${messages.join(", ")} } from "${relativePath}";`)
  }
}

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
console.log(`export const TxTypes = ${JSON.stringify(typeMap, null, 2)}\n`);

console.log("");
console.log('// Exported for convenience');
for (const moduleFile of files) {
  const directoryBlacklist = ['cosmos', 'ibc', 'tendermint']
  const fileNameBlacklist = ['genesis.ts', 'keys.ts']
  const modelBlacklist = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl']

  const file = moduleFile.split("/")
  const fileName = file[file.length - 1]
  const firstDirectory = file[2]
  
  if (directoryBlacklist.includes(firstDirectory) || fileNameBlacklist.includes(fileName)) continue

  const codecModule = require(`${pwd}/${moduleFile}`);
  
  const messages = Object.keys(codecModule).filter((key) =>
    !modelBlacklist.includes(key)
  );

  if (messages.length) {
    modules[codecModule.protobufPackage] = messages;
    const relativePath = path.relative(registryFile, moduleFile)
      .replace(/^\.\.\//, "./")
      .replace(/\.ts$/, "");


    console.log(`export { ${messages.join(", ")} } from "${relativePath}";`)
  }
}