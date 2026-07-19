import path from "path";
import fs from "fs";
import { whitelistIbcExports } from "./config";

const [pwd, modelsFile] = process.argv.slice(-2);
const MODEL_BLACKLIST = ["MsgClientImpl", "protobufPackage", "GenesisState", "QueryClientImpl"];

function writeGenerated(file: string, lines: string[]): void {
  const temporary = `${file}.tmp`;
  fs.writeFileSync(temporary, lines.join(""));
  fs.renameSync(temporary, file);
}

const modelExports: string[] = [];
for (const exportName of Object.keys(whitelistIbcExports).sort()) {
  const directoryPaths: string[] = [...whitelistIbcExports[exportName]].sort();
  const commonPath = directoryPaths[0].split("/").slice(0, 4).join("/");
  const commonDirectory = path.join(pwd, "src/codec", commonPath);
  const exportLines: string[] = [];

  for (const directoryPath of directoryPaths) {
    const directory = path.join(pwd, "src/codec", directoryPath);
    const sourceFiles = fs.readdirSync(directory)
      .filter((file) => file.endsWith(".ts") && file !== "export.ts")
      .sort();
    for (const file of sourceFiles) {
      const codecModule = require(path.join(directory, file));
      const modelNames = Object.keys(codecModule)
        .filter((key) => !MODEL_BLACKLIST.includes(key))
        .sort();
      if (!modelNames.length) continue;
      const relativeDirectory = directoryPath.replace(commonPath, "");
      exportLines.push(`export { ${modelNames.join(", ")} } from ".${relativeDirectory}/${file.replace(/\.ts$/i, "")}";\n`);
    }
  }

  writeGenerated(path.join(commonDirectory, "export.ts"), exportLines);
  modelExports.push(`export * as ${exportName} from "./${commonPath}/export";\n`);
}
writeGenerated(modelsFile, modelExports);
