# Carbon SDK Tree-Shaking Implementation Plan

**Status:** Proposed

**Goal:** Allow consumers to import a small part of `carbon-js-sdk` without bundling unrelated SDK modules, providers, hardware-wallet transports, WebSocket code, or the complete generated codec registry.

**Architecture:** Preserve the existing CommonJS and declaration layout, add parallel ESM output, split pure generated models from registry construction, introduce measured public subpaths, migrate first-party consumers, and only then restrict resolution with conditional exports and audited side-effect metadata.

**Toolchain:** TypeScript, Yarn 1, Node 24, `tsc-alias`, packed npm consumers, Vite/Rollup, webpack, and the existing Node test runner.

**Scope:** Packaging, generated codec boundaries, public entrypoints, compatibility, and consumer migration.

**Primary consumers:** Browser bundlers such as Vite/Rollup and webpack, plus Node.js CommonJS and ESM users.

## Objective

The implementation must make narrow imports statically analyzable and measurably smaller while preserving existing package behavior during the migration.

The migration must preserve the current CommonJS package and public types until consumers have moved to stable subpath entrypoints. A restrictive `exports` map must not be introduced before existing deep imports are inventoried and migrated.

## Current evidence

The current package is not structured for effective tree shaking:

- `tsconfig.json` emits CommonJS only (`"module": "commonjs"`).
- `package.json` has `main` and `types`, but no ESM `module`, conditional `exports`, or `sideEffects` metadata.
- `src/index.ts` re-exports the SDK, modules, utilities, providers, wallets, WebSocket support, insights, hydrogen, and the `Models` namespace from one root.
- `src/codec/index.ts` is a 791,686-byte, 33,276-line generated runtime module. It imports a broad model graph, constructs a `Registry`, and performs hundreds of `registry.register(...)` calls at module evaluation time.
- A current Disco staging production build emits a dedicated Carbon chunk of 6,151,186 raw bytes and 1,036,437 gzip bytes.
- Disco currently has 387 source files importing the package root and 399 source files using `carbon-js-sdk/lib/*` deep imports. These sets overlap, but both demonstrate that compatibility cannot be handled as a theoretical concern.

These measurements are baselines, not promised final budgets. The benchmark work below must identify which bytes are actually removable for each import scenario.

## Non-goals

- Do not remove or rename existing root exports in the first release.
- Do not convert the package to ESM-only.
- Do not add a restrictive `exports` map while known consumers depend on undeclared `lib/*` paths.
- Do not set `sideEffects: false` before auditing generated registry initialization and every top-level global or registration effect.
- Do not manually edit generated codec files. Generator changes and generated output must land together.
- Do not combine an Ethers 6 migration, codec-runtime replacement, or API redesign with the packaging work.

## Design principles

1. **Measure before changing packaging.** Every phase needs packed-consumer bundle fixtures with inspectable metafiles.
2. **Preserve the current CommonJS layout.** Existing `main`, `types`, `require("carbon-js-sdk")`, and `carbon-js-sdk/lib/*` paths remain valid during migration.
3. **Add ESM alongside CommonJS.** Bundlers should receive statically analyzable ESM while Node CommonJS consumers continue receiving the current output.
4. **Make side effects explicit.** Pure model exports and registry construction must not share an entrypoint.
5. **Prefer stable public subpaths over internal file paths.** Consumers should migrate from `lib/*` to documented entrypoints before an exports map becomes restrictive.
6. **Use type-only imports in consumers.** Type imports must not create runtime edges to the root or codec registry.
7. **Fail closed in CI.** Bundle-size and forbidden-module assertions should fail when an entrypoint starts pulling an unrelated owner family.

## Target package shape

The first compatible layout should retain CommonJS under `lib/` and add ESM under a separate directory:

```text
lib/                         # Existing CommonJS JavaScript and declarations
esm/                         # New ESM JavaScript, same logical module layout
esm/package.json             # {"type":"module"} so Node parses emitted .js as ESM
package.json
```

