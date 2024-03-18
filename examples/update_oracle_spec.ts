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
      network: CarbonSDK.Network.TestNet,
    });
    const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
    console.log("connected sdk");

    const mainnetOracles = await readJsonFilesFromFolder("./examples/mainnet-oracles")

    // const oraclesToUpdate = [
    //   {
    //     id: ".CAXLUSDC",
    //     maxResultAge: 305
    //   },
    //   {
    //     id: ".CEVMOS",
    //     maxResultAge: 305
    //   },
    //   {
    //     id: ".CIBX",
    //     maxResultAge: 305
    //   },
    //   {
    //     id: ".CIRIS",
    //     maxResultAge: 305
    //   },
    //   {
    //     id: ".CKUJI",
    //     maxResultAge: 320
    //   },
    //   {
    //     id: ".CMILKTIA",
    //     maxResultAge: 354
    //   },
    //   {
    //     id: ".COSMO",
    //     maxResultAge: 300
    //   },
    //   {
    //     id: ".CSCRT",
    //     maxResultAge: 300
    //   },
    //   {
    //     id: ".CSTATOM",
    //     maxResultAge: 310
    //   },
    //   {
    //     id: ".CSTDYDX",
    //     maxResultAge: 310
    //   },
    //   {
    //     id: ".CSTEVMOS",
    //     maxResultAge: 320
    //   },
    //   {
    //     id: ".CSTOSMO",
    //     maxResultAge: 330
    //   },
    //   {
    //     id: ".CSTRD",
    //     maxResultAge: 330
    //   },
    //   {
    //     id: ".CSTSTARS",
    //     maxResultAge: 310
    //   },
    //   {
    //     id: ".CSTTIA",
    //     maxResultAge: 312
    //   },
    // ]

    const oraclesToUpdate = [
      {
        id: ".CYIELDUSD",
        maxResultAge: 482,
      },
      {
        id: "SIDXBTC",
        maxResultAge: 300,
      },
      {
        id: "SIDXETH",
        maxResultAge: 300,
      },
    ]
      
    const txs: any[] = []
    for (const oracle of oraclesToUpdate) {
      const spec = mainnetOracles[oracle.id] as string
      const txUpdateSpec = {
        typeUrl: CarbonTx.Types.MsgUpdateOracle,
        value: MsgUpdateOracle.fromPartial({
          updater: connectedSDK.wallet.bech32Address,
          updateOracleParams: {
            id: oracle.id,
            spec,
            maxResultAge: oracle.maxResultAge
          },
        }),
      }
      console.log(`updating oracle ${oracle.id}`)
      txs.push(txUpdateSpec)
    }

    const result = await connectedSDK.wallet.sendTxs(txs);
    console.log(result);
  })().catch(console.error).finally(() => process.exit(0));
