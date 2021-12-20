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
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.query.staking.Validators({
    status: ""
  });
  console.log("validators", result);

  const validator = result.validators[0];
  const delegationResult = await connectedSDK.staking.delegateTokens({
    validatorAddress: validator.operatorAddress,
    amount: new BigNumber("100000000"),
  })
  console.log("delegationResult", delegationResult);
  
})().catch(console.error).finally(() => process.exit(0));
