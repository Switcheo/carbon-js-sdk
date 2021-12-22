import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import Long from "long";
import { AminoTypesMap, CarbonSDK, CarbonTx, GovUtils } from "./_sdk";
import { MsgSubmitProposal } from "../lib/codec/cosmos/gov/v1beta1/tx";
import "./_setup";
import { ProposalTypes, UpdatePoolProposal } from "../lib/codec";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.TestNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  const info = await sdk.eth.retrieveERC20Info("0xE5b6a68D6002c75F8e9fF27FcDa87537603A98FD");
  console.log("info", info);
})().catch(console.error).finally(() => process.exit(0));

