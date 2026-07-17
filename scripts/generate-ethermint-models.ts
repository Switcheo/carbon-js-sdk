import path from "path";
import fs from "fs";
import { whitelistEthermintExports } from "./config";

const [pwd, modelsFile] = process.argv.slice(-2);
const MODEL_BLACKLIST = ["MsgClientImpl", "protobufPackage", "GenesisState", "QueryClientImpl"];

function writeGenerated(file: string, lines: string[]): void {
  const temporary = `${file}.tmp`;
  fs.writeFileSync(temporary, lines.join(""));
  fs.renameSync(temporary, file);
}

const modelExports: string[] = [];
for (const exportName of Object.keys(whitelistEthermintExports).sort()) {
  const directoryPath = whitelistEthermintExports[exportName];
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
