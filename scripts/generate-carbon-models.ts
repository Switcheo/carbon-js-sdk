import path from "path";
import fs from "fs";

const [pwd, modelsFile] = process.argv.slice(-2);
const MODEL_BLACKLIST = ["MsgClientImpl", "protobufPackage", "GenesisState", "QueryClientImpl"];
const whitelistCarbonExports: Record<string, string> = {
  Admin: "Switcheo/carbon/admin",
  Alliance: "alliance/alliance",
  Bank: "Switcheo/carbon/bank",
  Book: "Switcheo/carbon/book",
  Bridge: "Switcheo/carbon/bridge",
  Broker: "Switcheo/carbon/broker",
  Cdp: "Switcheo/carbon/cdp",
  Coin: "Switcheo/carbon/coin",
  Erc20: "Switcheo/carbon/erc20",
  Evmbank: "Switcheo/carbon/evmbank",
  Evmcontract: "Switcheo/carbon/evmcontract",
  Evmmerge: "Switcheo/carbon/evmmerge",
  Fee: "Switcheo/carbon/fee",
  Inflation: "Switcheo/carbon/inflation",
  Insurance: "Switcheo/carbon/insurance",
  Leverage: "Switcheo/carbon/leverage",
  Liquidation: "Switcheo/carbon/liquidation",
  Liquiditypool: "Switcheo/carbon/liquiditypool",
  Market: "Switcheo/carbon/market",
  Marketstats: "Switcheo/carbon/marketstats",
  Misc: "Switcheo/carbon/misc",
  Oracle: "Switcheo/carbon/oracle",
  Order: "Switcheo/carbon/order",
  Otc: "Switcheo/carbon/otc",
  Perpspool: "Switcheo/carbon/perpspool",
  Position: "Switcheo/carbon/position",
  Pricing: "Switcheo/carbon/pricing",
  Profile: "Switcheo/carbon/profile",
  Sequence: "Switcheo/carbon/sequence",
  Subaccount: "Switcheo/carbon/subaccount",
};

function writeGenerated(file: string, lines: string[]): void {
  const temporary = `${file}.tmp`;
  fs.writeFileSync(temporary, lines.join(""));
  fs.renameSync(temporary, file);
}

const modelExports: string[] = [];
for (const exportName of Object.keys(whitelistCarbonExports).sort()) {
  const directoryPath = whitelistCarbonExports[exportName];
  const directory = path.join(pwd, "src/codec", directoryPath);
  const exportLines: string[] = [];
  const sourceFiles = fs.readdirSync(directory)
    .filter((file) => file.endsWith(".ts") && file !== "export.ts")
    .sort();

  for (const file of sourceFiles) {
    const codecModule = require(path.join(directory, file));
    const modelNames = Object.keys(codecModule)
      .filter((key) => !MODEL_BLACKLIST.includes(key))
      .sort();
    if (!modelNames.length) continue;
    exportLines.push(`export { ${modelNames.join(", ")} } from "./${file.replace(/\.ts$/i, "")}";\n`);
  }

  writeGenerated(path.join(directory, "export.ts"), exportLines);
  modelExports.push(`export * as ${exportName} from "./${directoryPath}/export";\n`);
}
writeGenerated(modelsFile, modelExports);
