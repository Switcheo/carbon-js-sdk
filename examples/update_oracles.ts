import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { MsgUpdateOracle } from "../lib/codec/oracle/tx";
import nodeFetch from "node-fetch";

interface SimpleMap<T = unknown> {
  [index: string]: T;
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

    const newResolutions: SimpleMap<number> = {
      ".CAAVE": 14401,
      ".CAMPLUNA": 61,
      ".CARB": 21,
      ".CATOM": 21,
      ".CAXLUSDC": 61,
      ".CBIT": 21,
      ".CBLUR": 21,
      ".CBNB": 14401,
      ".CBUSDCEX": 241,
      ".CBUSDDEX": 241,
      ".CCGLP": 61,
      ".CCRV": 14401,
      ".CDOGE": 14401,
      ".CDYM": 2,
      ".CEVMOS": 61,
      ".CGAS": 14401,
      ".CGMX": 21,
      ".CIBX": 61,
      ".CIRIS": 61,
      ".CJUP": 5,
      ".CKUJI": 32,
      ".CAMPKUJI": 32,
      ".CLINK": 14401,
      ".CLSI": 21,
      ".CLUNA": 22,
      ".CMANTA": 22,
      ".CMEME": 21,
      ".CMILKTIA": 59,
      ".CNEO": 21,
      ".COKB": 121,
      ".COKT": 121,
      ".COSMO": 21,
      ".CPYTH": 5,
      ".CRATOM": 61,
      ".CRSWTH": 23,
      ".CRSWTHSWTHLP": 23,
      ".CRUNE": 14401,
      ".CSCRT": 5,
      ".CSEI": 21,
      ".CSOL": 5,
      ".CSTATOM": 31,
      ".CSTDYDX": 31,
      ".CSTEVMOS": 32,
      ".CSTLUNA": 32,
      ".CSTOSMO": 33,
      ".CSTRD": 33,
      ".CSTRIDE": 14400,
      ".CSTRK": 21,
      ".CSTSTARS": 31,
      ".CSTTIA": 39,
      ".CSTX": 21,
      ".CSWTH": 15,
      ".CTIA": 5,
      ".CTON": 21,
      ".CTRX": 14401,
      ".CUSC": 20,
      ".CUSD": 3600,
      ".CUSDC": 30,
      ".CUSDT": 59,
      ".CWSTETH": 61,
      ".CYIELDUSD": 241,
      ".CZIL": 21,
      "SIDXBTC": 5,
      "SIDXETH": 5
    }    

    const MAINNET_ORACLE_URL = "https://api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=100"
    const oracleData = await fetch(MAINNET_ORACLE_URL).then((res) => res.json());
      
    const txs: any[] = []
    for (const oracle of oracleData.oracles) {
      const id = oracle.id as string
      const resolution = oracle.resolution as string
        if (!newResolutions[id]) {
          console.log(`skipping update for oracle ${id} as it is not found in new resolution map`)
          continue
        }

        if (newResolutions[id] == new Number(resolution)) {
          console.log(`skipping update for oracle ${id} as it is already updated: ${resolution}`)
          continue
        }

        console.log(`updating oracle ${id} resolution from ${resolution} to ${newResolutions[id]} `)
        const tx = {
            typeUrl: CarbonTx.Types.MsgUpdateOracle,
            value: MsgUpdateOracle.fromPartial({
              updater: connectedSDK.wallet.bech32Address,
              updateOracleParams: {
                id,
                resolution: newResolutions[id],
              },
            }),
        }
        txs.push(tx)
    }

    const result = await connectedSDK.wallet.sendTxs(txs);
    console.log(result);
  })().catch(console.error).finally(() => process.exit(0));
