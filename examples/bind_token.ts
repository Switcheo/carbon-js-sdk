import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.admin.bindToken({
    sourceDenom: "opul.1.2.d9af8f",
    wrappedDenom: "zopul.1.18.4bcdc9",
  })

  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
