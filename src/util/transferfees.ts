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

export interface FeeInfo extends FeeResult {
  denom: string
}
