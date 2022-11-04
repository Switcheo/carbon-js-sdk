import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
// @ts-ignore
import { CarbonSDK } from "./_sdk";
// @ts-ignore
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

  const address = "tswth1rzsmdqps0l2u690f5l24pjxyrjt4dlg66fr3c8"
  const denom = "usdc"
  const cdpDenom = "cdp/usdc"

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const accData = await sdk.cdp.getAccountData(address)
  console.log("\ngetAccountData", JSON.stringify(accData));

  const debt = await sdk.query.cdp.AccountDebt({ address: address, denom: denom})
  console.log("\nAccountDebt", JSON.stringify(debt))

  const assetParamsAll = await sdk.query.cdp.AssetAll({})
  console.log("\nAssetAll", JSON.stringify(assetParamsAll))

  const tokenDebts = await sdk.query.cdp.TokenDebtAll({})
  console.log("\nTokenDebtsAll", JSON.stringify(tokenDebts))

  const tokenDebt = await sdk.cdp.getTotalAccountTokenDebt(address, denom)
  console.log("\ngetTotalAccountTokenDebt", JSON.stringify(tokenDebt))

  const tokenDebtUSD = await sdk.cdp.getTotalAccountTokenDebtUsdVal(address, denom)
  console.log("\ngetTotalAccountTokenDebtUsdVal", JSON.stringify(tokenDebtUSD))

  const cim = await sdk.cdp.recalculateCIM("eth")
  console.log("\nrecalculateCIM", cim.toNumber())

  const stablecoinDebt = await sdk.query.cdp.StablecoinDebt({})
  console.log("\nStablecoinDebt", JSON.stringify(stablecoinDebt))

  const accountStablecoin = await sdk.query.cdp.AccountStablecoin({address: address})
  console.log("\nAccountStablecoin", JSON.stringify(accountStablecoin))

  const ratio = await sdk.cdp.getCdpToActualRatio(cdpDenom)
  console.log("\ngetCdpToActualRatio", JSON.stringify(ratio))

  const amt = new BigNumber("1000000")
  const cdpTokenValue = await sdk.cdp.getCdpTokenUsdVal(cdpDenom, amt)
  console.log("\ngetCdpTokenUsdVal", cdpTokenValue?.toNumber())

  const totalCollateral = await sdk.cdp.getModuleTotalCollateralUsdVal()
  console.log("\ngetModuleTotalCollateralUsdVal", totalCollateral?.toNumber())

  const totalDebt = await sdk.cdp.getModuleTotalDebtUsdVal()
  console.log("\ngetModuleTotalDebtUsdVal", totalDebt?.toNumber())

  const maxCollateralsForUnlock = await sdk.cdp.getMaxCollateralForUnlock(address, cdpDenom)
  console.log("\ngetMaxCollateralForUnlock", maxCollateralsForUnlock?.toNumber())

  const cdpTokenPrice = await sdk.cdp.getCdpTokenPrice(cdpDenom)
  console.log("\ngetCdpTokenPrice", cdpTokenPrice?.toNumber())



})().catch(console.error).finally(() => process.exit(0));
