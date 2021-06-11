import { QueryClientImpl as ADLQueryClient } from "@carbon-sdk/codec/adl/query";
import { QueryClientImpl as BookQueryClient } from "@carbon-sdk/codec/book/query";
import { QueryClientImpl as BrokerQueryClient } from "@carbon-sdk/codec/broker/query";
import { QueryClientImpl as CoinQueryClient } from "@carbon-sdk/codec/coin/query";
import { QueryClientImpl as CDPQueryClient } from "@carbon-sdk/codec/cdp/query";
import { QueryClientImpl as FeeQueryClient } from "@carbon-sdk/codec/fee/query";
import { QueryClientImpl as InflationQueryClient } from "@carbon-sdk/codec/inflation/query";
import { QueryClientImpl as InsuranceQueryClient } from "@carbon-sdk/codec/insurance/query";
import { QueryClientImpl as LeverageQueryClient } from "@carbon-sdk/codec/leverage/query";
import { QueryClientImpl as LiquidationQueryClient } from "@carbon-sdk/codec/liquidation/query";
import { QueryClientImpl as LiquidityPoolQueryClient } from "@carbon-sdk/codec/liquiditypool/query";
import { QueryClientImpl as MarketQueryClient } from "@carbon-sdk/codec/market/query";
import { QueryClientImpl as OracleQueryClient } from "@carbon-sdk/codec/oracle/query";
import { QueryClientImpl as OrderQueryClient } from "@carbon-sdk/codec/order/query";
import { QueryClientImpl as PositionQueryClient } from "@carbon-sdk/codec/position/query";
import { QueryClientImpl as PricingQueryClient } from "@carbon-sdk/codec/pricing/query";
import { QueryClientImpl as ProfileQueryClient } from "@carbon-sdk/codec/profile/query";
import { QueryClientImpl as SubaccountQueryClient } from "@carbon-sdk/codec/subaccount/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

class CarbonQueryClient {
  adl: ADLQueryClient;
  book: BookQueryClient;
  broker: BrokerQueryClient;
  coin: CoinQueryClient;
  cdp: CDPQueryClient;
  fee: FeeQueryClient;
  inflation: InflationQueryClient;
  insurance: InsuranceQueryClient;
  leverage: LeverageQueryClient;
  liquidation: LiquidationQueryClient;
  liquiditypool: LiquidityPoolQueryClient;
  market: MarketQueryClient;
  oracle: OracleQueryClient;
  order: OrderQueryClient;
  position: PositionQueryClient;
  pricing: PricingQueryClient;
  profile: ProfileQueryClient;
  subaccount: SubaccountQueryClient;

  private baseClient: QueryClient;

  constructor(
    private readonly tmClient: Tendermint34Client
  ) {
    this.baseClient = new QueryClient(this.tmClient);
    const rpcClient = createProtobufRpcClient(this.baseClient);

    this.adl = new ADLQueryClient(rpcClient);
    this.book = new BookQueryClient(rpcClient);
    this.broker = new BrokerQueryClient(rpcClient);
    this.coin = new CoinQueryClient(rpcClient);
    this.cdp = new CDPQueryClient(rpcClient);
    this.fee = new FeeQueryClient(rpcClient);
    this.inflation = new InflationQueryClient(rpcClient);
    this.insurance = new InsuranceQueryClient(rpcClient);
    this.leverage = new LeverageQueryClient(rpcClient);
    this.liquidation = new LiquidationQueryClient(rpcClient);
    this.liquiditypool = new LiquidityPoolQueryClient(rpcClient);
    this.market = new MarketQueryClient(rpcClient);
    this.oracle = new OracleQueryClient(rpcClient);
    this.order = new OrderQueryClient(rpcClient);
    this.position = new PositionQueryClient(rpcClient);
    this.pricing = new PricingQueryClient(rpcClient);
    this.profile = new ProfileQueryClient(rpcClient);
    this.subaccount = new SubaccountQueryClient(rpcClient);
  }
}

export default CarbonQueryClient;
