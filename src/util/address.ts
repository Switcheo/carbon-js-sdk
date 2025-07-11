import { Bech32AddrType, Network, NetworkConfigs } from "@carbon-sdk/constant";
import * as bech32 from "bech32";
import * as BIP32 from "bip32";
import * as BIP39 from "bip39";
import CryptoJS from "crypto-js";
import { ethers } from "ethers";
import * as secp256k1 from "secp256k1";
import * as wif from "wif";
import { stripHexPrefix } from "./generic";

const BIP44_PURPOSE = 44;
const ETH_COIN_TYPE = 0x0000003c;
const SWTH_COIN_TYPE = 118;

/**
 * Convenience function to coalesce a string/buffer into a buffer
 *
 * @param stringOrBuffer a string or buffer type
 * @param encoding BufferEncoding from Buffer
 * @param force option to return an empty buffer regardless of input
 */
export const stringOrBufferToBuffer = (
  stringOrBuffer?: string | Buffer,
  encoding: BufferEncoding = "hex",
  force: boolean = false
): Buffer | null => {
  if (typeof stringOrBuffer === "string") {
    return Buffer.from(stringOrBuffer, encoding);
  }

  if (stringOrBuffer instanceof Buffer) {
    return stringOrBuffer as Buffer;
  }

  // not a string nor buffer
  // e.g. null/undefined
  if (force) {
    return Buffer.alloc(0);
  }

  // if not forcing to return an empty buffer, return null
  return null;
};

export class BIP44Path {
  constructor(
    public purpose: number = BIP44_PURPOSE,
    public coinType: number = SWTH_COIN_TYPE,
    public account: number = 0,
    public change: number = 0,
    public index: number = 0
  ) {}

  static generateBIP44String(index: number = 0, change: number = 0, account: number = 0, coinType: number = 0, purpose: number = 0) {
    return `m/${purpose}'/${coinType}'/${account}'/${change}/${index}`;
  }

  update(
    index: number = this.index,
    change: number = this.change,
    account: number = this.account,
    coinType: number = this.coinType,
    purpose: number = this.purpose
  ): BIP44Path {
    this.index = index;
    this.change = change;
    this.account = account;
    this.coinType = coinType;
    this.purpose = purpose;

    return this;
  }

  toArray(): number[] {
    return [this.purpose, this.coinType, this.account, this.change, this.index];
  }

  generate(): string {
    return BIP44Path.generateBIP44String(this.index, this.change, this.account, this.coinType, this.purpose);
  }
}

export const randomMnemonic = () => {
  return BIP39.generateMnemonic();
};
export const wifEncodePrivateKey = (privateKey: string | Buffer, iter: number = 128) => {
  const privateKeyBuf = stringOrBufferToBuffer(privateKey)!;
  return wif.encode(iter, privateKeyBuf, true);
};

export interface AddressOptions {}

export interface AddressBuilder<T extends AddressOptions = AddressOptions> {
  /**
   * BIP44 coin type
   * used in `m/44'/${coinType}'/0'/0/0`
   */
  coinType(): number;

  /**
   * derives address
   *
   * @param publicKey accepts both encoded/compressed or unencoded/uncompressed public key
   */
  publicKeyToScriptHash(publicKey: string | Buffer): string;
  publicKeyToAddress(publicKey: string | Buffer, opts?: T): string;
  generateAddress(mnemonic: string, account?: number, opts?: T): string;

  mnemonicToPrivateKey(mnemonic: string, account?: number, opts?: T): Buffer;

  privateKeyToAddress(privateKey: string | Buffer, opts?: T): string;
  privateToPublicKey(privateKey: string | Buffer): Buffer;

  /**
   * Returns a 33-byte encoded/compressed public key, also known as the encoded public key
   *
   * @param unencodedPublicKey - 65-byte raw/unencoded public key
   */
  encodePublicKey(unencodedPublicKey: string | Buffer): Buffer;
}

export interface SWTHAddressOptions extends AddressOptions {
  network?: Network;
  bech32Prefix?: string;
  type?: Bech32AddrType;
}

