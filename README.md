### Carbon Typescript SDK ###

# Get Started

Try out the [examples](./examples/). The project has to be built before you can start running the examples

```bash
# go to the root of your carbon-js-sdk directory
cd /path/to/carbon-js-sdk

# install ts-node, typescript
npm i -g ts-node typescript

# install local dependencies
yarn

# build the SDK
yarn build
```

## To Run Example script
```bash
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
      tmRpcUrl: TRPC_ENDPOINT,
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

To generate the tar ball on Carbon chain project:

Install `buf` if you have not:
```bash
  # https://docs.buf.build/installation
  brew tap bufbuild/buf
  brew install buf
```

Run script to generate codec:
```bash
  make gen-codecs
```

The tar file will be generated at `<Carbon Project>/gen/proto-ts.tar.gz`. You can copy that file to `<Carbon SDK Project>/proto-ts.tar.gz` and proceed with above `sync-proto` step.

Or run this in this project directory
```bash
# runs `cp ~/go/src/github.com/Switcheo/carbon/gen/proto-ts.tar.gz .`
yarn run cp-proto
```

Eventually the `proto-ts.tar.gz` will be packaged as a release file in `Carbon` repository. A script will be added automatically download the latest released codecs and update the SDK.

# Contributing to Carbon SDK
{wip}
