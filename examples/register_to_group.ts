import * as BIP39 from "bip39";
import { MsgRegisterToGroup } from "../lib/codec";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instanceWithMnemonic(mnemonics, {
    network: CarbonSDK.Network.LocalHost,
  });
  console.log("connectedSDK")

  await sdk.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgRegisterToGroup,
    value: MsgRegisterToGroup.fromPartial({
      creator: 'tswth1ex0e3g7zkwxntcw4qv803rm7yjsc9grjqycd5l',
      groupId: 'USD', // Update group id after created
      denom: 'busd',
    }),
  }]);

  await sdk.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgRegisterToGroup,
    value: MsgRegisterToGroup.fromPartial({
      creator: 'tswth1ex0e3g7zkwxntcw4qv803rm7yjsc9grjqycd5l',
      groupId: 'USD', // Update group id after created
      denom: 'usdc',
    }),
  }]);

})().catch(console.error).finally(() => process.exit(0));
