import dayjs from "dayjs";

export interface GetFeeQuoteRequest {
  token_denom: string;
}

export interface GetFeeQuoteRequestBody {
  fee_denoms?: string[];
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
  other_token_fees?: FeeDenomResponse[] | undefined
}

interface FeeDenomResponse {
  denom: string,
  withdrawal_fee: string,
  deposit_fee: string,
  create_wallet_fee: string
}
