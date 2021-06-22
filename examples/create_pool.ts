import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import Long from "long";
import "./_setup";

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

  const result = await connectedSDK.liquiditypool.create({
    tokenADenom: "swth",
    tokenBDenom: "eth",
    tokenAWeight: new BigNumber(0.5),
    tokenBWeight: new BigNumber(0.5),
    swapFee: new BigNumber(0.002),
    numQuotes: new Long(5),
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));