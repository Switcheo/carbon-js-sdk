
import path from "path";
import fs from "fs";

const files = process.argv;

const [pwd, modelsFile] = files.splice(files.length - 2, 2);

const MODEL_BLACKLIST = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl']

const whitelistExports: { [name: string]: string[] } = {
  'Controller': ['ibc/applications/interchain_accounts/controller/v1'],
  'Host': ['ibc/applications/interchain_accounts/host/v1'],
  'InterchainTypes': ['ibc/applications/interchain_accounts/v1'],
  'TranferV1': ['ibc/applications/transfer/v1'],
  'TransferV2': ['ibc/applications/transfer/v2'],
  'Channel': ['ibc/core/channel/v1'],
  'Client': ['ibc/core/client/v1'],
  'Commitment': ['ibc/core/commitment/v1'],
  'Connection': ['ibc/core/connection/v1'],
  'LocalHost': ['ibc/lightclients/localhost/v1'],
  'Solomachine': ['ibc/lightclients/solomachine/v1'],
  'Tendermint': ['ibc/lightclients/tendermint/v1'],
};

for (const exportName in whitelistExports) {
  const directoryArr: string[] = whitelistExports[exportName];
  // Get common path (e.g. ibc/applications/transfer for Transfer)
  const commonPath = directoryArr[0].split('/').slice(0, 4).join('/');
  const commonDir = path.join(pwd, 'src/codec', commonPath);
  for (const subExportId in directoryArr) {
    const directory = path.join(pwd, 'src/codec', directoryArr[subExportId]);
    // Get file names in directory
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const absoluteFilePath = `${directory}/${file}`;
      const codecModule = require(absoluteFilePath);

      const modelNames = Object.keys(codecModule).filter((key) =>
        !MODEL_BLACKLIST.includes(key)
      );
      if (!modelNames.length) continue;
  
      const relativeFilePath = directoryArr[subExportId].replace(commonPath, '');
      const exportLine = `export { ${modelNames.join(", ")} } from ".${relativeFilePath}/${file.replace('.ts', '')}";\n`;
      fs.appendFileSync(path.join(commonDir, 'export.ts'), exportLine);
    }
  }
  const majorExportLine = `export * as ${exportName} from "./${commonPath}/export";\n`;
  fs.appendFileSync(modelsFile, majorExportLine);
}
