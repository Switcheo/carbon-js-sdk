import { CarbonCustomError, ErrorType } from "./tx";

export async function signTransactionWrapper(signTxTask: () => Promise<any>): Promise<any> {
  try {
    return await signTxTask();
  } catch (err) {
    throw new CarbonCustomError((err as Error).message, ErrorType.SIGNATURE_REJECTION);
  }
}
