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

  const nowDate = dayjs().add(10, 's'); // add delay of 10 seconds to startTime so that ErrRewardSchemeDurationInvalidType error is not thrown
  const endDate = nowDate.add(2, "m");

  const response = await sdk.admin.createRewardScheme({
    rewardDenom: "swth",
    assetDenom: "cdp/usdc",
    rewardType: "lend",
    rewardAmountPerSecond: new BigNumber(0.01).shiftedBy(6),
    startTime: nowDate.toDate(),
    endTime: endDate.toDate(),
  });
  console.log("response", response);
})().catch(console.error).finally(() => process.exit(0));
