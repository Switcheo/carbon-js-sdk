import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const result = await connectedSDK.admin.createOracle({
    id: "DXBT2",
    description: "Demex XBT Index",
    minTurnoutPercentage: 67,
    maxResultAge: 100,
    securityType: "SecuredByValidators",
    resultStrategy: "median",
    resolution: 1,
    spec: "{}",
  })
  console.log(result)
})().catch(console.error).finally(() => process.exit(0));