type SWTHAddressType = AddressBuilder<SWTHAddressOptions> & {
  newMnemonic(): string;
  getBech32Prefix(net?: Network, bech32Prefix?: string, type?: Bech32AddrType): string;
  addrPrefix: { [index: string]: string };
  getAddressBytes(bech32Address: string, networkConfig: Network): Uint8Array;
  keyDerivationPath(index?: number, change?: number, account?: number): number[];
  encode(hash: string | Buffer, opts?: SWTHAddressOptions): string;
  getModuleAddress(moduleKey: string, network?: Network): string;
};

export const SWTHAddress: SWTHAddressType = {
  newMnemonic: () => {
    return randomMnemonic();
  },

  coinType: (): number => {
    return SWTH_COIN_TYPE;
  },

  keyDerivationPath: (index: number = 0, change: number = 0, account: number = 0): number[] => {
    const coinType = SWTHAddress.coinType();
    return new BIP44Path(BIP44_PURPOSE, coinType).update(index, change, account).toArray();
  },

  publicKeyToScriptHash: (publicKey: string | Buffer): string => {
    const pubKeyBuffer = stringOrBufferToBuffer(publicKey)!;
    const sha256Hash = ethers.utils.sha256(pubKeyBuffer);
    const ripemdHash = ethers.utils.ripemd160(sha256Hash);

    return stripHexPrefix(ripemdHash);
  },

  publicKeyToAddress: (publicKey: string | Buffer, opts?: SWTHAddressOptions): string => {
    const scriptHash = SWTHAddress.publicKeyToScriptHash(publicKey);
    const address = SWTHAddress.encode(scriptHash, opts);
    return address;
  },

  encodePublicKey: (): Buffer => {
    throw new Error("SWTH public keys do not compress");
  },

  mnemonicToPrivateKey: (mnemonic: string, account: number = 0): Buffer => {
    const coinType = SWTHAddress.coinType();
    const path = new BIP44Path(BIP44_PURPOSE, coinType).update(account).generate();
    const seed = BIP39.mnemonicToSeedSync(mnemonic);
    const masterKey = BIP32.fromSeed(seed);
    const hardenedDerivation = masterKey.derivePath(path);
    const privateKey = hardenedDerivation.privateKey;

    if (!privateKey) throw new Error("Private key derivation from mnemonic failed");

    return privateKey;
  },

  privateToPublicKey: (privateKey: string | Buffer): Buffer => {
    const privateKeyArr = new Uint8Array(stringOrBufferToBuffer(privateKey)!);
    const publicKeyArr = secp256k1.publicKeyCreate(privateKeyArr, true);
    const publicKey = Buffer.from(publicKeyArr);
    return publicKey;
  },

  privateKeyToAddress: (privateKey: string | Buffer, opts?: SWTHAddressOptions): string => {
    const publicKey = SWTHAddress.privateToPublicKey(privateKey);
    const address = SWTHAddress.publicKeyToAddress(publicKey, opts);

    return address;
  },

  encode: (hash: string | Buffer, opts?: SWTHAddressOptions): string => {
    const hashBuff = stringOrBufferToBuffer(hash, "hex")!;
    const words = bech32.toWords(hashBuff.slice(0, 20));
    const addressPrefix = SWTHAddress.getBech32Prefix(opts?.network, opts?.bech32Prefix, opts?.type);
    const address = bech32.encode(addressPrefix, words);
    return address;
  },

  generateAddress: (mnemonic: string, account: number = 0, opts?: SWTHAddressOptions) => {
    const privateKey = SWTHAddress.mnemonicToPrivateKey(mnemonic, account);
    const address = SWTHAddress.privateKeyToAddress(privateKey, opts);
    return address;
  },

  getBech32Prefix(net: Network = Network.MainNet, mainPrefix: string = NetworkConfigs[net].Bech32Prefix, type: Bech32AddrType = "main") {
    const addrPrefix = SWTHAddress.addrPrefix;
    switch (type) {
      case "main":
        // e.g. swth
        return mainPrefix;
      case "validator":
        // e.g. swthvaloper
        return mainPrefix + addrPrefix.validator + addrPrefix.operator;
      case "consensus":
        // e.g. swthvalconspub
        return mainPrefix + addrPrefix.validator + addrPrefix.consensus + addrPrefix.public;
      default:
        return mainPrefix;
    }
  },

  addrPrefix: {
    validator: "val",
    operator: "oper",
    consensus: "cons",
    public: "pub",
  },

  getAddressBytes: (bech32Address: string, net: Network): Uint8Array => {
    const prefix = SWTHAddress.getBech32Prefix(net, undefined, "main");
    const { prefix: b32Prefix, words } = bech32.decode(bech32Address);
    if (b32Prefix !== prefix) {
      throw new Error("Prefix doesn't match");
    }
    return new Uint8Array(bech32.fromWords(words));
  },

  getModuleAddress: (moduleKey: string, network: Network = Network.MainNet) => {
    const addressHash = CryptoJS.SHA256(moduleKey).toString(CryptoJS.enc.Hex);
    return SWTHAddress.encode(addressHash, { network });
  },
};

