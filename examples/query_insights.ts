import { PositionViewOptions } from "../lib/insights";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);

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

  const userRewardsClaimHistoryResponse = await sdk.insights.UserRewardsClaimHistory({
    address: connectedSDK.wallet.bech32Address
  });
  console.log("userRewardsClaimHistory", userRewardsClaimHistoryResponse)

  // market api
  const marketsVolumeResponse = await sdk.insights.MarketsVolume();
  console.log("marketsVolume", marketsVolumeResponse);

  // node api
  const nodeResponse = await sdk.insights.Nodes();
  console.log("nodes", nodeResponse);

  // balance api
  const balanceSupplyResponse = await sdk.insights.BalanceSupply();
  console.log("balanceSupply", balanceSupplyResponse);

  // list competitions
  const competitionList = await sdk.insights.CompetitionList({});
  console.log("competitionList", competitionList);

  // trading volume leaderboard for legacy Demex Trading volume Competition (circa. 2021-2022)
  const volumeLeaderboard = await sdk.insights.VolumeCompetitionLeaderboard({
    competitionId: "comp1",
  });
  console.log("volumeLeaderboard", volumeLeaderboard);

  // pnl leaderboard (competition)
  const pnlLeaderboard = await sdk.insights.PNLCompetitionLeaderboard({
    competitionId: "comp1",
  });
  console.log("pnlLeaderboard", pnlLeaderboard);

  // trading volume ranking for Perps Trading Competition on Demex (14 Nov 2023 - 28 Nov 2023)
  const perpTradingVolume = await sdk.insights.PerpsTradingCompetitionVolume({
    competitionId: "tradingcomp17",
  });
  console.log("perpTradingVolume", perpTradingVolume);

  // lottery leaderboard (competition)
  const lotteryLeaderboard = await sdk.insights.LotteryCompetitionLeaderboard({
    competitionId: "tradingcomp7",
  });
  console.log("lotteryLeaderboard", lotteryLeaderboard);

  // lottery leaderboard (competition)
  const leagueLeaderboard = await sdk.insights.LeagueCompetitionLeaderboard({
    competitionId: "tradingcomp8",
  });
  console.log("leagueLeaderboard", leagueLeaderboard);

  //Position Views
  const positionViews = await sdk.insights.PositionsView({ view: "risk" as PositionViewOptions }, {})
  console.log("PositionsView", positionViews)

  //Liquidation
  const liquidationAndADL = await sdk.insights.LiquidationAndADL({ limit: 10 })
  console.log("Liquidation and ADL", liquidationAndADL)

  //Liquidation Engine
  const liquidation = await sdk.insights.LiquidationEngine({ limit: 10 })
  console.log("Liquidation", liquidation)

  //AvgBlocktime
  const avgBlocktime = await sdk.insights.AvgBlockTime({ hours: 24 })
  console.log("Avg Blocktime", avgBlocktime)

  //Pool History
  const PoolHistory = await sdk.insights.PoolHistory({ poolId: 42 })
  console.log("PoolHistory", PoolHistory)

  //Funding History
  const fundingHistory = await sdk.insights.FundingHistoryAll({})
  console.log("fundingHistory", fundingHistory)

})().catch(console.error).finally(() => process.exit(0));