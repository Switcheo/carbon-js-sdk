export interface GetFeeQuoteRequest {
  token_denom: string
}

export interface GetFeeQuoteResponse {
  id: number,
  token_denom: string,
  blockchain: string,
  create_wallet_fee: string,
  deposit_fee: string,
  withdrawal_fee: string,
  created_at: string,
  expires_at: string
}

export interface FeeQuote {
  id: number,
  token_denom: string,
  blockchain: string,
  create_wallet_fee: string,
  deposit_fee: string,
  withdrawal_fee: string,
  created_at: string,
  expires_at: string
}