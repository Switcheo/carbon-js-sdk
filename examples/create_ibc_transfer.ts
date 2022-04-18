import { DirectSecp256k1Wallet, DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SigningStargateClient } from "@cosmjs/stargate";
import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import { AddressUtils, CarbonSDK, CarbonTx, CarbonWallet, IBCUtils } from "./_sdk";
import { SignDoc } from '../lib/codec/cosmos/tx/v1beta1/tx';
import { registry } from "../lib/codec/index";
import { ChainIds, swthChannels } from "../lib/constant";
import "./_setup";
import { Models } from '../lib';

const network = ChainIds.Osmosis;
const networkObj = IBCUtils.EmbedChainInfos[network];
const swthDenom = "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const swthToken = await sdk.token.tokenForId(swthDenom); // swth on osmo blockchain
  if (!swthToken) return;

  const channelObj = swthChannels[network];
  if (!channelObj) return;

  const tokenDecimals = swthToken.decimals.toNumber() ?? 0;

  const counterAddressBytes = AddressUtils.IBCAddress.getAddressBytes(sdk?.wallet?.bech32Address ?? "");
  const counterAddr = AddressUtils.IBCAddress.deriveAddressFromBytes(counterAddressBytes, networkObj.bech32Config.bech32PrefixAccAddr)

  // Withdrawal
  const withdrawResponse = await connectedSDK.ibc.sendIBCTransfer({
    sourcePort: "transfer",
    sourceChannel: channelObj.sourceChannel ?? "channel-0", // channel of receiving blockchain
    denom: "swth",
    amount: new BigNumber(50).shiftedBy(tokenDecimals),
    sender: sdk?.wallet?.bech32Address ?? "", // address to send from
    receiver: counterAddr, // address to send to
  });
  console.log("withdrawal response", withdrawResponse);


  const walletPrivateKey = AddressUtils.SWTHAddress.mnemonicToPrivateKey(mnemonics);
  const counterWallet = await DirectSecp256k1Wallet.fromKey(walletPrivateKey, networkObj.bech32Config.bech32PrefixAccAddr);
  const counterSigner: OfflineDirectSigner = {
    getAccounts() {
      return counterWallet.getAccounts();
    },
    async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
      return await counterWallet.signDirect(signerAddress, signDoc);
    },
  }

  if (!networkObj.tmRpc) {
    throw new Error('No rpc url provided in network obj')
  }
  const signingClient = await SigningStargateClient.connectWithSigner(
    networkObj.tmRpc,
    counterSigner,
    { registry },
  );
  const lastHeight: number = await sdk.query.chain.getHeight();

  // Deposit
  const txBody = await Models.IBC.TranferV1.MsgTransfer.fromPartial({
    sourcePort: "transfer",
    sourceChannel: channelObj.dstChannel ?? "channel-0",
    token: {
      denom: swthToken.denom,
      amount: new BigNumber(50).shiftedBy(tokenDecimals).toString(10),
    },
    sender: counterAddr, // address to send from
    receiver: sdk?.wallet?.bech32Address ?? "", // address to send to
    timeoutHeight: {
      revisionHeight: (lastHeight ?? 0) + 150,
      revisionNumber: 1,
    },
  });
  const txMsgs = [{
    typeUrl: CarbonTx.Types.MsgTransfer,
    value: txBody,
  }];
  const txRaw = await signingClient.sign(counterAddr, txMsgs, {
    amount: [],
    gas: "350000",
  }, "");
  const tx = CarbonWallet.TxRaw.encode(txRaw).finish();
  const depositResponse = await signingClient.broadcastTx(tx, 60_000, 3_000)
  console.log("deposit response", depositResponse);
})().catch(console.error).finally(() => process.exit(0));
