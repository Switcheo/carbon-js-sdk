import { PositionViewOptions } from "../lib/insights";
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

    const userGrowthResponse = await sdk.insights.UserGrowth();
    console.log("userGrowth", userGrowthResponse);

    const totalUsersResponse = await sdk.insights.TotalUsers();
    console.log("totalUsers", totalUsersResponse);

    // pool api
    const poolsResponse = await sdk.insights.Pools();
    console.log("pools", poolsResponse);

    const poolsVolumeResponse = await sdk.insights.PoolsVolume();
    console.log("poolsVolume", poolsVolumeResponse);

    const poolsLiquidityResponse = await sdk.insights.PoolsLiquidity();
    console.log("poolsLiquidity", poolsLiquidityResponse);

    // market api
    const marketsVolumeResponse = await sdk.insights.MarketsVolume();
    console.log("marketsVolume", marketsVolumeResponse);

    // node api
    const nodeResponse = await sdk.insights.Nodes();
    console.log("nodes", nodeResponse);

    // balance api
    const balanceSupplyResponse = await sdk.insights.BalanceSupply();
    console.log("balanceSupply", balanceSupplyResponse);

    // balance api
    const competitionLeaderboard = await sdk.insights.CompetitionLeaderboard({
      from: '1618282336',
      until: '1681354336',
      market: 'eth_z39'
    });
    console.log("competitionLeaderboard", competitionLeaderboard);

    //Position Views
    const positionViews = await sdk.insights.PositionsView({ view: "risk" as PositionViewOptions },{})
    console.log("PositionsView", positionViews)

    //Liquidation
    const liquidationAndADL = await sdk.insights.LiquidationAndADL({ limit: 10 })
    console.log("Liquidation and ADL", liquidationAndADL)

    //Liquidation Engine
    const liquidation = await sdk.insights.LiquidationEngine({ limit: 10})
    console.log("Liquidation", liquidation)

    //AvgBlocktime
    const avgBlocktime = await sdk.insights.AvgBlockTime({ hours: 24 })
    console.log("Avg Blocktime", avgBlocktime)

    //Pool History
    const PoolHistory = await sdk.insights.PoolHistory({ poolId: 42 })
    console.log("PoolHistory", PoolHistory)

    //Funding History
    const fundingHistory = await sdk.insights.FundingHistory({})
    console.log("fundingHistory", fundingHistory)

})().catch(console.error).finally(() => process.exit(0));