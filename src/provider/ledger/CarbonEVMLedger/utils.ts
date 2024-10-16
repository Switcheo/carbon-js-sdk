import { FetchUtils } from "@carbon-sdk/util";
import { decode, encode } from "@ethersproject/rlp";
import { log } from "@ledgerhq/logs";
import BigNumber from "bignumber.js";

export type SupportedRegistries = "ens";

export type DomainDescriptor = {
  registry: SupportedRegistries;
  domain: string;
  address: string;
  type: "forward" | "reverse";
};

export type LedgerEthTransactionResolution = {
  // device serialized data that contains ERC20 data (hex format)
  erc20Tokens: Array<string>;
  // device serialized data that contains external plugin data (hex format)
  externalPlugin: Array<{ payload: string; signature: string }>;
  // device serialized data that contains plugin data (hex format)
  plugin: Array<string>;
  // device serialized data that contain trusted names data (hex format)
  domains: DomainDescriptor[];
};

declare enum CoinType {
  ATOM = 118
}

export type Registry = {
  name: SupportedRegistries;
  resolvers: {
    forward: string;
    reverse: string;
  };
  signatures: {
    forward: string;
    reverse: string;
  };
  patterns: {
    forward: RegExp;
    reverse: RegExp;
  };
  coinTypes: CoinType[];
};

const REGISTRIES: Registry[] = [
  {
    name: "ens",
    resolvers: {
      forward: "https://explorers.api.live.ledger.com/blockchain/v4/eth/ens/resolve/{name}",
      reverse:
        "https://explorers.api.live.ledger.com/blockchain/v4/eth/ens/reverse-resolve/{address}",
    },
    signatures: {
      forward: "https://nft.api.live.ledger.com/v1/names/ens/forward/{name}?challenge={challenge}",
      reverse:
        "https://nft.api.live.ledger.com/v1/names/ens/reverse/{address}?challenge={challenge}",
    },
    patterns: {
      forward: new RegExp("\\.eth$"),
      reverse: new RegExp("^0x[0-9a-fA-F]{40}$"),
    },
    coinTypes: [CoinType.ATOM],
  },
];

/**
 * Method is voluntarly made async so it can be replaced by a backend call once implemented
 */
export const getRegistries = async (): Promise<Registry[]> => REGISTRIES;

/**
 * Get an APDU to sign a domain resolution on the nano
 *
 * @param {string} domain
 * @param {SupportedRegistries} registryName
 * @param {string} challenge
 * @returns {Promise<AddressResolutionResponse[]>}
 */
export const signDomainResolution = async (
  domain: string,
  registryName: SupportedRegistries,
  challenge: string,
): Promise<string | null> => {
  if (!validateDomain(domain)) {
    throw new Error(
      `Domains with more than 255 caracters or with unicode are not supported on the nano. Domain: ${domain}`,
    );
  }
  const registries = await getRegistries();
  const registry = registries.find(r => r.name === registryName);
  if (!registry) return null;

  const url = registry.signatures.forward
    .replace("{name}", domain)
    .replace("{challenge}", challenge);

  return FetchUtils.fetch(url)
    .then(({ data }) => data.payload)
    .catch(error => {
      /* istanbul ignore next: don't test logs */
      if (error.status !== 404) {
        log("domain-service", "failed to get APDU for a domain", {
          domain,
          error,
        });
      }
      return null;
    });
};

/**
 * Get an APDU to sign an address resolve resolution on the nano
 *
 * @param {string} address
 * @param {SupportedRegistries} registryName
 * @param {string} challenge
 * @returns {Promise<AddressResolutionResponse[]>}
 */
export const signAddressResolution = async (
  address: string,
  registryName: SupportedRegistries,
  challenge: string,
): Promise<string | null> => {
  const registries = await getRegistries();
  const registry = registries.find(r => r.name === registryName);
  if (!registry) return null;

  const url = registry.signatures.reverse
    .replace("{address}", address)
    .replace("{challenge}", challenge);

  return FetchUtils.fetch(url)
    .then(({ data }) => data.payload)
    .catch(error => {
      /* istanbul ignore next: don't test logs */
      if (error.status !== 404) {
        log("domain-service", "failed to get APDU for an address", {
          address,
          error,
        });
      }
      return null;
    });
};

