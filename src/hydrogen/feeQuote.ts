import dayjs from "dayjs";

export interface GetFeeQuoteRequest {
  token_denom: string;
}

export interface GetFeeQuoteResponse {
  id: number;
  token_denom: string;
  blockchain: string;
  create_wallet_fee: string;
  deposit_fee: string;
  withdrawal_fee: string;
  created_at: dayjs.Dayjs;
  expires_at: dayjs.Dayjs;
}

export interface FeeQuote {
  id: number;
  token_denom: string;
  blockchain: string;
  create_wallet_fee: string;
  deposit_fee: string;
  withdrawal_fee: string;
  created_at: dayjs.Dayjs;
  expires_at: dayjs.Dayjs;
}
