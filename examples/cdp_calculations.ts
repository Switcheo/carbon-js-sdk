import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
// @ts-ignore
import { CarbonSDK } from "./_sdk";
// @ts-ignore
import "./_setup";
import {QueryCdpPositionsRequest} from "../lib/codec";
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

  const address = "tswth17tek8m2y6n0d7xczvvednq76v789ewds6adcc2"
  const denom = "usdc"
  const cdpDenom = `cdp/${denom}`

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const accData = await sdk.cdp.getAccountData(address)
  console.log("\ngetAccountData", JSON.stringify(accData));

  const accCollateral = await sdk.query.cdp.AccountCollateral({address: address, cdpDenom: cdpDenom});
  console.log("\nAccountCollateral", JSON.stringify(accCollateral));

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

  const positionsAll = await sdk.query.cdp.PositionsAll({
    maxHealthFactor: "999999999999999999999",
    minHealthFactor: "1",
    pagination: {
      key: new Uint8Array,
      countTotal: false,
      reverse: false,
      offset: new Long(0),
      limit: new Long(1),
    }
  })
  console.log("\nPositionsAll", JSON.stringify(positionsAll))

  const asset = await sdk.query.cdp.Asset({denom: denom})
  console.log(`\nAsset ${JSON.stringify(asset)}`)

  const getCollateralReceivableForLiquidation = await sdk.cdp.getCollateralReceivableForLiquidation(denom, new BigNumber(1000000), cdpDenom)
  console.log(`\ngetCollateralReceivableForLiquidation ${getCollateralReceivableForLiquidation?.toNumber()}`)

})().catch(console.error).finally(() => process.exit(0));
