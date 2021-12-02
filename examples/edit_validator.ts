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
      rpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.admin.editValidator({
    description: {
      moniker: "hikaru",
      identity: "",
      website: "",
      securityContact: "",
      details: "",
    },
    minSelfDelegation: new BigNumber(2),
    validatorAddress: "tswthvaloper1phsut994s4me4pdc25vdln02g9rz7exzuvwww3",
    commissionRate: new BigNumber(0.2),
  });
  console.log("result", result);
})().catch(console.error).finally(() => process.exit(0));