/**
 * Helper to know in advance if a domain is compatible with the nano
 *
 * @param domain string representing the domain
 * @returns {Boolean}
 */
const validateDomain = (domain: string | undefined): boolean => {
  if (typeof domain !== "string") {
    return false;
  }

  const lengthIsValid = domain.length > 0 && Number(domain.length) < 30;
  const containsOnlyValidChars = new RegExp("^[a-zA-Z0-9\\-\\_\\.]+$").test(domain);

  return lengthIsValid && containsOnlyValidChars;
};

export const decodeTxInfo = (rawTx: Buffer) => {
  const VALID_TYPES = [1, 2];
  const txType = VALID_TYPES.includes(rawTx[0]) ? rawTx[0] : null;
  const rlpData = txType === null ? rawTx : rawTx.slice(1);
  const rlpTx = decode(rlpData).map(hex => Buffer.from(hex.slice(2), "hex"));
  let chainIdTruncated = 0;
  const rlpDecoded = decode(rlpData);

  let decodedTx;
  if (txType === 2) {
    // EIP1559
    decodedTx = {
      data: rlpDecoded[7],
      to: rlpDecoded[5],
      chainId: rlpTx[0],
    };
  } else if (txType === 1) {
    // EIP2930
    decodedTx = {
      data: rlpDecoded[6],
      to: rlpDecoded[4],
      chainId: rlpTx[0],
    };
  } else {
    // Legacy tx
    decodedTx = {
      data: rlpDecoded[5],
      to: rlpDecoded[3],
      // Default to 1 for non EIP 155 txs
      chainId: rlpTx.length > 6 ? rlpTx[6] : Buffer.from("01", "hex"),
    };
  }

  const chainIdSrc = decodedTx.chainId;
  let chainId = new BigNumber(0);
  if (chainIdSrc) {
    // Using BigNumber because chainID could be any uint256.
    chainId = new BigNumber(chainIdSrc.toString("hex"), 16);
    const chainIdTruncatedBuf = Buffer.alloc(4);
    if (chainIdSrc.length > 4) {
      chainIdSrc.copy(chainIdTruncatedBuf);
    } else {
      chainIdSrc.copy(chainIdTruncatedBuf, 4 - chainIdSrc.length);
    }
    chainIdTruncated = chainIdTruncatedBuf.readUInt32BE(0);
  }

  let vrsOffset = 0;
  if (txType === null && rlpTx.length > 6) {
    const rlpVrs = Buffer.from(encode(rlpTx.slice(-3)).slice(2), "hex");

    vrsOffset = rawTx.length - (rlpVrs.length - 1);

    // First byte > 0xf7 means the length of the list length doesn't fit in a single byte.
    if (rlpVrs[0] > 0xf7) {
      // Increment vrsOffset to account for that extra byte.
      vrsOffset++;

      // Compute size of the list length.
      const sizeOfListLen = rlpVrs[0] - 0xf7;

      // Increase rlpOffset by the size of the list length.
      vrsOffset += sizeOfListLen - 1;
    }
  }

  return {
    decodedTx,
    txType,
    chainId,
    chainIdTruncated,
    vrsOffset,
  };
};

export const mergeResolutions = (
  resolutionsArray: Partial<LedgerEthTransactionResolution>[],
): LedgerEthTransactionResolution => {
  const mergedResolutions: LedgerEthTransactionResolution = {
    erc20Tokens: [],
    externalPlugin: [],
    plugin: [],
    domains: [],
  };

  for (const resolutions of resolutionsArray) {
    for (const key in resolutions) {
      mergedResolutions[key].push(...resolutions[key]);
    }
  }

  return mergedResolutions;
};

export function splitPath(path: string): number[] {
  const result: number[] = [];
  const components = path.split("/");
  components.forEach(element => {
    let number = parseInt(element, 10);
    if (isNaN(number)) {
      return; // FIXME shouldn't it throws instead?
    }
    if (element.length > 1 && element[element.length - 1] === "'") {
      number += 0x80000000;
    }
    result.push(number);
  });
  return result;
}
