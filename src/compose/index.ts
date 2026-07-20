import { Registry } from "@cosmjs/proto-signing";
import type { GeneratedType } from "@cosmjs/proto-signing";
import type { ProtobufRpcClient } from "@cosmjs/stargate";
import type { ModuleProvider } from "@carbon-sdk/modules/base";

export type RegistryEntry = readonly [typeUrl: string, generatedType: GeneratedType];

export interface CarbonFeature<TQueries extends object, TModules extends object> {
  createQueries: (rpc: ProtobufRpcClient) => TQueries;
  createModules: (provider: ModuleProvider) => TModules;
  registryEntries: readonly RegistryEntry[];
}

type AnyFeature = CarbonFeature<object, object>;
type UnionToIntersection<T> = (T extends unknown ? (value: T) => void : never) extends
  (value: infer TIntersection) => void ? TIntersection : never;
type FeatureQueries<TFeature> = TFeature extends CarbonFeature<infer TQueries, object> ? TQueries : never;
type FeatureModules<TFeature> = TFeature extends CarbonFeature<object, infer TModules> ? TModules : never;

function mergeFeatureObjects(kind: "query" | "module", objects: readonly object[]): object {
  const composed: Record<PropertyKey, unknown> = {};
  for (const object of objects) {
    for (const key of Reflect.ownKeys(object)) {
      if (!Object.prototype.propertyIsEnumerable.call(object, key)) continue;
      if (Object.prototype.hasOwnProperty.call(composed, key)) {
        throw new Error(`Duplicate ${kind} key: ${String(key)}`);
      }
      Object.defineProperty(composed, key, {
        configurable: true,
        enumerable: true,
        value: Reflect.get(object, key),
        writable: true,
      });
    }
  }
  return composed;
}

export function composeQueries<const TFeatures extends readonly AnyFeature[]>(
  rpc: ProtobufRpcClient,
  features: TFeatures,
): UnionToIntersection<FeatureQueries<TFeatures[number]>> {
  return mergeFeatureObjects("query", features.map((feature) => feature.createQueries(rpc))) as
    UnionToIntersection<FeatureQueries<TFeatures[number]>>;
}

export function composeModules<const TFeatures extends readonly AnyFeature[]>(
  provider: ModuleProvider,
  features: TFeatures,
): UnionToIntersection<FeatureModules<TFeatures[number]>> {
  return mergeFeatureObjects("module", features.map((feature) => feature.createModules(provider))) as
    UnionToIntersection<FeatureModules<TFeatures[number]>>;
}

export function createFeatureRegistry(features: readonly AnyFeature[]): Registry {
  const registry = new Registry([]);
  const registeredTypeUrls = new Set<string>();
  for (const feature of features) {
    for (const [typeUrl, generatedType] of feature.registryEntries) {
      if (registeredTypeUrls.has(typeUrl)) {
        throw new Error(`Duplicate registry type URL: ${typeUrl}`);
      }
      registeredTypeUrls.add(typeUrl);
      registry.register(typeUrl, generatedType);
    }
  }
  return registry;
}