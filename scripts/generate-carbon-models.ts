import path from "path";
import fs from "fs";

const files = process.argv;

const [pwd, modelsFile] = files.splice(files.length - 2, 2);

const MODEL_BLACKLIST = ['MsgClientImpl', 'protobufPackage', 'GenesisState', 'QueryClientImpl']

const whitelistCarbonExports: { [name: string]: string } = {
    'Admin': 'Switcheo/carbon/admin',
    'Alliance': 'alliance/alliance',
    'Bank': 'Switcheo/carbon/bank',
    'Book': 'Switcheo/carbon/book',
    'Broker': 'Switcheo/carbon/broker',
    'Cdp': 'Switcheo/carbon/cdp',
    'Coin': 'Switcheo/carbon/coin',
    'Erc20': 'Switcheo/carbon/erc20',
    'Evmbank': 'Switcheo/carbon/evmbank',
    'Evmcontract': 'Switcheo/carbon/evmcontract',
    'Evmmerge': 'Switcheo/carbon/evmmerge',
    'Fee': 'Switcheo/carbon/fee',
    'Inflation': 'Switcheo/carbon/inflation',
    'Insurance': 'Switcheo/carbon/insurance',
    'Leverage': 'Switcheo/carbon/leverage',
    'Liquidation': 'Switcheo/carbon/liquidation',
    'Liquiditypool': 'Switcheo/carbon/liquiditypool',
    'Market': 'Switcheo/carbon/market',
    'Marketstats': 'Switcheo/carbon/marketstats',
    'Misc': 'Switcheo/carbon/misc',
    'Oracle': 'Switcheo/carbon/oracle',
    'Order': 'Switcheo/carbon/order',
    'Perpspool': 'Switcheo/carbon/perpspool',
    'Position': 'Switcheo/carbon/position',
    'Pricing': 'Switcheo/carbon/pricing',
    'Profile': 'Switcheo/carbon/profile',
    'Sequence': 'Switcheo/carbon/sequence',
    'Subaccount': 'Switcheo/carbon/subaccount'
  };

for (const exportName in whitelistCarbonExports) {
  const directoryPath = whitelistCarbonExports[exportName];
  const directory = path.join(pwd, 'src/codec/', directoryPath);
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
