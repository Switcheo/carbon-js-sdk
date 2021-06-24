import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
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

  const moduleCallResult = await connectedSDK.order.edit({
    id: "1",
    price: new BigNumber(100), // human
    quantity: new BigNumber(100), // human
    stopPrice: new BigNumber(150), // human
  });
  console.log("call from module", moduleCallResult);
})().catch(console.error).finally(() => process.exit(0));
