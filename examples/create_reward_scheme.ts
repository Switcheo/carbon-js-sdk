import * as BIP39 from "bip39";
import dayjs from "dayjs"
import { CarbonSDK } from "./_sdk";
import "./_setup";
import BigNumber from "bignumber.js";

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
  console.log("connected sdk", connectedSDK.wallet.bech32Address);

  const nowDate = dayjs().add(1000, 'm'); // add delay of 10 seconds to startTime so that ErrRewardSchemeDurationInvalidType error is not thrown
  const endDate = nowDate.add(2, "w");

  const response = await sdk.cdp.createRewardScheme({
    rewardDenom: "swth",
    assetDenom: "cibt/usdc",
    rewardType: "lend",
    rewardAmountPerSecond: new BigNumber(0.1).shiftedBy(8),
    startTime: nowDate.toDate(),
    endTime: endDate.toDate(),
  });
  console.log("response", response);

  //To check if it works, http://localhost:1317/carbon/cdp/v1/reward_schemes
})().catch(console.error).finally(() => process.exit(0));
