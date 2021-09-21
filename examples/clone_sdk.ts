import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

  /**
   * Used for creating multiple instances of connected SDK without
   * running initialize multiple times.
   */
(async () => {

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });

  const sdk1 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk2 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk3 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk4 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk5 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk6 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk7 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk8 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());
  const sdk9 = await sdk.clone().connectWithMnemonic(BIP39.generateMnemonic());

  console.log("connected sdk1", sdk1.wallet.bech32Address);
  console.log("connected sdk2", sdk2.wallet.bech32Address);
  console.log("connected sdk3", sdk3.wallet.bech32Address);
  console.log("connected sdk4", sdk4.wallet.bech32Address);
  console.log("connected sdk5", sdk5.wallet.bech32Address);
  console.log("connected sdk6", sdk6.wallet.bech32Address);
  console.log("connected sdk7", sdk7.wallet.bech32Address);
  console.log("connected sdk8", sdk8.wallet.bech32Address);
  console.log("connected sdk9", sdk9.wallet.bech32Address);
})().catch(console.error).finally(() => process.exit(0));