Keeping the existing `lib/` paths avoids forcing a coordinated consumer migration merely to introduce ESM. A later major release may consolidate output directories after deep imports are gone.

Initial package metadata should be additive:

```jsonc
{
  "main": "./lib/index.js",
  "module": "./esm/index.js",
  "types": "./lib/index.d.ts"
}
```

The `module` field is a bundler hint; Node does not use it to select the ESM tree. Before conditional exports exist, Node ESM smoke tests must import the explicit packed `carbon-js-sdk/esm/index.js` path, whose nearest `esm/package.json` marks it as ESM. The ESM rewrite step must also add `.js` extensions to relative specifiers (for example, using `tsc-alias` full-path resolution) because Node ESM does not perform CommonJS-style extension lookup.

Do not add a restrictive `exports` map in this first step. Once stable subpaths exist and consumer deep imports have been migrated, add conditional exports deliberately:

```jsonc
{
  "exports": {
    ".": {
      "types": "./lib/index.d.ts",
      "import": "./esm/index.js",
      "require": "./lib/index.js"
    },
    "./util/number": {
      "types": "./lib/util/number.d.ts",
      "import": "./esm/util/number.js",
      "require": "./lib/util/number.js"
    }
  }
}
```

The complete map should be generated from an approved entrypoint manifest rather than maintained as a large hand-written list.

## Proposed stable entrypoints

Start with boundaries that already exist in source and are meaningful to consumers:

```text
carbon-js-sdk
carbon-js-sdk/clients
carbon-js-sdk/constants
carbon-js-sdk/hydrogen
carbon-js-sdk/insights
carbon-js-sdk/modules
carbon-js-sdk/provider
carbon-js-sdk/provider/keplr
carbon-js-sdk/provider/leap
carbon-js-sdk/provider/ledger
carbon-js-sdk/provider/metamask
carbon-js-sdk/provider/rainbow-kit
carbon-js-sdk/util
carbon-js-sdk/util/address
carbon-js-sdk/util/blockchain
carbon-js-sdk/util/number
carbon-js-sdk/util/type
carbon-js-sdk/wallet
carbon-js-sdk/websocket
carbon-js-sdk/codec/registry
carbon-js-sdk/codec/carbon/<module>
carbon-js-sdk/codec/cosmos/<module>
```

This list is a starting point. Phase 0 must derive the final list from actual consumer imports and remove aliases that would expose unstable internals.

## Codec and registry separation

The generated codec index is the largest structural blocker. It currently combines three responsibilities:

1. model exports,
2. message metadata/type maps,
3. construction and population of the signing registry.

Split generator output into explicit boundaries:

```text
codec/models/...             # Pure generated encode/decode modules
codec/model-namespaces.ts    # Pure namespace exports only
codec/message-metadata.ts    # Metadata only; no Registry construction
codec/create-registry.ts     # Function that builds and returns a Registry
codec/registry.ts            # Optional compatibility singleton
```

Required properties:

- Importing one model path must not evaluate or bundle the complete registry.
- Importing a utility, provider type, or client type must not reach any codec registry entrypoint.
- `createRegistry()` should make registry construction explicit for clients that need signing support.
- The current singleton `registry` can remain as a compatibility export, but only its entrypoint should pay the eager initialization cost.
- `Models` compatibility at the package root may remain initially, but its implementation must point to pure model namespaces rather than the registry module.
- Generator scripts must produce deterministic ordering and must have tests proving that regenerated output is clean.

## Side-effect policy

Do not declare the whole package side-effect-free until the audit is complete.

Create a script that classifies each authored and generated entrypoint as:

- pure,
- locally initializing an exported value,
- mutating a global or registering process-wide behavior,
- importing CSS/assets/polyfills,
- unknown and therefore retained.

The generated registry's `registry.register(...)` calls are observable initialization for that exported registry, but they should not force unrelated entrypoints to remain in a bundle. Prefer moving them behind `createRegistry()` before introducing package-level `sideEffects` metadata.

