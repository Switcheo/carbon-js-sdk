import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { MsgUpdateToken } from "../lib/codec";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  const wallet = connectedSDK.getConnectedWallet();
  console.log("connected sdk", wallet.bech32Address);

  const allTokens = await connectedSDK.token.getAllTokens()

  const inactiveTokens = allTokens.filter(t => t.isActive === false)
  console.log("inactive tokens:")
  console.log(JSON.stringify(inactiveTokens, null, 2))

  const msgs = allTokens
    .filter(t => t.bridgeId.toString() === '1' && t.isActive === true)
    .map(t => {
      return {
        typeUrl: CarbonTx.Types.MsgUpdateToken,
        value: MsgUpdateToken.fromPartial({
          updater: wallet.bech32Address,
          denom: t.denom,
          updateTokenParams: {
            isActive: true,
          },
        })
      }
    })

  const chunkSize = 30;
  for (let i = 0; i < msgs.length; i += chunkSize) {
    console.log("sending chunk starting from token " + i)
    const chunk = msgs.slice(i, i + chunkSize);
    const result = await wallet.sendTxs(chunk);
    console.log(result)
  }

  const allTokensAfter = await connectedSDK.token.getAllTokens()

  const activeIBCTokens = allTokensAfter.filter(t => t.bridgeId.toString() === '2' && t.isActive === true)
  console.log("active ibc tokens:", activeIBCTokens.length)

  const activeTokens = allTokensAfter.filter(t => t.bridgeId.toString() !== '0' && t.isActive === true)
  console.log("active non-native tokens:", activeTokens.length)

  console.log("done")
})().catch(console.error).finally(() => process.exit(0));
