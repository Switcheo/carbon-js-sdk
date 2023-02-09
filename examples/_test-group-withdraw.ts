import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgDepositToGroup, MsgWithdrawFromGroup } from "../lib/codec";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instanceWithMnemonic(mnemonics, { network: CarbonSDK.Network.LocalHost});

  // const result = await sdk.coin.convertToGroup([{
  //   creator: sdk.wallet.bech32Address,
  //   depositCoin: "10000usdc"
  // }])

  const result = await sdk.wallet.sendTxs([{
    typeUrl: CarbonTx.Types.MsgWithdrawFromGroup,
    value: MsgWithdrawFromGroup.fromPartial({
      creator: sdk.wallet.bech32Address,
      sourceCoin: {
        denom: 'usdc',
        amount: '10000'
      }
    })
  }])

  console.log(result);
})().catch((e) => {
  console.log({ e })
}).finally(() => process.exit(0));
