
import * as BIP39 from "bip39";
import dayjs from "dayjs";
import { randomMnemonic } from "../lib/util/address";
import { CarbonSDK } from "./_sdk";
import "./_setup";


(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.TestNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const randomMnemonics = randomMnemonic()

  const sdkInstance = await CarbonSDK.instanceWithMnemonic(randomMnemonics, { network: CarbonSDK.Network.TestNet })
  const grantee = sdkInstance?.wallet?.bech32Address ?? ''
  const expiry: Date = dayjs().add(60, "hours").toDate()
  const params = {
    grantee,
    expiry,
    existingGrantee: false,
  }

  const result = await connectedSDK.signless.grantSignlessPermission(params);
  console.log('xx', randomMnemonics, grantee, expiry)
  console.log(result)

  const queryParams = {
    grantee,
  }
  const queryResult = await connectedSDK.signless.queryGranteeDetails(queryParams);
  console.log(queryResult)
})().catch(console.error).finally(() => process.exit(0));
