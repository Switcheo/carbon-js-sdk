export interface FeeAmount {
  fee: string
}

export interface FeeInfoDetails {
  [index: string]: FeeAmount
}

export interface FeeResult {
  prev_update_time: number
  details: FeeInfoDetails
}

export enum FeeResultType {
  CreateWallet = "createWallet",
  Deposit = "deposit",
  Withdrawal = "withdrawal",
}

export interface FeeInfo extends FeeResult {
  denom: string
}
