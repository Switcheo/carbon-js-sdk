import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";
import { coins } from "@cosmjs/amino";

const TRPC_ENDPOINT = process.env.TRPC_ENDPOINT ?? "http://localhost:26657";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      rpcURL: TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.gov.submit({
    content: {
      typeUrl: "/Switcheo.carbon.fee.SetMsgFeeProposal",
      value: {
        title: "proposal title",
        description: "proposal desc",
        params: {
          msgType: 'test1',
          creator: connectedSDK.wallet.bech32Address,
          fee: "10",
        },
      }
    },
    initialDeposit: coins(100000000, "swth"),
    proposer: connectedSDK.wallet.bech32Address,
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));