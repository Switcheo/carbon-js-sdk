import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk", connectedSDK.getConnectedWallet().bech32Address);

  const allTokens = await connectedSDK.token.getAllTokens()

  const promises = allTokens.map(t => {
    if (t.bridgeId.toString() === '0' || t.isActive === false) {
      return null
    } else {
      return connectedSDK.admin.updateToken({
        denom: t.denom,
        isActive: false,
      })
    }
  }).filter(t => t !== null)

  const result = await Promise.all(promises)
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
