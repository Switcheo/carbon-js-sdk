import { GetFeeQuoteResponse } from "@carbon-sdk/hydrogen/feeQuote";
import BaseModule from "./base";

export class FeeModule extends BaseModule {
  public async getDepositWithdrawalFees(denom: string): Promise<GetFeeQuoteResponse> {
    const feeInfo = (await this.sdkProvider.hydrogen.getFeeQuote({
      token_denom: denom,
    })) as GetFeeQuoteResponse;
    return feeInfo;
  }
}
