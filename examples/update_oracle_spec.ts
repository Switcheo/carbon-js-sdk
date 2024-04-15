import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { MsgUpdateOracle } from "../lib/codec/Switcheo/carbon/oracle/tx";
import fs from 'fs';
import path from 'path';

// Function to read JSON files from a folder
function readJsonFilesFromFolder(folderPath: string): Promise<{ [fileName: string]: any }> {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const jsonFiles = files.filter(file => file.endsWith('.json'));
      const promises = jsonFiles.map(file => {
        const fileNameWithoutExtension = path.parse(file).name;
        const filePath = path.join(folderPath, file);
        return new Promise<{ [fileName: string]: any }>((resolveFile, rejectFile) => {
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              rejectFile(err);
              return;
            }
            try {
              const jsonData = data;
              resolveFile({ [fileNameWithoutExtension]: jsonData });
            } catch (error) {
              rejectFile(error);
            }
          });
        });
      });

      Promise.all(promises)
        .then(results => {
          const jsonMap: { [fileName: string]: any } = {};
          for (const result of results) {
            Object.assign(jsonMap, result);
          }
          resolve(jsonMap);
        })
        .catch(reject);
    });
  });
}


(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const specMap = await readJsonFilesFromFolder("./examples/mainnet-oracles")

  const oraclesToUpdate = [
    ".CAXLUSDC",
    ".CEVMOS",
    ".CIBX",
    ".CIRIS",
    ".CKUJI",
    ".CMILKTIA",
    ".CSTATOM",
    ".CSTDYDX",
    ".CSTEVMOS",
    ".CSTOSMO",
    ".CSTRD",
    ".CSTSTARS",
    ".CSTTIA",
    ".CSTDYM",
    ".CSTSAGA",
    ".CRATOM",
    ".CMANTA",
    ".CUSDC"
  ]

  const txs: any[] = []
  for (const oracleId of oraclesToUpdate) {
    const spec = specMap[oracleId] as string
    if (oracleId == ".CRATOM") {
      const txUpdateSpec = {
        typeUrl: CarbonTx.Types.MsgUpdateOracle,
        value: MsgUpdateOracle.fromPartial({
          updater: connectedSDK.wallet.bech32Address,
          updateOracleParams: {
            id: oracleId,
            spec,
            maxResultAge: 305
          },
        }),
      }
      console.log(`updating oracle ${oracleId}`)
      txs.push(txUpdateSpec)
    } else if (oracleId == ".CMANTA" || oracleId == ".CUSDC") {
      const txUpdateSpec = {
        typeUrl: CarbonTx.Types.MsgUpdateOracle,
        value: MsgUpdateOracle.fromPartial({
          updater: connectedSDK.wallet.bech32Address,
          updateOracleParams: {
            id: oracleId,
            maxResultAge: 300
          },
        }),
      }
      console.log(`updating oracle ${oracleId}`)
      txs.push(txUpdateSpec)
    } else {
      const txUpdateSpec = {
        typeUrl: CarbonTx.Types.MsgUpdateOracle,
        value: MsgUpdateOracle.fromPartial({
          updater: connectedSDK.wallet.bech32Address,
          updateOracleParams: {
            id: oracleId,
            spec,
          },
        }),
      }
      console.log(`updating oracle ${oracleId}`)
      txs.push(txUpdateSpec)
    }
  }

  const result = await connectedSDK.wallet.sendTxs(txs);
  console.log(result);
})().catch(console.error).finally(() => process.exit(0));
