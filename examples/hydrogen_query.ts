import { CarbonSDK }  from "./_sdk";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.MainNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  // Hydrogen transfer payload query
  // query 5 crosschain transfers
  const transferPayloadResponse = await sdk.hydrogen.TransferPayloads({
    limit: 5,
  })
  console.log("crosschain transfers", transferPayloadResponse);

})().catch(console.error).finally(() => process.exit(0));