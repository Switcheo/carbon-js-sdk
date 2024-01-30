import { QueryClientImpl as ADLQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/adl/query";
import { QueryClientImpl as BookQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/book/query";
import { QueryClientImpl as BrokerQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/broker/query";
import { QueryClientImpl as CDPQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/cdp/query";
import { QueryClientImpl as CoinQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/coin/query";
import { QueryClientImpl as AuthQueryClient } from "@carbon-sdk/codec/cosmos/auth/v1beta1/query";
import { QueryClientImpl as BankQueryClient } from "@carbon-sdk/codec/cosmos/bank/v1beta1/query";
import { QueryClientImpl as NativeBankQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/bank/query";
import { ServiceClientImpl as CosmosTmClient } from "@carbon-sdk/codec/cosmos/base/tendermint/v1beta1/query";
import { QueryClientImpl as DistributionQueryClient } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/query";
import { QueryClientImpl as EvidenceQueryClient } from "@carbon-sdk/codec/cosmos/evidence/v1beta1/query";
import { QueryClientImpl as GovQueryClient } from "@carbon-sdk/codec/cosmos/gov/v1/query";
import { QueryClientImpl as GroupQueryClient } from "@carbon-sdk/codec/cosmos/group/v1/query";
import { QueryClientImpl as MintQueryClient } from "@carbon-sdk/codec/cosmos/mint/v1beta1/query";
import { QueryClientImpl as ParamsQueryClient } from "@carbon-sdk/codec/cosmos/params/v1beta1/query";
import { QueryClientImpl as SlashingQueryClient } from "@carbon-sdk/codec/cosmos/slashing/v1beta1/query";
import { QueryClientImpl as StakingQueryClient } from "@carbon-sdk/codec/cosmos/staking/v1beta1/query";
import { QueryClientImpl as UpgradeQueryClient } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/query";
import { QueryClientImpl as EthermintEVMQueryClient } from "@carbon-sdk/codec/ethermint/evm/v1/query";
import { QueryClientImpl as EvmMergeQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/evmmerge/query";
import { QueryClientImpl as EvmBankQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/evmbank/query";
import { QueryClientImpl as EthermintFeeMarketQueryClient } from "@carbon-sdk/codec/ethermint/feemarket/v1/query";
import { QueryClientImpl as FeeQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/fee/query";
import { QueryClientImpl as HeadersyncQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/headersync/query";
import { QueryClientImpl as IBCInterchainControlQueryClient } from "@carbon-sdk/codec/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryClientImpl as IBCInterchainHostQueryClient } from "@carbon-sdk/codec/ibc/applications/interchain_accounts/host/v1/query";
import { QueryClientImpl as IBCTransferQueryClient } from "@carbon-sdk/codec/ibc/applications/transfer/v1/query";
import { QueryClientImpl as IBCClientQueryClient } from "@carbon-sdk/codec/ibc/core/client/v1/query";
import { QueryClientImpl as IBCConnectionQueryClient } from "@carbon-sdk/codec/ibc/core/connection/v1/query";
import { QueryClientImpl as IBCChannelQueryClient } from "@carbon-sdk/codec/ibc/core/channel/v1/query";
import { QueryClientImpl as InflationQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/inflation/query";
import { QueryClientImpl as InsuranceQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/insurance/query";
import { QueryClientImpl as LeverageQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/leverage/query";
import { QueryClientImpl as LiquidationQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/liquidation/query";
import { QueryClientImpl as LiquidityPoolQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/liquiditypool/query";
import { QueryClientImpl as MarketQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/market/query";
import { QueryClientImpl as MarketStatsQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/marketstats/query";
import { QueryClientImpl as MiscQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/misc/query";
import { QueryClientImpl as OracleQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/oracle/query";
import { QueryClientImpl as OrderQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/order/query";
import { QueryClientImpl as PositionQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/position/query";
import { QueryClientImpl as PricingQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/pricing/query";
import { QueryClientImpl as ProfileQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/profile/query";
import { QueryClientImpl as SubaccountQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/subaccount/query";
import { QueryClientImpl as AllianceClient } from "@carbon-sdk/codec/alliance/alliance/query";
import { QueryClientImpl as PerpspoolQueryClient } from "@carbon-sdk/codec/Switcheo/carbon/perpspool/query";
import { QueryClientImpl as ERC20QueryClient } from "@carbon-sdk/codec/Switcheo/carbon/erc20/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import BlockchainClient from "./BlockchainClient";
import GrpcQueryClient from "./GrpcQueryClient";

export interface IBCClientGroup {
  controller: IBCInterchainControlQueryClient;
  host: IBCInterchainHostQueryClient;
  transfer: IBCTransferQueryClient;

  client: IBCClientQueryClient;
  connection: IBCConnectionQueryClient;
  channel: IBCChannelQueryClient;
}

export interface EthermintClientGroup {
  evm: EthermintEVMQueryClient;
  feeMarket: EthermintFeeMarketQueryClient;
}

export interface CarbonQueryClientOpts {
  tmClient: Tendermint37Client;
  grpcClient?: GrpcQueryClient;
}

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
  marketstats: MarketStatsQueryClient;
  misc: MiscQueryClient;
  oracle: OracleQueryClient;
  order: OrderQueryClient;
  position: PositionQueryClient;
  pricing: PricingQueryClient;
  profile: ProfileQueryClient;
  subaccount: SubaccountQueryClient;
  headersync: HeadersyncQueryClient;
  perpspool: PerpspoolQueryClient;

  auth: AuthQueryClient;
  bank: BankQueryClient;
  nativeBank: NativeBankQueryClient;
  distribution: DistributionQueryClient;
  evidence: EvidenceQueryClient;
  gov: GovQueryClient;
  group: GroupQueryClient;
  mint: MintQueryClient;
  params: ParamsQueryClient;
  slashing: SlashingQueryClient;
  staking: StakingQueryClient;
  upgrade: UpgradeQueryClient;
  cosmosTm: CosmosTmClient;

  alliance: AllianceClient;

  chain: BlockchainClient;
  ibc: IBCClientGroup;
  ethermint: EthermintClientGroup;
  evmmerge: EvmMergeQueryClient;
  evmbank: EvmBankQueryClient;

  erc20: ERC20QueryClient;

  constructor(opts: CarbonQueryClientOpts) {
    const rpcClient = opts.grpcClient ?? createProtobufRpcClient(new QueryClient(opts.tmClient));

    this.chain = BlockchainClient.connectWithTm(opts.tmClient);

    this.adl = new ADLQueryClient(rpcClient);
    this.alliance = new AllianceClient(rpcClient);
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
    this.marketstats = new MarketStatsQueryClient(rpcClient);
    this.misc = new MiscQueryClient(rpcClient);
    this.oracle = new OracleQueryClient(rpcClient);
    this.order = new OrderQueryClient(rpcClient);
    this.position = new PositionQueryClient(rpcClient);
    this.pricing = new PricingQueryClient(rpcClient);
    this.profile = new ProfileQueryClient(rpcClient);
    this.subaccount = new SubaccountQueryClient(rpcClient);
    this.headersync = new HeadersyncQueryClient(rpcClient);
    this.evmmerge = new EvmMergeQueryClient(rpcClient);
    this.evmbank = new EvmBankQueryClient(rpcClient);
    this.perpspool = new PerpspoolQueryClient(rpcClient);

    this.auth = new AuthQueryClient(rpcClient);
    this.bank = new BankQueryClient(rpcClient);
    this.nativeBank = new NativeBankQueryClient(rpcClient);
    this.distribution = new DistributionQueryClient(rpcClient);
    this.evidence = new EvidenceQueryClient(rpcClient);
    this.group = new GroupQueryClient(rpcClient);
    this.gov = new GovQueryClient(rpcClient);
    this.mint = new MintQueryClient(rpcClient);
    this.params = new ParamsQueryClient(rpcClient);
    this.slashing = new SlashingQueryClient(rpcClient);
    this.staking = new StakingQueryClient(rpcClient);
    this.upgrade = new UpgradeQueryClient(rpcClient);
    this.cosmosTm = new CosmosTmClient(rpcClient);

    this.alliance = new AllianceClient(rpcClient);
    this.erc20 = new ERC20QueryClient(rpcClient)

    this.ibc = {
      controller: new IBCInterchainControlQueryClient(rpcClient),
      host: new IBCInterchainHostQueryClient(rpcClient),
      transfer: new IBCTransferQueryClient(rpcClient),
      client: new IBCClientQueryClient(rpcClient),
      connection: new IBCConnectionQueryClient(rpcClient),
      channel: new IBCChannelQueryClient(rpcClient),
    };

    this.ethermint = {
      evm: new EthermintEVMQueryClient(rpcClient),
      feeMarket: new EthermintFeeMarketQueryClient(rpcClient),
    }
  }
}

export default CarbonQueryClient;
