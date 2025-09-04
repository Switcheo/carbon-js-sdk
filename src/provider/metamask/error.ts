import { ProviderAgent } from "@carbon-sdk/constant";

const isNonceMismatchError = (error: Error) => {
  return error.message.includes("invalid nonce");
};

const isContractExecutionReverted = (error: Error) => {
  return error.message.includes("execution reverted");
};
export const parseEvmError = (error: Error, providerAgent?: ProviderAgent) => {
  if (providerAgent === ProviderAgent.MetamaskExtension && isNonceMismatchError(error))
    return new Error("Please clear the activity data in your wallet. On your MetaMask Settings > Advanced > Clear activity tab data.");
  if (isContractExecutionReverted(error)) return new Error("Contract execution reverted. Refer to the console for details.");
  return error;
};
