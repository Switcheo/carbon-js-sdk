import { capitalize } from "lodash";
import path from "path";
import { whitelistCosmosExports, whitelistIbcExports } from "./config";
import { generateEIP712types } from "./generate-eip712-types";

const files = process.argv;

const [pwd, registryFile, polynetworkModelsFile, carbonModelsFile, cosmosModelsFile, ibcModelsFile] = files.slice(-7);
const codecFiles = files.slice(2, files.length - 7);

const prefixCarbonDir = (m: string) => `Switcheo/carbon/${m}`;

const polynetworkFolders = ['btcx', 'ccm', 'headersync', 'lockproxy'];

const carbonFolders = ['admin', 'bank', 'book', 'bridge', 'broker', 'cdp', 'coin',
  'erc20', 'evmbank', 'evmcontract', 'evmmerge', 'fee', 'inflation', 'insurance', 'leverage', 'liquidation',
  'liquiditypool', 'market', 'marketstats', 'misc', 'oracle', 'order', 'perpspool',
  'position', 'pricing', 'profile', 'sequence', 'subaccount'];

console.log(`import { Registry } from "@cosmjs/proto-signing";`);
// TODO: Remove hardcoded statement when upgrading cosmwasm codecs
console.log(`import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";`);

const modules: { [name: string]: string[] } = {};
for (const moduleFile of codecFiles) {

  if (
    !moduleFile.includes("ethermint") &&
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
  const messages = Object.keys(codecModule).filter((key) => {
    return (key.startsWith("Msg") && key !== "MsgClientImpl") || key.startsWith("Header") || key.endsWith("Proposal")
  });

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
      moduleFile.includes('src/codec/Switcheo/carbon/btcx/')
      || moduleFile.includes('src/codec/Switcheo/carbon/ccm/')
      || moduleFile.includes('src/codec/Switcheo/carbon/headersync/')
      || moduleFile.includes('src/codec/Switcheo/carbon/lockproxy/')
      || moduleFile.includes('src/codec/alliance/alliance')
      || carbonFolders.some(carbonModule => moduleFile.includes("src/codec/Switcheo/carbon/" + carbonModule))
    )) {
      updateImportsAlias(messages, codecModule.protobufPackage)

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
console.log("");
const ibcModelsImportPath = path.relative(registryFile, ibcModelsFile);
console.log(`export * as IBC from '${ibcModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
const polynetworkModelsImportPath = path.relative(registryFile, polynetworkModelsFile);
console.log(`import * as PolyNetwork from '${polynetworkModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);
console.log(`export * as PolyNetwork from '${polynetworkModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
const carbonModelsImportPath = path.relative(registryFile, carbonModelsFile);
console.log(`import * as Carbon from '${carbonModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);
console.log(`export * as Carbon from '${carbonModelsImportPath.replace(/^\.\./i, '.').replace(/\.ts$/i, '')}';`);

console.log("");
console.log("export const registry = new Registry();");

const typeMap: { [msg: string]: string } = {};
for (const packageName in modules) {
  console.log("");
  for (const key of modules[packageName]) {
    const messageAlias = key.split(" ")[2] // "XXX as XXXXX"
    const typeUrl = messageAlias ? `/${packageName}.${key.split(" ")[0].trim()}` : `/${packageName}.${key}`;
    const match = typeUrl.match(/^\/Switcheo.carbon.([a-z0-9]+).([A-Za-z0-9]+)$/i);
    const matchAlliance = typeUrl.match(/^\/alliance.alliance.([A-Za-z]+)$/i); // for /alliance.alliance module
    const messageType = messageAlias ? messageAlias.trim() : key

    if ((key.startsWith("Msg") && key !== "MsgClientImpl") || key.startsWith("Header") || key.endsWith("Proposal")) {
      let typeKey = ''
      if ((messageType.startsWith("Msg") && matchAlliance)) {
        typeKey = messageType.replace(/^Msg/, "MsgAlliance")
      }
      else if (match && typeMap[messageType]) {
        // Switcheo.carbon.xxx ==> xxx
        const carbonModule = packageName.split('.')[2]
        typeKey = `Msg${capitalize(carbonModule)}${messageType.split('Msg')[1]}`
      }
      else {
        typeKey = messageType
      }

      typeMap[typeKey] = typeUrl;
      if (match?.[1] && polynetworkFolders.includes(match?.[1])) {
        console.log(`registry.register("${typeUrl}", PolyNetwork.${capitalize(match[1])}.${messageType});`);
      } else if (match?.[1] && carbonFolders.includes(match?.[1])) {
        console.log(`registry.register("${typeUrl}", Carbon.${capitalize(match[1])}.${messageType});`);
      } else if (matchAlliance?.[1]) {
        console.log(`registry.register("${typeUrl}", Carbon.Alliance.${messageType});`);
      } else {
        console.log(`registry.register("${typeUrl}", ${messageType});`);
      }
    }
  }
}
// TODO: Remove hardcoded statement when upgrading cosmwasm codecs
console.log("registry.register(\"/cosmwasm.wasm.v1.MsgExecuteContract\", MsgExecuteContract);");
typeMap.MsgExecuteContract = "/cosmwasm.wasm.v1.MsgExecuteContract";

console.log("");
console.log(
  `/* 
Key in TxTypes may not match the actual type definition due to duplicates in Msg names.
*/`);
console.log(`export const TxTypes = ${JSON.stringify(typeMap, null, 2)};\n`);

console.log("");
console.log('// Exported for convenience');
const directoryBlacklist = ['cosmos', 'ibc', 'tendermint', 'btcx', 'ccm', 'headersync', 'lockproxy', 'ethermint']
const fileNameBlacklist = ['genesis.ts', 'keys.ts']


const modelBlacklist: string[] = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl'];

for (const moduleFile of codecFiles) {
  if (!moduleFile.endsWith(".ts")) {
    continue
  }
  const relativePath = path.relative(registryFile, moduleFile)
    .replace(/^\.\.\//, "./")
    .replace(/\.ts$/, "");

  const file = moduleFile.replace("Switcheo/carbon/", "").split("/")
  const fileName = file[file.length - 1]
  const firstDirectory = file[2]

  // skip next steps if module has been namespaced
  if (directoryBlacklist.includes(firstDirectory) || carbonFolders.includes(firstDirectory) || fileNameBlacklist.includes(fileName)) continue

  const codecModule = require(`${pwd}/${moduleFile.replace(/\.ts$/i, '')}`);

  const messages = Object.keys(codecModule).filter((key: string) => (
    !modelBlacklist.includes(key)
  )).reduce((prev: string[], key: string) => {
    const messagePrev = prev;

    messagePrev.push(key);
    return messagePrev;
  }, []);


  if (messages.length) {
    modules[codecModule.protobufPackage] = messages;
    if (relativePath === "") {
      continue
    }
    const msgs = messages.filter(msg => msg !== 'Params' && !msg.startsWith('MsgUpdateParams')).map(msg => msg)
    if (msgs.length > 0) {
      console.log(`export { ${msgs.join(", ")} } from "${relativePath}";`)

    }
  }
}
// TODO: Remove hardcoded statement when upgrading cosmwasm codecs
console.log("export { MsgExecuteContract } from \"cosmjs-types/cosmwasm/wasm/v1/tx\";");

console.log("");
console.log(
  `/* 
EIP712Types mapping generated here should only be used for sending EIP-712 msgs.
*/`);
console.log(`export const EIP712Types: { [index: string]: any } = ${JSON.stringify(generateEIP712types(), null, 2)};\n`);

function updateImportsAlias(messages: string[], protobufPackage: string) {
  const modulePath = getModulePathFromProtobufPackage(protobufPackage)
  messages.forEach((msg, i) => {
    let msgAlias = ''
    const pkg = modulePath[0]
    const innerPkg = modulePath[1]
    if (pkg === 'nft'
      || pkg === 'group'
      || (pkg === 'gov' && innerPkg === 'v1')
      || (pkg === 'feemarket')) {
      msgAlias = `Msg${capitalize(pkg)}${msg.substring(3)}`
    }

    if ((pkg === 'mint'
      || pkg === 'auth'
      || pkg === 'consensus'
      || pkg === 'crisis'
      || pkg === 'slashing'
      || pkg === 'distribution'
      || pkg === 'staking'
      || pkg === 'bank'
      || pkg === 'evm')
      && msg.includes('MsgUpdateParams')) {
      msgAlias = `Msg${capitalize(pkg)}${msg.substring(3)}`
    }
    if (msgAlias) {
      messages[i] = `${msg} as ${msgAlias}`
    }
  });
}

function getModulePathFromProtobufPackage(protobufPackage: string): string[] {
  // Switcheo.carbon.xxxx
  // "ibc.applications.xxxx.v1" / "ibc.core.xxxx.v1"
  if (protobufPackage.startsWith("Switcheo") || protobufPackage.startsWith("ibc")) {
    return protobufPackage.split(".").slice(2)
  }
  // "cosmos.xxx.v1beta1" or "ethermint.xxx.v1" 
  if (protobufPackage.startsWith("cosmos") || protobufPackage.startsWith("ethermint")) {
    return protobufPackage.split(".").slice(1)
  }

  return protobufPackage.split(".")
}
