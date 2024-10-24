import { ethers } from 'ethers'

export const DEFAULT_PUBLIC_KEY_MESSAGE = `By signing, I confirm that I have read and agreed to the terms and conditions outlined here (https://guide.dem.exchange/technical/terms-and-conditions).\nAdditionally, I verify that I am not a citizen of any of the following countries: Afghanistan, Angola, Central African Republic, China (Mainland), Côte d'Ivoire, Crimea, Cuba, Democratic Republic of Congo, Ethiopia, Guinea-Bissau, Haiti, Iran, Kuwait, Lebanon, Liberia, Libya, Mali, North Korea, Rwanda, Sevastopol, Sierra Leone, Singapore, Somalia, South Africa, Sudan, South Sudan, Syria, Quebec (Canada), U.S, Yemen, Zimbabwe.`

export const recoverPublicKey = (message: string, signature: string): string => {
  const uncompressedPublicKey = ethers.utils.recoverPublicKey(ethers.utils.hashMessage(message), signature)
  return ethers.utils.computePublicKey(uncompressedPublicKey, true).split('0x')[1]
}
