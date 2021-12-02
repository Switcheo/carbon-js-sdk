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

  const result = await connectedSDK.admin.createValidator({
    description: {
      moniker: "satoshi",
      identity: "",
      website: "",
      securityContact: "",
      details: "",
    },
    minSelfDelegation: new BigNumber(1),
    delegatorAddress: connectedSDK.wallet.bech32Address,
    validatorAddress: "tswthvaloper1phsut994s4me4pdc25vdln02g9rz7exzuvwww3",
    commission: {
      rate: new BigNumber(0.2),
      maxRate: new BigNumber(0.2),
      maxChangeRate: new BigNumber(0.01),
    },
    value: {
      amount: new BigNumber(20000000000),
      denom: "swth",
    },
    pubkey: undefined,
  });
  console.log("result", result);
})().catch(console.error).finally(() => process.exit(0));