type ETHAddressType = AddressBuilder<AddressOptions> & {
  encode(hash: string | Buffer, opts?: SWTHAddressOptions): string;
  publicKeyToBech32Address(publicKey: string | Buffer, opts?: SWTHAddressOptions): string;
}

export const ETHAddress: ETHAddressType = {
  coinType: (): number => {
    return ETH_COIN_TYPE;
  },

  publicKeyToScriptHash: (publicKey: string | Buffer): string => {
    const encodedPublicKey = ETHAddress.encodePublicKey(publicKey);
    return ethers.utils.keccak256(encodedPublicKey);
  },

  publicKeyToAddress: (publicKey: string | Buffer): string => {
    const publicKeyBuff = stringOrBufferToBuffer(publicKey)!;
    return ethers.utils.computeAddress(publicKeyBuff);
  },

  publicKeyToBech32Address: (publicKey: string | Buffer, opts?: SWTHAddressOptions): string => {
    const hexAddress = ETHAddress.publicKeyToAddress(publicKey)
    return ETHAddress.encode(hexAddress.split('0x')[1], opts)
  },

  encodePublicKey: (unencodedPublicKey: string | Buffer): Buffer => {
    const unencodedPublicKeyBuff = stringOrBufferToBuffer(unencodedPublicKey)!;
    const publicKey = ethers.utils.computePublicKey(unencodedPublicKeyBuff, true);
    return Buffer.from(publicKey, "hex");
  },

  mnemonicToPrivateKey: (mnemonic: string, account: number = 0): Buffer => {
    const coinType = ETHAddress.coinType();
    const path = new BIP44Path(BIP44_PURPOSE, coinType).update(account).generate();
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    return Buffer.from(wallet.privateKey?.replace(/^0x/, ""), "hex");
  },

  privateToPublicKey: (privateKey: string | Buffer): Buffer => {
    const privateKeyBuff = stringOrBufferToBuffer(privateKey)!;
    return Buffer.from(ethers.utils.computePublicKey(privateKeyBuff).replace(/^0x/, ""), "hex");
  },

  privateKeyToAddress: (privateKey: string | Buffer): string => {
    const compressedPublicKey = ETHAddress.privateToPublicKey(privateKey);
    const address = ETHAddress.publicKeyToAddress(compressedPublicKey);
    return address;
  },

  generateAddress: (mnemonic: string, account: number = 0) => {
    const privateKey = ETHAddress.mnemonicToPrivateKey(mnemonic, account);
    return ETHAddress.privateKeyToAddress(privateKey);
  },
  encode: (hash: string | Buffer, opts?: SWTHAddressOptions): string => {
    const hashBuff = stringOrBufferToBuffer(hash, "hex")!;
    const words = bech32.toWords(hashBuff.slice(0, 20));
    const addressPrefix = SWTHAddress.getBech32Prefix(opts?.network, opts?.bech32Prefix, opts?.type);
    const address = bech32.encode(addressPrefix, words);
    return address;
  },
};
