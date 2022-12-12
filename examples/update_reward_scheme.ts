import * as BIP39 from "bip39";
import dayjs from "dayjs"
import { CarbonSDK } from "./_sdk";
import "./_setup";
import BigNumber from "bignumber.js";
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
    console.log("connected sdk", connectedSDK.wallet.bech32Address);

    const nowDate = dayjs().add(20, 'm');
    const endDate = nowDate.add(3, "w");

    //Note that only future/active reward schemes can be updated

    //fields allowed to be updated for future reward schemes:
    //         rewardDenom,
    //         assetDenom,
    //         rewardType,
    //         rewardAmountPerSecond,
    //         startTime,
    //         endTime,

    //fields allowed to be updated for active reward schemes:
    //         endTime,
    const response = await sdk.cdp.updateRewardScheme({
        rewardSchemeId:  new Long(56),
        rewardDenom: "eth",
        assetDenom: "usdc",
        rewardType: "borrow",
        rewardAmountPerSecond: new BigNumber(0.01).shiftedBy(8),
        startTime: nowDate.toDate(),
        endTime: endDate.toDate(),
    });
    console.log("response", response);
    //To check if it works, http://localhost:1317/carbon/cdp/v1/reward_schemes
})().catch(console.error).finally(() => process.exit(0));
