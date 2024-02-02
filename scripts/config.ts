export const whitelistCosmosExports: { [name: string]: string } = {
  'Mint': 'cosmos/mint/v1beta1',
  'Auth': 'cosmos/auth/v1beta1',
  'Bank': 'cosmos/bank/v1beta1',
  'Distribution': 'cosmos/distribution/v1beta1',
  'Tx': 'cosmos/tx/v1beta1',
  'Vesting': 'cosmos/vesting/v1beta1',
  'Staking': 'cosmos/staking/v1beta1',
  'Params': 'cosmos/params/v1beta1',
  'Slashing': 'cosmos/slashing/v1beta1',
  'Gov': 'cosmos/gov/v1',
};

export const whitelistEthermintExports: { [name: string]: string } = {
  'Crypto': 'ethermint/crypto/v1/ethsecp256k1',
  'Evm': 'ethermint/evm/v1',
  'Feemarket': 'ethermint/feemarket/v1',
  'Types': 'ethermint/types/v1',
};

export const whitelistIbcExports: { [name: string]: string[] } = {
  'Controller': ['ibc/applications/interchain_accounts/controller/v1'],
  'Host': ['ibc/applications/interchain_accounts/host/v1'],
  'InterchainTypes': ['ibc/applications/interchain_accounts/v1'],
  'TranferV1': ['ibc/applications/transfer/v1'],
  'TransferV2': ['ibc/applications/transfer/v2'],
  'Channel': ['ibc/core/channel/v1'],
  'Client': ['ibc/core/client/v1'],
  'Commitment': ['ibc/core/commitment/v1'],
  'Connection': ['ibc/core/connection/v1'],
  'LocalHost': ['ibc/lightclients/localhost/v2'],
  'SolomachineV2': ['ibc/lightclients/solomachine/v2'],
  'SolomachineV3': ['ibc/lightclients/solomachine/v3'],
  'Tendermint': ['ibc/lightclients/tendermint/v1'],
};
