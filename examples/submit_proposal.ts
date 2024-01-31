import * as BIP39 from "bip39";
import { CarbonSDK, CarbonTx } from "./_sdk";
import "./_setup";
import { coins } from "@cosmjs/amino";
import { MsgSubmitProposal } from "../lib/codec/cosmos/gov/v1/tx";
import { MsgSetRewardCurve } from "../lib/codec/Switcheo/carbon/liquiditypool/tx";
import Long from "long";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const authAddress = 'tswth10d07y265gmmuvt4z0w9aw880jnsr700jptgru0'

  const rewardCurveUrl = CarbonTx.Types.MsgSetRewardCurve
  const msgSetRewardCurve = MsgSetRewardCurve.fromPartial({
    creator: authAddress,
    setRewardCurveParams: {
      startTime: new Date(),
      initialRewardBps: 2500,
      reductionMultiplierBps: 10000,
      reductionIntervalSeconds: new Long(7257600),
      reductions: 1,
      finalRewardBps: 0,
    }
  })

  const setRewardCurveProposalResult = await connectedSDK.gov.submit(
    MsgSubmitProposal.fromPartial({
      messages: [
        {
          typeUrl: rewardCurveUrl,
          value: MsgSetRewardCurve.encode(msgSetRewardCurve).finish()
        }
      ],
      initialDeposit: coins(1000000000, "swth"),
      proposer: connectedSDK.wallet.bech32Address,
      metadata: "metadata",
      title: "title",
      summary: "summary"
    })
  );

  console.log(setRewardCurveProposalResult);
})()
  .catch(console.error)
  .finally(() => process.exit(0));
