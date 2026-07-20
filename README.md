### Carbon Typescript SDK ###

# Get Started

Development targets **Node.js 24 LTS**. The pinned version is recorded in `.nvmrc`.

```bash
# go to the root of your carbon-js-sdk directory
cd /path/to/carbon-js-sdk

# use the repository's Node and Yarn versions
nvm use
corepack enable
corepack prepare yarn@1.22.22 --activate

# install local dependencies
yarn install --frozen-lockfile

# build the SDK
yarn build
```

Development tools such as TypeScript and `ts-node` are installed locally; global installs are not required.

The optional `examples/node-ledger.ts` script requires `@ledgerhq/hw-transport-node-hid` plus the platform's HID/USB build libraries. It is intentionally excluded from the default dependency graph because its pinned `node-hid` release does not install cleanly on Node 24 when a compatible prebuild is unavailable.

`@keplr-wallet/types` declares Starknet as a non-optional peer for its full multi-chain type surface. Carbon JS SDK does not declare Starknet directly because its Keplr integration uses Cosmos-facing declarations only. Yarn 1 leaves that peer unresolved and reports a warning, while npm 7 and newer can auto-install a compatible Starknet release in a consumer project. Avoiding that transitive npm install requires a separate API-contract change that replaces the external Keplr types; adding Starknet directly here would only make unrelated application code an explicit SDK dependency.

## Temporary application security overrides

Two upstream owners still request vulnerable dependency ranges:

- `@ethersproject/providers@5.8.0` requests exact `ws@8.18.0`.
- `@metamask/utils@11.11.0` requests `uuid@^9.0.1`.

Carbon's development lock resolves these packages to audited patched targets, but package-manager root controls are not inherited when an application installs Carbon from npm. Applications must apply the same temporary overrides at their own root.

Yarn 1 applications:

```json
{
  "resolutions": {
    "**/@ethersproject/providers/ws": "8.21.0",
    "uuid": "11.1.1"
  }
}
```

npm applications:

```json
{
  "overrides": {
    "@ethersproject/providers": {
      "ws": "8.21.0"
    },
    "uuid": "11.1.1"
  }
}
```

After installation, inspect the complete trees with `yarn why uuid`, `yarn why ws`, or `npm ls uuid ws --all`. Verify that UUID versions below 11.1.1 and ws 8 versions below 8.21.0 are absent. Remove each override once its upstream owner declares a compatible patched dependency.

### Residual elliptic advisory

The remaining low-severity `elliptic` advisory ([GHSA-848j-6mx2-7j84](https://github.com/advisories/GHSA-848j-6mx2-7j84)) affects every available release through 6.6.1 and has no patched version. Carbon's only remaining owner is the explicitly deferred `@ethersproject/signing-key@5.8.0` path, which requests exact `elliptic@6.6.1`. A fail-closed dependency contract rejects any additional owner. Removing the final package requires the separately evaluated Ethers migration; a lockfile-only override or alert dismissal would not remediate the advisory, so the alert remains open until that structural change is approved.

## Package entrypoints and module formats

The package root remains compatible with CommonJS and native Node ESM:

```js
const Carbon = require("carbon-js-sdk");
const CarbonEsm = await import("carbon-js-sdk");
```

Prefer stable subpaths for focused imports so bundlers can exclude the generated registry and unrelated models:

```ts
import { bnOrZero } from "carbon-js-sdk/util/number";
import { MsgBlacklistAddress } from "carbon-js-sdk/codec/carbon/bank/tx";
import { createRegistry } from "carbon-js-sdk/codec/registry";
```

Stable families include `clients`, `constants`, `hydrogen`, `insights`, `modules`, `provider/*`, `util/*`, `wallet`, `websocket`, `codec/models`, `codec/message-metadata`, `codec/registry`, `codec/create-registry`, `codec/carbon/*`, and `codec/cosmos/*`. Historical `carbon-js-sdk/lib/*` imports remain exported in both extensionless and `.js` forms. They are compatibility paths, not new public API; migration to stable subpaths is recommended before a future major release announces any restriction.

CommonJS and ESM each preserve singleton and class identity within their selected module graph. Loading both formats in one process creates separate module graphs, so consumers must not compare registry or class identity across `require()` and `import()` results.

## Installing a prebuilt GitHub Release package

Each `v*` semantic-version tag whose version matches `package.json` produces a GitHub Release containing the built CommonJS and ESM outputs. Pin the exact release asset URL when a consumer needs the tagged SDK without running this repository's `prepare` build during installation:

```json
{
  "dependencies": {
    "carbon-js-sdk": "https://github.com/Switcheo/carbon-js-sdk/releases/download/v0.11.76/carbon-js-sdk-0.11.76.tgz"
  }
}
```

The release also includes `carbon-js-sdk-<version>.tgz.sha256`. Verify that checksum when updating the pinned URL. The asset is built from the exact tagged commit and is not published to npm. Version tags are immutable release identifiers: configure an active GitHub tag ruleset for `refs/tags/v*` that blocks updates and deletions, and never force-move or reuse a pushed version tag.

## Testing and CI

Run the deterministic Node test suite with:

```bash
yarn test
```

Pull requests targeting `staging` and pushes to `staging` run Node 24 CI. The workflow performs a frozen Yarn install, dependency integrity check, lint, tests, build, an npm package dry run, and an installed-tarball smoke test in an isolated consumer project.

## To Run Example script
```bash
# run connect SDK example
npx ts-node examples/connect_sdk
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
