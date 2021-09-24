export interface RecentTrade {
  block_created_at: string // string representation of timestamp
  block_height: number
  id: number
  maker_address: string
  maker_fee_amount: string // string representation of number
  maker_fee_denom: string
  maker_id: string
  maker_side: string
  market: string
  price: string // string representation of number
  quantity: string // string representation of number
  taker_address: string
  taker_fee_amount: string // string representation of number
  taker_fee_denom: string
  taker_id: string
  taker_side: string
}

export interface HistoryOrder {
  address: string;
  allocated_margin: string;
  available: string;
  block_created_at: string;
  block_height: number;
  filled: string;
  id: string;
  initiator: string;
  is_liquidation: boolean;
  is_post_only: boolean;
  is_reduce_only: boolean;
  market: string;
  order_id: string;
  order_status: string;
  order_type: string;
  price: string;
  quantity: string;
  side: string;
  stop_price: string;
  time_in_force: string;
  trigger_type: string;
  triggered_block_height: number;
  type: string;
  username: string;
}

// This is added to account for the updated data model
// Use this for order history websocket queries
export interface BaseHistoryOrder {
  allocated_margin_amount: string;
  allocated_margin_denom: string;
  order: BaseHistoryOrder;
}

export interface Candlestick {
  time: any
  close: string
  open: string
  high: string
  low: string
  volume: string
  quote_volume: string
}

export interface AccountTrade {
  address: string;
  base_precision: number;
  block_created_at: string;
  block_height: string;
  fee_amount: string;
  fee_denom: string;
  fee_precision: number;
  id: number;
  market: string;
  order_id: string;
  price: string;
  quantity: string;
  quote_precision: number;
  side: string;
}

export interface OpenPosition {
  address: string;
  allocated_margin: string;
  closed_block_height: string;
  closed_block_time: string;
  created_block_height: string;
  entry_price: string;
  lots: string;
  market: string;
  realized_pnl: string;
  type: string;
  updated_block_height: string;
  username: string;
}

export interface ClosedPosition {
  address: string;
  closed_block_height: string;
  closed_block_time: string;
  entry_price: string;
  lots: string;
  market: string;
  realized_pnl: string;
}

export interface MarketStat {
  day_high: string
  day_low: string
  day_open: string
  day_close: string
  day_volume: string
  day_quote_volume: string
  index_price: string
  mark_price: string
  last_price: string
  market: string
  market_type: string
}

export interface PriceLevel {
  price: string // string representation of number
  quantity: string // string representation of number
}

export interface Leverage {
  market: string
  leverage: string // string representation of number
  originator?: string
}
