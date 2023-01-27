import * as BIP39 from "bip39";
import Long from 'long';
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected wallet:", connectedSDK.wallet.bech32Address);

  const zionConsensusPeers = await sdk.query.headersync.ZionConsensusPeers({
    chainId: new Long(0),
  });
  console.log("ZionConsensusPeers: ", zionConsensusPeers);
})().catch(console.error).finally(() => process.exit(0));
