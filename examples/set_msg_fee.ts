import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  // const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  const mnemonics = "student sell close mad beef exit gospel inform mom industry airport lounge";
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  // set gas cost for msg type
  const setGasCostResult = await connectedSDK.admin.setMsgGasCost({
    msgType: "test1",
    gasCost: new BigNumber(100),
  });
  console.log(setGasCostResult);

  // set min gas price
  const setMinGasPriceResult = await connectedSDK.admin.setMinGasPrice({
    denom: "test2",
    gasPrice: new BigNumber(1000),
  });
  console.log(setMinGasPriceResult);

  // test1 and test2 available
  console.log((await connectedSDK.query.fee.MsgGasCostAll({})).msgGasCosts);
  console.log((await connectedSDK.query.fee.MinGasPriceAll({})).minGasPrices);

  // remove gas cost for msg type
  const removeGasCostResult = await connectedSDK.admin.removeMsgGasCost({
    msgType: "test1",
  });
  console.log(removeGasCostResult);

  // remove min gas price
  const removeMinGasPriceResult = await connectedSDK.admin.removeMinGasPrice({
    denom: "test2",
  });
  console.log(removeMinGasPriceResult);

  // test1 and test2 removed
  console.log((await connectedSDK.query.fee.MsgGasCostAll({})).msgGasCosts);
  console.log((await connectedSDK.query.fee.MinGasPriceAll({})).minGasPrices);
})()
  .catch(console.error)
  .finally(() => process.exit(0));
