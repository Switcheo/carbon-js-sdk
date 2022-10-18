export interface RecentTrade {
  block_created_at: string; // string representation of timestamp
  block_height: number;
  id: number;
  liquidation?: string;
  maker_address: string;
  maker_fee_amount: string; // string representation of number
  maker_fee_denom: string;
  maker_id: string;
  maker_side: string;
  market: string;
  price: string; // string representation of number
  quantity: string; // string representation of number
  taker_address: string;
  taker_fee_amount: string; // string representation of number
  taker_fee_denom: string;
  taker_id: string;
  taker_side: string;
}

export interface HistoryOrder {
  address: string;
  allocated_margin: string;
  avg_filled_price: string;
  available: string;
  block_created_at: string;
  block_height: number;
  filled: string;
  id: string;
  initiator: string;
  is_liquidation?: boolean;
  is_post_only?: boolean;
  is_reduce_only?: boolean;
  market: string;
  order_type: string;
  pool_id?: number;
  price: string;
  quantity: string;
  side: string;
  status: string;
  stop_price: string;
  time_in_force: string;
  trigger_type: string;
  triggered_block_height: number;
  referral_address?: string;
  referral_commission?: number;
  referral_kickback?: number;
}

// This is added to account for the updated data model
// Use this for order history websocket queries
export interface BaseHistoryOrder {
  allocated_margin_amount: string;
  allocated_margin_denom: string;
  last_updated_block_height: number;
  order: HistoryOrder;
  username?: string;
}

// order history ws event
export interface BaseHistoryOrderEvent extends BaseHistoryOrder {
  type?: string;
}

export interface Candlestick {
  time: string; // string representation of timestamp
  close: string;
  market: string;
  open: string;
  high: string;
  low: string;
  volume: string;
  quote_volume: string;
  resolution: number;
}

export interface AccountTrade {
  address: string;
  block_created_at: string;
  block_height: number;
  fee_amount: string;
  fee_denom: string;
  market: string;
  order_id: string;
  price: string;
  quantity: string;
  side: string;
  trade_id: number;
}

export interface Position {
  market: string;
  address: string;
  trade_id: string; // string representation of number
  side: string;
  opened_block_height: number;
  updated_block_height: number;
  closed_block_height?: number;
  realized_pnl: string; // string representation of number
  max_lots: string; // string representation of number
  total_fee_amount: string; // string representation of number
  avg_allocated_margin: string; // string representation of number
  avg_entry_price: string; // string representation of number
  avg_exit_price: string; // string representation of number
  allocated_margin: string; // string representation of number
  lots: string; // string representation of number
  opened_at: string; // string representation of timestamp
  closed_at?: string; // string representation of timestamp
}

// Note: premium_rate/last_funding_at/open_interest is optional until after v2.9.0 upgrade
// where these fields will be added permanently
export interface MarketStat {
  day_high: string;
  day_low: string;
  day_open: string;
  day_close: string;
  day_volume: string;
  day_quote_volume: string;
  index_price: string;
  mark_price: string;
  last_price: string;
  market: string;
  market_type: string;
  premium_rate: string;
  last_funding_at: string;
  open_interest: string;
}

export interface PriceLevel {
  price: string; // string representation of number
  quantity: string; // string representation of number
  market?: string;
  side?: string;
}

// price level ws event
export interface PriceLevelEvent extends PriceLevel {
  type?: string; // only for ws event
}

export interface Leverage {
  market?: string;
  leverage: string; // string representation of number
}

export interface Pool {
  pool: {
    creator: string;
    id: number;
    name: string;
    denom: string;
    denom_a: string;
    amount_a: string; // string representation of number
    weight_a: string;  // string representation of number
    denom_b: string;
    amount_b: string; // string representation of number
    weight_b: string; // string representation of number
    swap_fee: string; // string representation of number
    num_quotes: number;
    shares_amount: string; // string representation of number
    market: string;
  },
  rewards_weight: string // string representation of number
  total_commitment: string // string representation of number
}

