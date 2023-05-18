import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";
import Long from "long";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);

  const markets = ["BTC_PERP.USDC", "ETH_PERP.USDC", "ARB_PERP.USDC"]
  const poolId = new Long(3)

  for (const market of markets) {
    try {
      const result = await connectedSDK.vault.registerToPlPool({
        creator: connectedSDK.wallet.bech32Address,
        poolId: poolId,
        marketId: market,
      })
      console.log(result)
    } catch (error) {
      console.error(error?.response?.rawLog ?? error)
    }
  }

})().catch(console.error).finally(() => process.exit(0));
