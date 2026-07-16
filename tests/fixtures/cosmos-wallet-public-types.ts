import type { AssetList, Chain, ChainInfo, Keplr, Key, Leap } from "../../lib";

const legacyChain: Chain = {
  chain_name: "carbon",
  status: "live",
  network_type: "mainnet",
  pretty_name: "Carbon",
  chain_id: "carbon-1",
  bech32_prefix: "swth",
  slip44: 118,
};

const legacyAssets: AssetList = {
  chain_name: "carbon",
  assets: [
    {
      denom_units: [
        { denom: "swth", exponent: 0 },
        { denom: "SWTH", exponent: 8 },
      ],
      base: "swth",
      name: "Carbon",
      display: "SWTH",
      symbol: "SWTH",
    },
  ],
};

type LegacyLeapShape = Pick<
  Leap,
  | "disconnect"
  | "enable"
  | "suggestToken"
  | "mode"
  | "getKey"
  | "getOfflineSigner"
  | "getOfflineSignerOnlyAmino"
  | "getOfflineSignerAuto"
  | "signAmino"
  | "signDirect"
  | "signArbitrary"
  | "getEnigmaPubKey"
  | "getEnigmaTxEncryptionKey"
  | "enigmaEncrypt"
  | "enigmaDecrypt"
  | "sendTx"
  | "experimentalSuggestChain"
>;

declare const legacyLeapShape: LegacyLeapShape;
const legacyLeap: Leap = legacyLeapShape;

const legacyKey: Key = {
  name: "Carbon account",
  algo: "secp256k1",
  pubKey: new Uint8Array(),
  address: new Uint8Array(),
  bech32Address: "swth1contract",
  isNanoLedger: false,
};

declare const keplr: Keplr;
declare const chainInfo: ChainInfo;

void [legacyChain, legacyAssets, legacyLeap, legacyKey, keplr, chainInfo];
