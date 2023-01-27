import { capitalize } from "lodash";
import path from "path";
import { whitelistCosmosExports, whitelistIbcExports } from "./config";

const files = process.argv;

const [pwd, registryFile, polynetworkModelsFile, cosmosModelsFile, ibcModelsFile] = files.slice(-5);
const codecFiles = files.slice(2, files.length - 5);

console.log(`import { Registry } from "@cosmjs/proto-signing";`);

const modules: { [name: string]: string[] } = {};
for (const moduleFile of codecFiles) {

  if (
    !["/tx.ts",
      "/tendermint.ts",
      "/proposal.ts",
      "/distribution.ts",
      "/upgrade.ts",
      "/params.ts"]
      .some(fileName => moduleFile.endsWith(fileName))
  ) {
    continue
  }

  const codecModule = require(`${pwd}/${moduleFile}`);
  const messages = Object.keys(codecModule).filter((key) => (key.startsWith("Msg") && key !== "MsgClientImpl") || key.startsWith("Header") || key.endsWith("Proposal"));

  if (messages.length) {
    if (modules[codecModule.protobufPackage]) {
      modules[codecModule.protobufPackage] = [...modules[codecModule.protobufPackage], ...messages];
    } else {
      modules[codecModule.protobufPackage] = messages;
    }
    const relativePath = path.relative(registryFile, moduleFile)
      .replace(/^\.\.\//, "./")
      .replace(/\.ts$/, "");
    if (!(
      moduleFile.includes('src/codec/btcx/')
      || moduleFile.includes('src/codec/ccm/')
      || moduleFile.includes('src/codec/headersync/')
      || moduleFile.includes('src/codec/lockproxy/')
    )) {
      console.log(`import { ${messages.join(", ")} } from "${relativePath}";`)
    }
  }
}

// List of proposal files (for cosmos and ibc)
const proposalWhitelist: string[] = [`${whitelistCosmosExports.Gov}/gov.ts`, `${whitelistIbcExports.Client[0]}/client.ts`]

proposalWhitelist.forEach((file: string) => {
  const codecModule = require(path.join(pwd, 'src/codec', file));
  const modelNames = Object.keys(codecModule).filter((key) => key.endsWith("Proposal"));
  const directoryArr = file.split('/');
  directoryArr.pop();
  const directoryLabel = directoryArr.join('.').replace('.ts', '');
  if (modules[directoryLabel]) {
    modules[directoryLabel] = [...modules[directoryLabel], ...modelNames];
  } else {
    modules[directoryLabel] = modelNames;
  }
  console.log(`import { ${modelNames.join(", ")} } from "./${file.replace('.ts', '')}";`);
});

console.log("");
const cosmosModelsImportPath = path.relative(registryFile, cosmosModelsFile);
console.log(`export * from '${cosmosModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
const ibcModelsImportPath = path.relative(registryFile, ibcModelsFile);
console.log(`export * as IBC from '${ibcModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
const polynetworkModelsImportPath = path.relative(registryFile, polynetworkModelsFile);
console.log(`import * as PolyNetwork from '${polynetworkModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);
console.log(`export * as PolyNetwork from '${polynetworkModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
console.log("export const registry = new Registry();");

const polynetworkFolders = ['btcx', 'ccm', 'headersync', 'lockproxy']
const typeMap: { [msg: string]: string } = {};
for (const packageName in modules) {
  console.log("");
  for (const key of modules[packageName]) {
    const typeUrl = `/${packageName}.${key}`;
    typeMap[key] = typeUrl;

    const match = typeUrl.match(/^\/Switcheo.carbon.([a-z]+).([A-Za-z]+)$/i);
    if (match?.[1] && polynetworkFolders.includes(match?.[1])) {
      console.log(`registry.register("${typeUrl}", PolyNetwork.${capitalize(match[1])}.${key});`);
    } else {
      console.log(`registry.register("${typeUrl}", ${key});`);
    }
  }
}

console.log("");
console.log(`export const TxTypes = ${JSON.stringify(typeMap, null, 2)};\n`);

console.log("");
console.log('// Exported for convenience');
const directoryBlacklist = ['cosmos', 'ibc', 'tendermint', 'btcx', 'ccm', 'headersync', 'lockproxy']
const fileNameBlacklist = ['genesis.ts', 'keys.ts']
const ethermintDirectory = 'ethermint'


const modelBlacklist: string[] = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl'];
const labelOverride: { [key: string]: string } = {
  "MarketParams": "MarketDefaults",
}

for (const moduleFile of codecFiles) {
  if (!moduleFile.endsWith(".ts")) {
    continue
  }
  const relativePath = path.relative(registryFile, moduleFile)
    .replace(/^\.\.\//, "./")
    .replace(/\.ts$/, "");

  const file = moduleFile.split("/")
  const fileName = file[file.length - 1]
  const firstDirectory = file[2]

  if (directoryBlacklist.includes(firstDirectory) || fileNameBlacklist.includes(fileName)) continue

  const codecModule = require(`${pwd}/${moduleFile.replace(/\.ts$/i, '')}`);

  const messages = Object.keys(codecModule).filter((key: string) => (
    !modelBlacklist.includes(key)
  )).reduce((prev: string[], key: string) => {
    const messagePrev = prev;
    let newKey = key;
    const firstDirName = capitalize(firstDirectory);
    const fileNameNoSuffix = fileName.replace('.ts', '');
    const newLabel = fileNameNoSuffix === 'query' ? firstDirName : `${firstDirName}${capitalize(fileNameNoSuffix)}`;
    if (firstDirectory === ethermintDirectory) {
      newKey = updateGeneratedEthermintCodecs(key, file)
    }
    else {
      if (key === "Params") {
        newKey = `Params as ${labelOverride[`${firstDirName}Params`] ?? firstDirName}Params`;
      } else if (key === "QueryParamsRequest") {
        newKey = `QueryParamsRequest as Query${labelOverride[newLabel] ?? newLabel}ParamsRequest`;
      } else if (key === "QueryParamsResponse") {
        newKey = `QueryParamsResponse as Query${labelOverride[newLabel] ?? newLabel}ParamsResponse`;
      }
    }

    messagePrev.push(newKey);
    return messagePrev;
  }, []);


  if (messages.length) {
    modules[codecModule.protobufPackage] = messages;
    if (relativePath === "") {
      continue
    }

    console.log(`export { ${messages.join(", ")} } from "${relativePath}";`)
  }
}


function updateGeneratedEthermintCodecs(key: string, file: string[]): string {
  const fileName = file[file.length - 1].replace('.ts', '');
  const secondDirectory = file[3]
  if (key === "Params") {
    return `Params as ${capitalize(fileName)}Params`;
  }
  if (key === "QueryParamsRequest") {
    return `QueryParamsRequest as Query${capitalize(secondDirectory)}ParamsRequest`;
  }
  if (key === "QueryParamsResponse") {
    return `QueryParamsResponse as Query${capitalize(secondDirectory)}ParamsResponse`;
  }
  if (key === "QueryBaseFeeRequest") {
    return `QueryBaseFeeRequest as Query${capitalize(secondDirectory)}BaseFeeRequest`;
  }
  if (key === "QueryBaseFeeResponse") {
    return `QueryBaseFeeResponse as Query${capitalize(secondDirectory)}BaseFeeResponse`;
  }
  if (key === "TxResult" && fileName == "indexer") {
    return `TxResult as Tx${capitalize(fileName)}Result`;
  }
  return key
}

