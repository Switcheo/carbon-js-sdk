import * as BIP39 from "bip39";
import Long from "long";
import { CarbonSDK } from "./_sdk";
import { PageRequest } from "../lib/codec/cosmos/base/query/v1beta1/pagination";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected wallet:", connectedSDK.wallet.bech32Address);

  const assetsAll = await sdk.query.cdp.AssetAll({});
  console.log("assetsAll: ", assetsAll.assetParamsAll);

  const rateStrategyAll = await sdk.query.cdp.RateStrategyAll({});
  console.log("rateStrategyAll: ", rateStrategyAll.rateStrategyParamsAll);

  const params = await sdk.query.cdp.Params({});
  console.log("params: ", params.params);

  const accountCollaterals = await sdk.query.cdp.AccountCollateralAll({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("accountCollaterals: ", accountCollaterals.collaterals);

  const accountDebts = await sdk.query.cdp.AccountDebtAll({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("accountDebts: ", accountDebts.debts);

  const accountData = await sdk.query.cdp.AccountData({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("accountData: ", accountData);

  const accountStablecoin = await sdk.query.cdp.AccountStablecoin({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("accountStablecoin", accountStablecoin);

  const positionsAll = await sdk.query.cdp.PositionsAll({
    minHealthFactor: "",
    maxHealthFactor: "",
    pagination: PageRequest.fromPartial({
      limit: new Long(10),
    }),
  });
  console.log("positionsAll", positionsAll); // shift healthFactor by 18 decimals

})().catch(console.error).finally(() => process.exit(0));
