import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const moduleCallResult = await connectedSDK.order.editOrders([{
    id: "1",
    price: new BigNumber(100), // raw
    quantity: new BigNumber(100), // raw
  }, {
    id: "2",
    price: new BigNumber(100), // raw
    quantity: new BigNumber(100), // raw
  }]);
  console.log("call from module", moduleCallResult);
})().catch(console.error).finally(() => process.exit(0));
