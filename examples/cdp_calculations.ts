import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  const account = "tswth13zw3p5902nu9p0nq7gvsvjcyruz9hdszgxqw4s"

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const accData = await sdk.cdp.getAccountData("tswth13zw3p5902nu9p0nq7gvsvjcyruz9hdszgxqw4s")
  console.log("\ngetAccountData", JSON.stringify(accData));

  const debt = await sdk.query.cdp.AccountDebt({ account: "tswth17ktnyhxuxe4s9a2u55gnt5qyalhksws7thnswq", denom: "eth"})
  console.log("\nAccountDebt", JSON.stringify(debt))

  const tokenDebts = await sdk.query.cdp.TokenDebtsAll({})
  console.log("\nTokenDebtsAll", JSON.stringify(tokenDebts))

  const tokenDebt = await sdk.cdp.getTotalAccountTokenDebt("tswth188xswz2hyu3shtypxfaz7zz97zuevk9k2cxtp9", "eth")
  console.log("\ngetTotalAccountTokenDebt", JSON.stringify(tokenDebt))

  const tokenDebtUSD = await sdk.cdp.getTotalAccountTokenDebtUsdVal("tswth188xswz2hyu3shtypxfaz7zz97zuevk9k2cxtp9", "eth")
  console.log("\ngetTotalAccountTokenDebtUsdVal", JSON.stringify(tokenDebtUSD))

  const cim = await sdk.cdp.recalculateCIM("eth")
  console.log("\nrecalculateCIM", cim.toNumber())

  const stablecoinDebt = await sdk.query.cdp.StablecoinDebt({})
  console.log("\nStablecoinDebt", JSON.stringify(stablecoinDebt))

  const accountStablecoin = await sdk.query.cdp.AccountStablecoin({account: account})
  console.log("\nAccountStablecoin", JSON.stringify(accountStablecoin))

  const accountCollateral = await sdk.query.cdp.AccountCollateral({account: "tswth188xswz2hyu3shtypxfaz7zz97zuevk9k2cxtp9", cdpDenom: "cdp/eth"})
  console.log("\nAccountCollateral", accountCollateral)

  const accountCollaterals = await sdk.query.cdp.AccountCollaterals({account: "tswth188xswz2hyu3shtypxfaz7zz97zuevk9k2cxtp9"})
  console.log("\nAccountCollaterals", accountCollaterals)

  const ratio = await sdk.cdp.getCdpToActualRatio("cdp/eth");
  console.log("\ngetCdpToActualRatio", JSON.stringify(ratio))

  const amt = new BigNumber("1000000")
  const cdpTokenValue = await sdk.cdp.getCdpTokenUsdVal("cdp/usdc", amt);
  console.log("\ngetCdpTokenUsdVal", cdpTokenValue?.toNumber())


})().catch(console.error).finally(() => process.exit(0));
