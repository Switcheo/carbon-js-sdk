import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { MsgUpdateOracle } from "../lib/codec/oracle/tx";
import nodeFetch from "node-fetch";

interface SimpleMap<T = unknown> {
  [index: string]: T;
}

interface UpdateOracleParams {
  description?: string;
  minTurnoutPercentage?: number;
  maxResultAge?: number;
  securityType?: string;
  resultStrategy?: string;
  resolution?: number;
  spec?: string;
}

function fetch(url: string, init?: RequestInit): Promise<Response> {
  if (typeof window !== "undefined" && window.fetch) {
    return window.fetch(url, { ...init });
  } else {
    return nodeFetch(url, init as any) as unknown as Promise<Response>;
  }
}

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
    console.log("mnemonics", mnemonics);
  
    const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
      // config: {
      //   tmRpcUrl: process.env.TRPC_ENDPOINT,
      // },
    });
    const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
    console.log("connected sdk");

    const newResolutions: SimpleMap<UpdateOracleParams> = {
      ".CAAVE": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CAMPKUJI": {
        resolution: 32,
        maxResultAge: 320
      },
      ".CAMPLUNA": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CARB": {
        resolution: 5,
        maxResultAge: 315
      },
      ".CATOM": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CAXLUSDC": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CBIT": {
        resolution: 5,
        maxResultAge: 315
      },
      ".CBLUR": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CBNB": {
        resolution: 5,
        maxResultAge: 315
      },
      ".CBUSDCEX": {
        resolution: 241,
        maxResultAge: 482
      },
      ".CBUSDDEX": {
        resolution: 241,
        maxResultAge: 482
      },
      ".CCGLP": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CCRV": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CDOGE": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CDYM": {
        resolution: 2,
        maxResultAge: 300
      },
      ".CEVMOS": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CGAS": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CGMX": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CIBX": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CIRIS": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CJUP": {
        resolution: 5,
        maxResultAge: 300
      },
      ".CKUJI": {
        resolution: 32,
        maxResultAge: 320
      },
      ".CLINK": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CLSI": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CLUNA": {
        resolution: 22,
        maxResultAge: 308
      },
      ".CMANTA": {
        resolution: 5,
        maxResultAge: 305
      },
      ".CMEME": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CMILKTIA": {
        resolution: 59,
        maxResultAge: 354
      },
      ".CNEO": {
        resolution: 21,
        maxResultAge: 315
      },
      ".COKB": {
        resolution: 121,
        maxResultAge: 363
      },
      ".COKT": {
        resolution: 121,
        maxResultAge: 363
      },
      ".COP": {
        resolution: 5,
        maxResultAge: 300
      },
      ".COSMO": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CPYTH": {
        resolution: 5,
        maxResultAge: 300
      },
      ".CRATOM": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CRSWTH": {
        resolution: 23,
        maxResultAge: 322
      },
      ".CRSWTHSWTHLP": {
        resolution: 23,
        maxResultAge: 322
      },
      ".CRUNE": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CSCRT": {
        resolution: 5,
        maxResultAge: 300
      },
      ".CSEI": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CSOL": {
        resolution: 5,
        maxResultAge: 300
      },
      ".CSTATOM": {
        resolution: 31,
        maxResultAge: 310
      },
      ".CSTDYDX": {
        resolution: 31,
        maxResultAge: 310
      },
      ".CSTEVMOS": {
        resolution: 32,
        maxResultAge: 320
      },
      ".CSTLUNA": {
        resolution: 32,
        maxResultAge: 320
      },
      ".CSTOSMO": {
        resolution: 33,
        maxResultAge: 330
      },
      ".CSTRD": {
        resolution: 33,
        maxResultAge: 330
      },
      ".CSTRIDE": {
        resolution: 14400,
        maxResultAge: 28800
      },
      ".CSTRK": {
        resolution: 5,
        maxResultAge: 315
      },
      ".CSTSTARS": {
        resolution: 31,
        maxResultAge: 310
      },
      ".CSTTIA": {
        resolution: 39,
        maxResultAge: 312
      },
      ".CSTX": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CSWTH": {
        resolution: 15,
        maxResultAge: 300
      },
      ".CTIA": {
        resolution: 5,
        maxResultAge: 300
      },
      ".CTON": {
        resolution: 21,
        maxResultAge: 315
      },
      ".CTRX": {
        resolution: 14401,
        maxResultAge: 28802
      },
      ".CUSC": {
        resolution: 20,
        maxResultAge: 300
      },
      ".CUSD": {
        resolution: 3600,
        maxResultAge: 7200
      },
      ".CUSDC": {
        resolution: 30,
        maxResultAge: 300
      },
      ".CUSDT": {
        resolution: 59,
        maxResultAge: 354
      },
      ".CWSTETH": {
        resolution: 61,
        maxResultAge: 305
      },
      ".CYIELDUSD": {
        resolution: 241,
        maxResultAge: 482
      },
      ".CZIL": {
        resolution: 21,
        maxResultAge: 315
      },
      "SIDXBTC": {
        resolution: 5,
        maxResultAge: 300
      },
      "SIDXETH": {
        resolution: 5,
        maxResultAge: 300
      },
      ".CWLD": {
        resolution: 2,
        maxResultAge: 300
      },
      ".CRNDR": {
        resolution: 2,
        maxResultAge: 300
      },
    }    

    const MAINNET_ORACLE_URL = "https://api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=100"
    const oracleData = await fetch(MAINNET_ORACLE_URL).then((res) => res.json());
      
    const txs: any[] = []
    for (const oracle of oracleData.oracles) {
      const id = oracle.id as string
      const currResolution = oracle.resolution as string
      const currMaxResultAge = oracle.max_result_age as string
      if (!newResolutions[id]) {
        console.log(`skipping update for oracle ${id} as it is not found in new resolution map`)
        continue
      }

      if (newResolutions[id].resolution != new Number(currResolution) || newResolutions[id].maxResultAge != new Number(currMaxResultAge)) {
        const txUpdateOracle = {
          typeUrl: CarbonTx.Types.MsgUpdateOracle,
          value: MsgUpdateOracle.fromPartial({
            updater: connectedSDK.wallet.bech32Address,
            updateOracleParams: {
              id,
              resolution: newResolutions[id].resolution,
              maxResultAge: newResolutions[id].maxResultAge
            },
          }),
        }
        console.log(`updating oracle ${id}`)
        txs.push(txUpdateOracle)
      }
    }

    const result = await connectedSDK.wallet.sendTxs(txs);
    console.log(result);
  })().catch(console.error).finally(() => process.exit(0));
