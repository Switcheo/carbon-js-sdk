// https://github.com/WalletConnect/EIP6963/blob/master/src/utils/constants.ts
export enum SupportedEip6963Provider {
  Brave = "Brave",
  Enkrypt = "Enkrypt",
  Zerion = "Zerion",
  TokenPocket = "TokenPocket",
  Iron = "Iron",
  Rainbow = "Rainbow",
  Phantom = "Phantom",
  OKX = "OKX",
  Spot = "Spot",
  XDEFI = "XDEFI",
  Talisman = "Talisman",
  Frontier = "Frontier",
  SafePal = "SafePal",
  Sequence = "Sequence",
  RabbyWallet = "Rabby Wallet",
  TrustWallet = "Trust Wallet",
  Coinbase = "Coinbase",
  MetaMask = "MetaMask",
  CryptoWallet = "Crypto.com Wallet",
  RoninWallet = "Ronin Wallet",
  MetaMaskInstitutional = "MetaMask Institutional",
  BitgetWallet = "Bitget Wallet",
  Fluvi = "Fluvi",
  SafeheronWallet = "Safeheron Wallet",
}

interface EIP6963ProviderInfo {
  walletId: string;
  uuid: string;
  name: string;
  icon: string;
}

interface EIP1193Provider {
  isStatus?: boolean;
  host?: string;
  path?: string;
  isMetaMask: boolean;
  chainId: string;
  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>
  on: (eventName: string, listener: (...args: unknown[]) => void) => any
  _state?: {
    isConnected?: boolean
  }
}

export interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo;
  provider: EIP1193Provider;
}

export type EIP6963AnnounceProviderEvent = {
  detail:{
    info: EIP6963ProviderInfo,
    provider: EIP1193Provider
  }
}
