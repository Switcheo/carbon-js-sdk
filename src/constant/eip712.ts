export const LEGACY_DEFAULT_EIP712_TYPES = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'string' },
    { name: 'salt', type: 'string' },
  ],
  Tx: [
    { name: 'account_number', type: 'string' },
    { name: 'chain_id', type: 'string' },
    { name: 'fee', type: 'Fee' },
    { name: 'memo', type: 'string' },
    { name: 'msgs', type: 'Msg[]' },
    { name: 'sequence', type: 'string' },
  ],
  Fee: [
    { name: 'feePayer', type: 'string' },
    { name: 'amount', type: 'Coin[]' },
    { name: 'gas', type: 'string' },
  ],
  Coin: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
  Msg: [
    { name: 'type', type: 'string' },
    { name: 'value', type: 'MsgValue' },
  ],
};

export const EIP_712_DOMAIN_TYPES = {
  EIP712Domain: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'version',
      type: 'string',
    },
    {
      name: 'chainId',
      type: 'uint256',
    },
    {
      name: 'verifyingContract',
      type: 'string',
    },
    {
      name: 'salt',
      type: 'string',
    },
  ],
}

export const DEFAULT_EIP712_TYPES = {
  Coin: [
    {
      name: 'denom',
      type: 'string',
    },
    {
      name: 'amount',
      type: 'string',
    },
  ],
  ...EIP_712_DOMAIN_TYPES,
  Fee: [
    {
      name: 'amount',
      type: 'Coin[]',
    },
    {
      name: 'gas',
      type: 'string',
    },
  ],
  Tx: [
    {
      name: 'account_number',
      type: 'string',
    },
    {
      name: 'chain_id',
      type: 'string',
    },
    {
      name: 'fee',
      type: 'Fee',
    },
    {
      name: 'memo',
      type: 'string',
    },
    {
      name: 'sequence',
      type: 'string',
    },
  ],

}

// Note that the chainId field is delibrately omitted because it is dynamic
export const DEFAULT_CARBON_DOMAIN_FIELDS = {
  name: 'Carbon',
  version: '1.0.0',
  verifyingContract: '0x0000000000000000000000000000636f736D6F73',
  salt: '1',
}
