import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
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

  const assetsAll = await sdk.query.cdp.AssetsAll({});
  console.log("assetsAll: ", assetsAll.assetDataAll);

  const rateStrategyAll = await sdk.query.cdp.RateStrategiesAll({});
  console.log("rateStrategyAll: ", rateStrategyAll.rateStrategyParamsAll);

  const params = await sdk.query.cdp.Params({});
  console.log("params: ", params.params);

  const accountCollaterals = await sdk.query.cdp.AccountCollaterals({
    account: connectedSDK.wallet.bech32Address,
  });
  console.log("accountCollaterals: ", accountCollaterals.collaterals);

  const accountDebts = await sdk.query.cdp.AccountDebts({
    account: connectedSDK.wallet.bech32Address,
  });
  console.log("accountDebts: ", accountDebts.debts);

  const accountData = await sdk.query.cdp.AccountData({
    account: connectedSDK.wallet.bech32Address,
  });
  console.log("accountData: ", accountData);

  const borrows = await sdk.query.cdp.Borrows({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("borrows: ", borrows);

  const borrowsAll = await sdk.query.cdp.BorrowsAll({
  });
  console.log("borrowsAll: ", borrowsAll);

  const collaterals = await sdk.query.cdp.Collaterals({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("collaterals: ", collaterals);

  const collateralsAll = await sdk.query.cdp.CollateralsAll({
  });
  console.log("collateralsAll: ", collateralsAll);

  const accountStablecoin = await sdk.query.cdp.AccountStablecoin({
    account: connectedSDK.wallet.bech32Address,
  });
  console.log("accountStablecoin", accountStablecoin);

})().catch(console.error).finally(() => process.exit(0));
