### Carbon Typescript SDK ###

# Get Started

Try out the [examples](./examples/). The project has to be built before you can start running the examples

```bash

# install ts-node
npm i -g ts-node

# build the SDK
yarn build

# run connect SDK example
ts-node examples/connect_sdk

```

## Initializing CarbonSDK

```typescript

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,

    // optionally provide a set of network configuration overrides
    // to overwrite default parameters for a selected network.
    config: {
      rpcURL: TRPC_ENDPOINT,
    },
  });

  // connect SDK with mnemonic
  const sdk1 = await sdk.connectWithMnemonic(mnemonics);

  // connect SDK with private key
  const sdk2 = await sdk.connectWithPrivateKey(privateKey);

  // connect SDK with custom signer (ideal for ledger/ext wallet implementation)
  // see `CarbonSigner` for more information
  const sdk3 = await sdk.connectWithSigner(signer, bech32Address);

```

# Updating protobuf codecs

Protobuf type definitions are generated automatically and should not be manually modified (i.e. every file in `src/codec` should not be manually edited).
Runs the scripts [update-proto.sh](./scripts/update-proto.sh) followed by [generate-registry.sh](./scripts/generate-registry.sh)

This assumes that a packaged `./proto-ts.tar.gz` is available in the project directory. Download it from Carbon chain repo if it is not available.

```bash
  yarn run sync-proto
```

# Contributing to Carbon SDK
{wip}
