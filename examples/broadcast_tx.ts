import { coins } from "@cosmjs/amino";
import { MsgSend } from "@cosmjs/stargate/build/codec/cosmos/bank/v1beta1/tx";
import * as BIP39 from "bip39";
import { CarbonWallet } from "../lib";
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

  const value = MsgSend.fromPartial({
    fromAddress: sdk.wallet.bech32Address,
    toAddress: sdk.wallet.bech32Address,
    amount: coins(10000, "swth"),
  });

  const signedTx = await sdk.wallet.getSignedTx(sdk.wallet.bech32Address, [{
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value,
  }]);

  const txBytes: Uint8Array = CarbonWallet.TxRaw.encode(signedTx).finish();
  console.log("txBytes", Buffer.from(txBytes).toString("hex"));
  const tx: CarbonWallet.TxRaw = CarbonWallet.TxRaw.decode(txBytes);
  console.log("tx", tx);

  const result = await sdk.wallet.broadcastTx(signedTx);
  console.log("broadcast tx result", result);
})().catch(console.error).finally(() => process.exit(0));
