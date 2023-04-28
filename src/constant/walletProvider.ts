export enum ProviderAgent {
  Ledger = "ledger",
  KeplrExtension = "keplr-extension",
  Mnemonic = "mnemonic",
  LeapExtension = "leap-extension",
  MetamaskExtension = "metamask-extension",
  // For legacy metamask
  Metamask = "metamask"
}

export function isEvmWallet(providerAgent?: string) {
  return ProviderAgent.MetamaskExtension.toString() === providerAgent
}
