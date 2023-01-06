import { AminoTypesMap } from '../amino'; 
import { registry as TypesRegistry } from "@carbon-sdk/codec";
import { AminoTypes, GasPrice } from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
// import { GasPrice } from '@cosmjs/stargate';

export const getSigningCosmosClientOptions = (): {
  registry: Registry,
  aminoTypes: AminoTypes,
  gasPrice: GasPrice,
} => {
  const registry = TypesRegistry
  const aminoTypes = AminoTypesMap
  const gasPrice = GasPrice.fromString('0.025uosmo')

  return {
    registry,
    aminoTypes,
    gasPrice,
  }
};

