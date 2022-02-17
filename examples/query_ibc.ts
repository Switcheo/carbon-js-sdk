import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
  });
  const denomTraces = await sdk.query.ibc.transfer.DenomTraces({})
  console.log("denomTraces", denomTraces);
  const transferParams = await sdk.query.ibc.transfer.Params({})
  console.log("transferParams", transferParams);
  const hostParams = await sdk.query.ibc.host.Params({})
  console.log("hostParams", hostParams);
  const controllerParams = await sdk.query.ibc.controller.Params({})
  console.log("controllerParams", controllerParams);
})().catch(console.error).finally(() => process.exit(0));
