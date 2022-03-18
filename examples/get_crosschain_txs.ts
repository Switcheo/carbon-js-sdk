import { CarbonSDK }  from "./_sdk";

;
(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });

  // Hydrogen transfer payload query
  // query 5 crosschain transfers
  const result = await sdk.hydrogen.getTransfers({
    limit: 5,
  })
  console.log("crosschain transfers", result);

  // query 5 crosschain transfers with nested chain txs
  const detailedResults = await sdk.hydrogen.getDetailedTransfers({
    limit: 5,
  })
  console.log("detailed crosschain transfers", detailedResults);

})().catch(console.error).finally(() => process.exit(0));