After the audit, use the narrowest correct declaration:

- `"sideEffects": false` only if all published modules are safe to drop when their exports are unused; or
- an explicit side-effect file list if a small number of modules must always be retained.

CI must include a behavior test proving that required provider, wallet, and registry initialization still occurs when their public entrypoints are imported.

## Phased implementation

### Phase 0 — Add a reproducible bundle benchmark

Create packed-consumer fixtures that install the tarball produced by `npm pack`. Test at least Vite/Rollup and webpack because their CommonJS and side-effect handling differs.

Fixtures:

1. one pure utility, such as `bnOrZero`;
2. one generated message codec;
3. one provider entrypoint;
4. one wallet/signer entrypoint;
5. `CarbonSDK`;
6. the complete registry;
7. the existing package root for compatibility.

For every fixture, record:

- raw, minified, and gzip bytes;
- included Carbon modules;
- included third-party owner families;
- bundler warnings;
- build and runtime smoke results.

Store machine-readable metafiles as CI artifacts, not committed generated noise. Commit only the fixture sources, expected forbidden-owner assertions, and size budgets.

Initial correctness assertions:

- the utility fixture excludes codecs, Ethers, Ledger transports, providers, and WebSocket code;
- a single-codec fixture excludes unrelated Carbon modules and the full registry;
- a provider fixture excludes providers it does not use;
- ESM and CommonJS fixtures return equivalent public values;
- importing a symbol from the root is within an agreed tolerance of importing its dedicated subpath once the root becomes tree-shakable.

Set numeric budgets only after recording the Phase 0 baselines. The first target should prove a substantial reduction for narrow imports—at least 80% relative to the current root-import baseline—without imposing an arbitrary budget on full `CarbonSDK` consumers.

### Phase 1 — Produce a dual CommonJS/ESM package

- Add separate TypeScript build configurations for CommonJS and ESM.
- Preserve `lib/` CommonJS output and declarations.
- Emit ESM into `esm/` with static `import`/`export` syntax.
- Emit `esm/package.json` with `{"type":"module"}` or use an equivalently unambiguous `.mjs` layout.
- Extend alias rewriting so ESM output has valid relative runtime specifiers with explicit `.js` extensions.
- Add the additive `module` field.
- Ensure `files` includes both output trees.
- Keep the package free of a restrictive exports map at this phase.

Validation matrix:

- Node `require()` against CommonJS;
- Node ESM `import` against the ESM entrypoint;
- TypeScript with `moduleResolution` values used by consumers, including `node`, `nodenext`, and `bundler`;
- Vite/Rollup and webpack production builds;
- all existing package smoke and behavioral tests.

### Phase 2 — Separate pure codecs from registry construction

- Update the registry generator rather than hand-editing generated output.
- Generate pure model namespaces separately from registry setup.
- Add `createRegistry()` and retain the existing singleton as a compatibility layer.
- Point lightweight model entrypoints at pure modules.
- Add forbidden-owner tests to prove narrow imports cannot reach the full registry.
- Regenerate and verify a clean Git diff in CI.

### Phase 3 — Publish stable subpath entrypoints

- Derive an approved entrypoint manifest from the real consumer inventory.
- Add source barrels only where they represent stable API boundaries.
- Generate matching CommonJS, ESM, and declaration outputs.
- Document import examples and support policy.
- Add packed-consumer tests for every public subpath.
- Validate package metadata with a package-lint tool and an independent TypeScript-resolution checker.

Do not expose every generated file as a permanent public contract. Generated codec subpaths should be grouped by protocol/module and versioned deliberately.

### Phase 4 — Migrate first-party consumers

For Disco and other first-party consumers:

- replace `carbon-js-sdk/lib/*` imports with stable public subpaths;
- replace broad root runtime imports with the narrowest entrypoint;
- convert type-only usage to `import type`;
- update source-dependency contracts so private deep paths cannot return;
- preserve consumer-owned dependencies instead of relying on Carbon hoisting;
- record before/after bundle metafiles and production chunk sizes;
- run complete CI, TypeScript, ESLint, and production builds.

