import { CarbonSDK, KeplrAccount } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance();
  const chainInfo = await KeplrAccount.getChainInfo(sdk);

  console.log(JSON.stringify(chainInfo));
})().catch(console.error).finally(() => process.exit(0));
