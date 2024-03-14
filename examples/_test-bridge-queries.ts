import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const bridgeStateAll = await sdk.query.bridge.BridgeStateAll({})
  console.log('bridge state all', bridgeStateAll.bridgeStates)
})().catch(console.error).finally(() => process.exit(0));

