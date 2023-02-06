import { AminoTypesMap } from "../amino";
import { registry as TypesRegistry } from "@carbon-sdk/codec";
import { AminoTypes, GasPrice, SigningStargateClientOptions } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
// import { GasPrice } from '@cosmjs/stargate';

export const getSigningCosmosClientOptions = (): SigningStargateClientOptions => {
  const registry: Registry = TypesRegistry as Registry;
  const aminoTypes: AminoTypes = AminoTypesMap as AminoTypes;
  const gasPrice = GasPrice.fromString("0.025uosmo");

  return {
    registry,
    aminoTypes,
    gasPrice,
  } as SigningStargateClientOptions;
};
