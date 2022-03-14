
import path from "path";
import fs from "fs";

const files = process.argv;

const [pwd, modelsFile] = files.splice(files.length - 2, 2);

const MODEL_BLACKLIST = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl']

const whitelistExports: { [name: string]: string } = {
  'Btcx': 'btcx',
  'Ccm': 'ccm',
  'Headersync': 'headersync',
  'Lockproxy': 'lockproxy',
}

for (const exportName in whitelistExports) {
  const directoryPath = whitelistExports[exportName];
  const directory = path.join(pwd, 'src/codec', directoryPath);
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const codecModule = require(`${directory}/${file}`);

    const modelNames = Object.keys(codecModule).filter((key) =>
      !MODEL_BLACKLIST.includes(key)
    );
    if (!modelNames.length) continue;

    const exportLine = `export { ${modelNames.join(", ")} } from "./${file.replace(/\.ts$/i, '')}"\n`;
    fs.appendFileSync(path.join(directory, 'export.ts'), exportLine);
  }

  const exportLine = `export * as ${exportName} from "./${directoryPath}/export"\n`;
  fs.appendFileSync(modelsFile, exportLine);
}