The current Disco counts—387 root-import files and 399 deep-import files—should be tracked down to an explicit allowlist and ultimately to zero deep `lib/*` imports before deep paths are blocked.

### Phase 5 — Add conditional exports and side-effect metadata

Only after first-party migration and compatibility testing:

- add generated conditional exports for the package root and supported subpaths;
- decide whether legacy `lib/*` paths remain temporarily exported or require a major release to remove;
- add the audited `sideEffects` declaration;
- add CI tests that reject undeclared deep imports;
- publish a prerelease and test it in real applications before a stable release.

Because an exports map can make previously resolvable files inaccessible, treat a restrictive map as a breaking change unless compatibility is demonstrated for all supported paths.

## Test-first implementation PR sequence

Each item below is a separate PR and commit boundary. Do not proceed to the next package change until the current PR's RED contract has been observed, the GREEN gates pass, and a packed artifact has been exercised.

### PR 1 — Commit the bundle benchmark and ownership contracts

**Likely files:**

- Create `tests/bundles/package.json` with pinned Vite and webpack test tooling.
- Create `tests/bundles/fixtures/root-utility.ts`.
- Create `tests/bundles/fixtures/subpath-utility.ts`.
- Create `tests/bundles/fixtures/single-codec.ts`.
- Create `tests/bundles/fixtures/provider.ts`.
- Create `tests/bundles/fixtures/wallet.ts`.
- Create `tests/bundles/fixtures/carbon-sdk.ts`.
- Create `tests/bundles/fixtures/full-registry.ts`.
- Create `scripts/check-bundle-contracts.cjs` to install the current tarball, run both bundlers, parse metafiles/stats, and enforce forbidden owners.
- Create `tests/bundle-contracts.test.cjs` for deterministic fixture and assertion behavior.
- Modify `package.json` to add `test:bundles` and include it in dependency hygiene or CI.
- Modify `.github/workflows/node24.yml` to archive machine-readable bundle reports on failure.

**RED:** Add an assertion that `root-utility.ts` must exclude `src/codec/index`, Ledger transports, providers, Ethers, and WebSocket modules. Run `yarn test:bundles`; the current CommonJS package should fail the ownership and size assertions.

**GREEN:** This first PR records the baseline rather than weakening the assertions. Mark not-yet-supported assertions as explicit baseline observations, then add a separate future-target mode that still fails on the current package. Verify fixture determinism by running the pack-and-bundle command twice and comparing included module sets.

**Gate:** `yarn lint && yarn test && yarn build && yarn test:dependency-hygiene && yarn test:bundles`.

### PR 2 — Add parallel ESM output without restricting paths

**Likely files:**

- Keep `tsconfig.json` as the CommonJS/declaration build contract.
- Create `tsconfig.esm.json` extending the shared compiler settings and overriding `module`, `moduleResolution`, declaration emission, and `outDir` for `esm/`.
- Create `scripts/write-esm-package.cjs` (or a checked-in template copied by the build) to emit `esm/package.json` with `{"type":"module"}`.
- Modify `package.json` scripts so `build` removes stale output, emits `lib/`, emits `esm/`, writes the nested ESM package marker, and runs `tsc-alias` with full `.js` path resolution for the ESM tree.
- Add `"module": "./esm/index.js"` and include `esm/` in `files`.
- Extend `tests/package-smoke.test.cjs` for CommonJS behavior.
- Create `tests/package-esm-smoke.test.mjs` for ESM behavior.
- Create `tests/typescript-resolution.test.cjs` with packed fixtures for `node`, `nodenext`, and `bundler` resolution.

**RED:** Before adding the ESM build, make the ESM smoke test import the explicit packed `carbon-js-sdk/esm/index.js` entrypoint and assert parity with CommonJS. It must fail because no ESM artifact or nested ESM package marker exists.

