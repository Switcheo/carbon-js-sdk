import * as BIP39 from "bip39";
import { MsgCreateGroup } from "../lib/codec";
import { CarbonSDK, CarbonTx } from "./_sdk";
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
  console.log("connected sdk");

  const result = await connectedSDK.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgCreateGroup,
    value: MsgCreateGroup.fromPartial({
      creator: connectedSDK.wallet.bech32Address,
      name: 'USD',
      chequeTokenSymbol: 'USD',
      oracleId: 'DXBT2'
    }),
  }]);
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
