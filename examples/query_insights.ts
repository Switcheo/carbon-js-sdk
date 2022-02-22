import { CarbonSDK } from "./_sdk";

(async () => {
    const sdk = await CarbonSDK.instance({
      network: CarbonSDK.Network.DevNet,
      config: {
        tmRpcUrl: process.env.TRPC_ENDPOINT,
      },
    });
    
    // chain api
    const stakeResponse = await sdk.insights.Stake();
    console.log("stake", stakeResponse);

    const txResponse = await sdk.insights.Transaction();
    console.log("tx", txResponse);

    // user api
    const activeAccountsResponse = await sdk.insights.ActiveAccounts();
    console.log("activeAccounts", activeAccountsResponse);

    const UserGrowthResponse = await sdk.insights.UserGrowth();
    console.log("UserGrowth", UserGrowthResponse);

    const totalUsersResponse = await sdk.insights.TotalUsers();
    console.log("totalUsers", totalUsersResponse);

    // pool api
    const poolsResposne = await sdk.insights.Pools();
    console.log("pools", poolsResposne);

    const poolsVolumeResponse = await sdk.insights.PoolsVolume({
        poolIds: [1],
    });
    console.log("poolsVolume", poolsVolumeResponse);

    // node api
    const nodeResponse = await sdk.insights.Nodes();
    console.log("nodes", nodeResponse);

    // balance api
    const balanceSupplyResponse = await sdk.insights.BalanceSupply();
    console.log("balanceSupply", balanceSupplyResponse);

})().catch(console.error).finally(() => process.exit(0));