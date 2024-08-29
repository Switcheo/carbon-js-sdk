import BigNumber from "bignumber.js";

export const BN_ONE = new BigNumber(1);
export const BN_ZERO = new BigNumber(0);
export const BN_10000 = new BigNumber(10000);

export const parseBN = (input?: string | BigNumber | number | null, defaultValue?: BigNumber) => {
  if (!input && input !== 0) return defaultValue;
  const result = BigNumber.isBigNumber(input) ? input : new BigNumber(input);
  if (result.isNaN()) return defaultValue;

  return result;
};

export const bnOrZero = (input?: string | BigNumber | number | null, defaultValue: BigNumber = BN_ZERO) => {
  return parseBN(input, defaultValue)!;
};

export const toHuman = (
  value?: null | BigNumber | string | number,
  decimals?: null | BigNumber | string | number
): BigNumber | undefined => {
  if (value === undefined || value === null) return undefined;

  const valueBN = bnOrZero(value);
  if (!decimals) return valueBN; // decimals = 0 or nullish

  const decimalsBN = bnOrZero(decimals);

  return valueBN.shiftedBy(decimalsBN.negated().toNumber());
};

export const toUnitless = (
  value?: null | BigNumber | string | number,
  decimals?: null | BigNumber | string | number
): BigNumber | undefined => {
  if (value === undefined || value === null) return undefined;

  const valueBN = bnOrZero(value);
  if (!decimals) return valueBN; // decimals = 0 or nullish

  const decimalsBN = bnOrZero(decimals);

  return valueBN.shiftedBy(decimalsBN.toNumber());
};

export const generateNonce = (): number => {
  return Math.floor(Math.random() * 1000000);
};