export interface Commitment {
  denom: string;
  amount: string; // string representation of number
  start_time: string; // string representation of date isostring
  end_time: string; // string representation of date isostring
  duration?: number;
  is_locked: boolean;
  commitment_power: string; // string representation of number
  boost_factor: string; // string representation of number
}

// commitment ws event
export interface CommitmentEvent extends Commitment {
  Type?: string;
}

export interface CDPParams {
  interest_fee: string // string representation of number
  liquidation_fee: string // string representation of number
  stable_coin_interest_rate: string // string representation of number
}

export interface RateStrategy { // CDP
  name: string
  optimal_usage: string // string representation of number
  base_variable_borrow_rate: string // string representation of number
  variable_rate_slope_1: string // string representation of number
  variable_rate_slope_2: string // string representation of number
  base_stable_borrow_rate: string // string representation of number
  stable_rate_slope_1: string // string representation of number
  stable_rate_slope_2: string // string representation of number
  optimal_stable_to_total_debt_ratio: string // string representation of number
}

/**
 * @deprecated old websocket response struct for get_cdp_assets_all
 * use AssetParams instead
*/
export interface Asset { // CDP
  asset_params: {
    denom: string
    oracle_id: string
    rate_strategy_name: string
    loan_to_value: string // string representation of number
    liquidation_threshold: string // string representation of number
    liquidation_bonus: string // string representation of number
    supply_cap: string // string representation of number
    borrow_cap: string // string representation of number
  },
  asset_utilization: {
    denom: string
    total_borrowed: string
    total_amount: string
    utilizationRate: string
  },
}

export interface AssetParams { // CDP
  denom: string
  oracle_id: string
  rate_strategy_name: string
  repay_stablecoin_interest_debt: boolean
  loan_to_value: string // string representation of number
  liquidation_threshold: string // string representation of number
  liquidation_bonus: string // string representation of number
  supply_cap: string // string representation of number
  borrow_cap: string // string representation of number
}

export interface Collateral { // CDP
  cdp_denom: string
  denom: string
  collateral_amount: string // string representation of number 
}

export interface Debt { // CDP
  denom: string
  principal_debt: string // string representation of number
  initial_cumulative_interest_multiplier: string // string representation of number
}

export interface AccountData {
  total_collaterals_usd: string // string representation of number
	total_debts_usd: string // string representation of number
	available_borrows_usd: string // string representation of number
	curr_liquidation_threshold: string // string representation of number
	health_factor: string // string representation of number
}

/**
 * Response for get_cdp_total_borrows and get_cdp_borrows
 * Do not confuse with Debt
*/
export interface CDPBorrow {
  address: string
	amount: string // string representation of number
	denom: string
  type: string
}

/**
 * Response for get_cdp_total_collaterals and get_cdp_collaterals
 * Do not confuse with Collateral
*/
export interface CDPCollateral {
  address: string
  amount: string // string representation of number
  denom: string
}

export interface CDPDebtInfo {
  denom: string
  last_updated_time: string // string representation of timestamp
  total_principal: string // string representation of number
  cumulative_interest_multiplier: string // string representation of number
  initial_cumulative_interest_multiplier: string // string representation of number
  utilization_rate: string // string representation of number
}

export interface CDPStableCoinDebtInfo {
  denom: string
  last_updated_time: string // string representation of timestamp
  total_principal: string // string representation of number
  cumulative_interest_multiplier: string // string representation of number
  initial_cumulative_interest_multiplier: string // string representation of number
  utilization_rate: string // string representation of number
}

export interface CDPLiquidation {
  liquidation: string
  debtor: string
  collateral_denom: string
  collateral_amount_liquidated: string // string representation of number
  collateral_amount_liquidator: string // string representation of number
  collateral_amount_fee: string // string representation of number
  liquidation_price: string // string representation of number
  market_price: string // string representation of number
  discount: string // string representation of number
  debt_denom: string
  debt_amount: string // string representation of number
  block_height: number
  block_time: string // string representation of timestamp
}
