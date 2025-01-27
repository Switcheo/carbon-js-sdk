import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { SimpleMap } from "./type";

export const DEFAULT_PUBLIC_KEY_MESSAGE = `By signing this message, I declare that I am the owner of this wallet and that I have read and agreed to the Terms & Conditions (T&Cs) of using Demex found here: https://guide.dem.exchange/technical/terms-and-conditions.\nI further confirm that I do not reside in the Restricted Locations listed in Section 2 of the T&Cs, or any other region where using Demex may not be permitted.`;

export const recoverPublicKey = (message: string, signature: string): string => {
  const uncompressedPublicKey = ethers.utils.recoverPublicKey(ethers.utils.hashMessage(message), signature);
  return ethers.utils.computePublicKey(uncompressedPublicKey, true).split("0x")[1];
};

const commonAbiFunctions: SimpleMap<string> = {
  approve: "function approve(address, uint256)",
};

interface TxParams {
  // required params
  abiFunctionName: string;
  abiFunction?: string;
  txParams: unknown[];
  contractAddress: string;
  walletAddress: string;

  // optional params
  customGasPrice?: ethers.BigNumber;
  customGasLimit?: ethers.BigNumber;
  customNonce?: number;
  value?: BigNumber;
}

export const assembleTxRequest = (params: TxParams): ethers.providers.TransactionRequest => {
  const {
    abiFunctionName,
    abiFunction,
    txParams,
    contractAddress,
    walletAddress,

    customGasLimit: gasLimit,
    customGasPrice: gasPrice,
    customNonce: nonce,
    value,
  } = params;
  const txInterface = new ethers.utils.Interface([commonAbiFunctions[abiFunctionName] ?? abiFunction]);
  const txData = txInterface.encodeFunctionData(abiFunctionName, txParams);
  const request: ethers.providers.TransactionRequest = {
    to: contractAddress,
    from: walletAddress,
    data: ethers.utils.hexlify(txData),
    ...gasLimit && ({ gasLimit }),
    ...gasPrice && ({ gasPrice }),
    ...nonce && ({ nonce }),
    ...value && ({ value: value.toString() }),
  };
  return request;
};