**GREEN:** Emit ESM, add only additive metadata, and make CommonJS/ESM behavior and type-resolution fixtures pass. Do not add `exports` or `sideEffects` in this PR.

**Gate:** Existing lifecycle plus `npm pack` content inspection, Node `require()`, Node ESM import, TypeScript resolution fixtures, and the PR 1 bundle matrix.

### PR 3 — Split generated models, metadata, and registry construction

**Likely files:**

- Modify `scripts/generate-registry.ts` so it emits separate pure-model, message-metadata, registry-factory, and compatibility-singleton sections/files.
- Modify `scripts/generate-registry.sh` to name and regenerate each output deterministically.
- Generate `src/codec/model-namespaces.ts` for pure namespace exports.
- Generate `src/codec/message-metadata.ts` for `TxTypes` and EIP-712 metadata.
- Generate `src/codec/create-registry.ts` for explicit registry construction.
- Reduce `src/codec/index.ts` to documented compatibility exports rather than mixing every responsibility.
- Update direct imports of `registry`, `TxTypes`, and model namespaces to the correct new boundary.
- Create `tests/generated-registry-boundaries.test.cjs`.
- Create `tests/generated-code-determinism.test.cjs` or an equivalent CI script that regenerates and requires a clean Git diff.

**RED:** Add source-graph assertions that importing a pure model or metadata module must not reach `@cosmjs/proto-signing`, `new Registry()`, or `registry.register(...)`. They must fail against the current generated index.

**GREEN:** Change the generator, regenerate all outputs, and make the boundary tests pass. Preserve `registry`, `TxTypes`, `EIP712Types`, `Carbon`, `IBC`, and `PolyNetwork` compatibility exports at their supported existing locations.

**Gate:** Run generation twice, require no second-run diff, then run all SDK, bundle, packed-consumer, signing, and Disco tests.

### PR 4 — Publish stable subpath entrypoints

**Likely files:**

- Create `scripts/package-entrypoints.cjs` as the single reviewed manifest of supported entrypoints.
- Create or adjust source barrels under `src/clients/`, `src/constant/`, `src/hydrogen/`, `src/insights/`, `src/modules/`, `src/provider/`, `src/util/`, `src/wallet/`, and `src/websocket/` only where required by the manifest.
- Add generated codec entrypoint mappings by Carbon/Cosmos module without exposing every internal generated file.
- Create `tests/public-entrypoints.test.cjs` to resolve every entrypoint from the packed package in CommonJS, ESM, and TypeScript fixtures.
- Add documented import examples to `README.md`.

**RED:** Add packed tests for the proposed public paths before generating/building them. The missing paths must fail resolution.

**GREEN:** Build the approved paths in both output formats and make every packed fixture pass. Keep legacy `lib/*` imports working because no restrictive exports map exists yet.

**Gate:** Every public entrypoint resolves from an installed tarball and meets its forbidden-owner and size contract.

### PR 5 — Migrate Disco and other first-party consumers

**Likely Disco files:**

- Modify the 387 root-import files and 399 deep-import files in bounded batches, starting with type-only and utility imports.
- Create or update `scripts/ci/sdk-import-boundaries.test.js` to reject new `carbon-js-sdk/lib/*` imports and broad root imports outside a temporary allowlist.
- Update `scripts/ci/cosmjs-sdk-family.test.js` so app-owned and Carbon-owned dependencies are validated separately.
- Update the Carbon pin and generated lockfile through Yarn, never by hand.

**RED:** Tighten the import-boundary test for one migration batch and observe the current files fail.

**GREEN:** Replace those imports with stable subpaths or `import type`, reduce the allowlist, and run Disco CI, TypeScript, ESLint, and the staging production build. Record the Carbon chunk's raw/gzip size and module owners after every batch.

**Gate:** Reach zero undocumented `carbon-js-sdk/lib/*` paths before restricting package exports. Any temporary root-import allowance must identify why a narrower entrypoint is not yet possible.

