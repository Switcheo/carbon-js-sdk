import * as BIP39 from "bip39";
import { AddressUtils } from "../lib";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
    config: {
      n3: {
        rpcURL: "http://127.0.0.1:20333",
      },
    }
  });

  const result = await sdk.n3.getExternalBalances(sdk, "NeT85LegV3eNQCJjLjhUSgsTxuXcfra2bp");
  console.log(result);

})().catch(console.error).finally(() => process.exit(0));
