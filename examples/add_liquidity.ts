import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const orders = await sdk.query.order.OrdersAccountOpen({ address: 'swth1vzq4sthkfr5qqsf085hggzew5w2xryph08xuf7', marketId: 'cmkt/109' })
  console.log('xx orders: ', orders)
})().catch(console.error).finally(() => process.exit(0));
