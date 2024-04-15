import nodeFetch from "node-fetch";
import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import { MsgUpdateOracle } from "../lib/codec/Switcheo/carbon/oracle/tx";
import "./_setup";

function fetch(url: string, init?: RequestInit): Promise<Response> {
  if (typeof window !== "undefined" && window.fetch) {
    return window.fetch(url, { ...init });
  } else {
    return nodeFetch(url, init as any) as unknown as Promise<Response>;
  }
}

interface OracleParams {
  minTurnOutPercentage: string
  maxResultAge: string
  securityType: string
  resultStrategy: string
  resolution: string
}

interface SimpleMap<OracleParams> {
  [index: string]: OracleParams;
}

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const TESTNET_ORACLE_URL = "http://localhost:1317/carbon/oracle/v1/oracles?pagination.limit=100"
  const MAINNET_ORACLE_URL = "https://api.carbon.network/carbon/oracle/v1/oracles?pagination.limit=100"

  const testnetOracles = await fetch(TESTNET_ORACLE_URL).then((res) => res.json());
  const mainnetOracles = await fetch(MAINNET_ORACLE_URL).then((res) => res.json());

  // convert testnet oracles to map and compare
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
  for (const oracle of testnetOracles.oracles) {
    const id: string = oracle.id
    const mainnetParams = mainnetMap[id]
    if (!mainnetParams) {
      console.log(`testnet oracle ${oracle.id} not found on mainnet, skipping`)
      continue
    }

    let maxResultAge = mainnetParams.maxResultAge
    if (parseInt(maxResultAge) < 300) {
      maxResultAge = "300"
    }

    const txUpdateOracle = {
      typeUrl: CarbonTx.Types.MsgUpdateOracle,
      value: MsgUpdateOracle.fromPartial({
        updater: connectedSDK.wallet.bech32Address,
        updateOracleParams: {
          id,
          maxResultAge,
          resolution: mainnetParams.resolution,
        },
      }),
    }
    console.log(`updating oracle ${id}`)
    txs.push(txUpdateOracle)
  }
  const result = await connectedSDK.wallet.sendTxs(txs);
  console.log(result);
})().catch(console.error).finally(() => process.exit(0));
