import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { MsgCreateOracle } from "../lib/codec/Switcheo/carbon/oracle/tx";
import fs from 'fs';
import path from 'path';

interface SimpleMap<OracleParams> {
  [index: string]: OracleParams;
}

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

  const mainnetOraclesMap = await readJsonFilesFromFolder("./examples/mainnet-oracles")
  const mainnetOracles = Object.entries(mainnetOraclesMap)

  const TESTNET_ORACLE_URL = "https://test-api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=1000"
  const testnetOracles = await fetch(TESTNET_ORACLE_URL).then((res) => res.json());

  const testnetMap: SimpleMap<Boolean> = {}

  for (const oracle of testnetOracles.oracles) {
    const id: string = oracle.id
    testnetMap[id] = true
  }

  const txs: any[] = []
  for (const oracle of mainnetOracles) {
    const oracleId = oracle[0]
    if (testnetMap[oracleId]) {
      continue
    }
    const spec = oracle[1] as string
    const txCreateOracle = {
      typeUrl: CarbonTx.Types.MsgCreateOracle,
      value: MsgCreateOracle.fromPartial({
        creator: connectedSDK.wallet.bech32Address,
        createOracleParams: {
          id: oracleId,
          description: `Carbon ${oracleId} Index`,
          minTurnoutPercentage: 67,
          maxResultAge: 300,
          securityType: "SecuredByValidators",
          resultStrategy: "median",
          resolution: 10,
          spec,
        },
      }),
    }
    console.log(`creating oracle ${oracleId}`)
    txs.push(txCreateOracle)
  }

  const result = await connectedSDK.wallet.sendTxs(txs);
  console.log(result);
})().catch(console.error).finally(() => process.exit(0));
