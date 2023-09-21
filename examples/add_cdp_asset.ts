import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";
import BigNumber from "bignumber.js";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk:", connectedSDK);

  const result = await connectedSDK.admin.addAsset({
    asset: {
      denom: "usc",
      oracleId: "DUSDC",
      rateStrategyName: "volatile 1",
      allowRepayStablecoinInterestDebt: false,
      loanToValue: new BigNumber(6500),
      liquidationThreshold: new BigNumber(6900),
      liquidationDiscount: new BigNumber(2000),
      supplyCap: new BigNumber(0),
      borrowCap: new BigNumber(0)
    }
  })

  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
