import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";
import Long from "long";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("🚀 ~ file: create_perp_pool_registered_markets.ts:7 ~ mnemonics:", mnemonics)

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);

  const markets = ["ETH_PERP.USDC"]

  for (const market of markets) {
    try {
      const result = await connectedSDK.vault.deregisterFromPlPool({
        creator: connectedSDK.wallet.bech32Address,
        marketId: market,
      })
      console.log("Successfully deregistered market: ", market)
    } catch (error) {
      console.error(error?.response?.rawLog ?? error)
    }
  }

})().catch(console.error).finally(() => process.exit(0));
