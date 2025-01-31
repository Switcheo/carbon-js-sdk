import { ethers } from "ethers";

export const DEFAULT_PUBLIC_KEY_MESSAGE = `By signing this message, I declare that I am the owner of this wallet and that I have read and agreed to the Terms & Conditions (T&Cs) of using Demex found here: https://guide.dem.exchange/technical/terms-and-conditions.\nI further confirm that I do not reside in the Restricted Locations listed in Section 2 of the T&Cs, or any other region where using Demex may not be permitted.`;

export const recoverPublicKey = (message: string, signature: string): string => {
  const uncompressedPublicKey = ethers.utils.recoverPublicKey(ethers.utils.hashMessage(message), signature);
  return ethers.utils.computePublicKey(uncompressedPublicKey, true).split("0x")[1];
};