### PR 6 — Add conditional exports and audited side-effect metadata

**Likely files:**

- Modify `scripts/package-entrypoints.cjs` to generate the conditional export map.
- Modify `package.json` with generated `exports` and the audited `sideEffects` value/list.
- Create `tests/package-exports.test.cjs` to compare generated metadata with the manifest and reject private paths.
- Create `tests/side-effects-contract.test.cjs` to verify all retained initialization paths.
- Expand `tests/typescript-resolution.test.cjs` and bundle fixtures to resolve only through published metadata.

**RED:** Add tests requiring the conditional root/subpath mappings and rejecting one private deep path. They must fail before metadata is added.

**GREEN:** Generate the export map, add the narrowest correct side-effect declaration, and publish a prerelease. Test the prerelease in Disco and at least one smaller independent consumer before stable release.

**Gate:** CommonJS, ESM, all TypeScript resolution modes, Vite/Rollup, webpack, side-effect behavior, package lint, signatures, audit, and consumer production builds all pass from the packed prerelease.

## CI and release gates

Every implementation PR should run:

- frozen Yarn install and integrity check;
- lint, complete tests, and both package builds;
- deterministic generated-code check;
- `npm pack` contents inspection;
- CommonJS and ESM package smoke tests;
- TypeScript resolution fixtures;
- Vite/Rollup and webpack bundle fixtures;
- bundle budgets and forbidden-owner assertions;
- production dependency audit and signature verification;
- packed Carbon validation in Disco.

A release is not ready if a small import succeeds only through source aliases, hoisted dependencies, unpublished files, or a bundler-specific workaround.

## Compatibility and rollout strategy

1. Ship benchmark fixtures first so later claims are measurable.
2. Ship additive dual output without restricting existing paths.
3. Ship pure codec/registry boundaries and stable subpaths.
4. Migrate first-party consumers and publish bundle comparisons.
5. Add conditional exports and side-effect metadata in a prerelease.
6. Remove compatibility deep paths only in a major release or after proving they are not part of the supported ecosystem.

Each phase should be a focused PR with an independently reversible package change. Do not combine all phases into one release.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| ESM/CJS dual-package state diverges | Build both from the same source commit; run behavior parity fixtures. |
| Loading both formats creates duplicate singleton state | Add a mixed `require()`/`import()` fixture for registry and SDK singletons; document that consumers should not mix formats in one process. |
| `sideEffects` drops required initialization | Split explicit factories first; audit and test each side-effectful entrypoint. |
| `exports` breaks existing deep imports | Defer restriction, inventory consumers, publish stable replacements, use a prerelease. |
| Namespace exports retain entire model graphs | Provide per-module codec entrypoints and keep registry construction separate. |
| Type-only imports become runtime imports | Require `import type` in consumer migration and inspect bundler metafiles. |
| Generated output changes are non-deterministic | Update generators and fail CI when regeneration changes tracked files. |
| Bundles improve in one tool but regress in another | Maintain Vite/Rollup and webpack fixtures with explicit budgets. |
| CommonJS users regress | Keep `lib/` and `main`; test Node `require()` on every packed artifact. |

## Definition of done

Tree shaking is considered available when all of the following are true:

- the published package contains compatible CommonJS and ESM outputs;
- supported public subpaths resolve in Node, TypeScript, Vite/Rollup, and webpack;
- a narrow utility import excludes codec registry, wallet transports, providers, Ethers, and WebSocket code;
- a single-codec import excludes unrelated modules and the complete registry;
- root named imports tree-shake to within the approved tolerance of equivalent subpath imports;
- packed-consumer bundle budgets are enforced in CI;
- Disco and another representative consumer build and pass runtime smoke tests using the packed SDK;
- first-party consumers no longer rely on private `lib/*` paths, or every remaining path is explicitly documented as a temporary compatibility contract;
- package metadata has passed prerelease validation without breaking CommonJS or TypeScript consumers;
- before/after bundle evidence is attached to the implementation PRs and release notes.
