import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";
import { AddressUtils } from "../lib";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk", connectedSDK.wallet.bech32Address, connectedSDK.wallet.hexAddress);

  const byteStringAddress = connectedSDK.wallet.hexAddress; // 20 bytes address expressed in hex with 0x prefix
  const scriptHash = byteStringAddress.substring(2); // remove 0x prefix.
  console.log("swth", AddressUtils.SWTHAddress.encode(scriptHash, { bech32Prefix: sdk.networkConfig.Bech32Prefix }), `bech32 with \"${sdk.networkConfig.Bech32Prefix}\" prefix`);
  console.log(" neo", AddressUtils.NEOAddress.encode(scriptHash), "base58check with version=17");
  console.log("neo3", AddressUtils.N3Address.encode(scriptHash), "base58check with version=35");
})().catch(console.error).finally(() => process.exit(0));
