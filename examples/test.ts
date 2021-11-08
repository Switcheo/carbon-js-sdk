import { Secp256k1HdWallet, StdFee, StdSignDoc } from "@cosmjs/amino";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import Long from "long";
import { CarbonTx } from "../lib";
import { MsgCreatePool, registry } from "../lib/codec";
import { AuthInfo, TxBody, TxRaw } from "../lib/codec/cosmos/tx/v1beta1/tx";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS as string
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });

  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonics, {
    prefix: "tswth"
  });
  const [account] = await wallet.getAccounts();
  const address = account.address
  const publicKey = account.pubkey;

  const balances = await sdk.query.bank.AllBalances({
    address,
  });
  console.log(balances);
  console.log(address);
  console.log(publicKey);

  const aminoTypes = new AminoTypes({
    additions: {
      [CarbonTx.Types.MsgCreatePool]: {
        aminoType: "liquiditypool/CreatePool",
        toAmino: ({
          creator,
          numQuotes,
          swapFee,
          tokenADenom,
          tokenAWeight,
          tokenBDenom,
          tokenBWeight,
        }: MsgCreatePool) => {
          return {
            creator,
            num_quotes: numQuotes.toString(10),
            swap_fee: swapFee,
            token_a_denom: tokenADenom,
            token_a_weight: tokenAWeight,
            token_b_denom: tokenBDenom,
            token_b_weight: tokenBWeight,
          }
        },
        fromAmino: ({
          creator,
          num_quotes: numQuotes,
          swap_fee: swapFee,
          token_a_denom: tokenADenom,
          token_a_weight: tokenAWeight,
          token_b_denom: tokenBDenom,
          token_b_weight: tokenBWeight,
        }): MsgCreatePool => {
          return {
            creator,
            numQuotes: Long.fromString(numQuotes),
            swapFee,
            tokenADenom,
            tokenAWeight,
            tokenBDenom,
            tokenBWeight,
          }
        }
      }
    }
  })

  const signingClient = await SigningStargateClient.connectWithSigner(sdk.networkConfig.rpcUrl, {
    getAccounts: async () => wallet.getAccounts(),
    signAmino: async (signerAddress: string, signDoc: StdSignDoc) => {
      console.log("sign doc", signDoc, signDoc.msgs[0], signDoc.fee.amount);
      return wallet.signAmino(signerAddress, signDoc);
    },
    // signDirect: async (signerAddress: string, signDoc: SignDoc) => {
    //   const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonics, {
    //     prefix: "tswth",
    //   });
    //   return wallet.signDirect(signerAddress, signDoc);
    // }
  }, {
    aminoTypes,
    registry,
  });

  const msg = MsgCreatePool.fromPartial({
    creator: address,
    tokenADenom: "swth",
    tokenBDenom: "eth",
    tokenAWeight: new BigNumber(0.5).shiftedBy(18).toString(10), // human
    tokenBWeight: new BigNumber(0.5).shiftedBy(18).toString(10), // human
    swapFee: new BigNumber(0.002).shiftedBy(18).toString(10),
    numQuotes: Long.fromInt(5),
  });
  const fee: StdFee = {
    amount: [{
      amount: "100000000000",
      denom: "swth",
    }],
    gas: "1000000"
  };
  const result = await signingClient.sign(address, [{
    typeUrl: CarbonTx.Types.MsgCreatePool,
    value: msg,
  }], fee, "");
  console.log(
    "signature",
    Buffer.from(result.signatures[0]).toString("base64"),
    TxBody.decode(result.bodyBytes),
    AuthInfo.decode(result.authInfoBytes),
  )
  const txRaw = TxRaw.encode(result).finish();
  const tx = await signingClient.broadcastTx(txRaw);
  console.log(tx)
})().catch(console.error).finally(() => process.exit(0));
