import path from "path";
import fs from "fs";
import { whitelistCosmosExports } from "./config";

const files = process.argv;

const [pwd, modelsFile] = files.splice(files.length - 2, 2);

const MODEL_BLACKLIST = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl']

for (const exportName in whitelistCosmosExports) {
  const directoryPath = whitelistCosmosExports[exportName];
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
