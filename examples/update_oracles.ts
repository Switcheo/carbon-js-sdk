import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { MsgUpdateOracle } from "../lib/codec/Switcheo/carbon/oracle/tx";
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

interface SimpleMap<OracleParams> {
  [index: string]: OracleParams;
}
interface OracleParams {
  minTurnOutPercentage: string
  maxResultAge: string
  securityType: string
  resultStrategy: string
  resolution: string
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
    network: CarbonSDK.Network.MainNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const oracleMap = await readJsonFilesFromFolder("./examples/mainnet-oracles")
  const oracles = Object.entries(oracleMap)

  const MAINNET_ORACLE_URL = "https://api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=1000"
  const mainnetOracles = await fetch(MAINNET_ORACLE_URL).then((res) => res.json());

  const mainnetMap: SimpleMap<OracleParams> = {}

  for (const oracle of mainnetOracles.oracles) {
    const id: string = oracle.id
    const { min_turnout_percentage, max_result_age, security_type, result_strategy, resolution } = oracle
    const oracleParam: OracleParams = {
      minTurnOutPercentage: min_turnout_percentage,
      maxResultAge: max_result_age,
      securityType: security_type,
      resultStrategy: result_strategy,
      resolution
    }
    mainnetMap[id] = oracleParam
  }

  const txs: any[] = []
  for (const oracle of oracles) {
    const oracleId = oracle[0]
    const spec = oracle[1] as string
    const currentOracle = mainnetMap[oracleId]

    if (!currentOracle) {
      console.log(`oracle ${oracleId} not found on mainnet`)
      continue
    }

    const shouldUpdateReso = currentOracle.resolution == "2"

    const txUpdateOracle = {
      typeUrl: CarbonTx.Types.MsgUpdateOracle,
      value: MsgUpdateOracle.fromPartial({
        updater: connectedSDK.wallet.bech32Address,
        updateOracleParams: {
          id: oracleId,
          resolution: shouldUpdateReso ? "1" : currentOracle.resolution,
          spec,
        },
      }),
    }
    console.log(`updating oracle spec for ${oracleId}`)
    if (shouldUpdateReso) {
      console.log(`updating oracle reso for ${oracleId} from ${currentOracle.resolution} to 1`)
    }
    txs.push(txUpdateOracle)
  }

  const result = await connectedSDK.wallet.sendTxs(txs);
  console.log(result);
})().catch(console.error).finally(() => process.exit(0));
