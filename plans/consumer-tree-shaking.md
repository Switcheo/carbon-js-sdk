# Carbon SDK Tree-Shaking Implementation Plan

**Status:** Proposed

**Goal:** Allow consumers to import a small part of `carbon-js-sdk` without bundling unrelated SDK modules, providers, hardware-wallet transports, WebSocket code, or the complete generated codec registry.

**Architecture:** Preserve the existing CommonJS and declaration layout, split pure generated models from registry construction, add parallel native ESM output, introduce measured public subpaths with compatibility-preserving exports, migrate first-party consumers, and then add audited side-effect metadata. Restrict legacy resolution only in a future major release.

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

After registry separation, add ESM without moving the existing CommonJS tree:

```text
lib/                         # Existing CommonJS JavaScript and declarations
esm/                         # New ESM JavaScript, same logical module layout
esm/package.json             # {"type":"module"} so Node parses emitted .js as ESM
package.json
```

Keeping `lib/` avoids forcing a coordinated consumer migration merely to introduce ESM. A later major release may consolidate output directories only after compatibility paths have been retired deliberately.

The first dual-output metadata change is additive:

```jsonc
{
  "main": "./lib/index.js",
  "module": "./esm/index.js",
  "types": "./lib/index.d.ts"
}
```

The `module` field is a bundler hint; Node does not use it to select ESM. Before conditional exports exist, a Node ESM smoke test must execute the explicit packed `carbon-js-sdk/esm/index.js` path, whose nearest `esm/package.json` marks it as ESM. The ESM output must contain explicit `.js` relative specifiers. Raw CommonJS `require()` calls must be replaced or isolated, and runtime JSON imports must be made native-ESM-safe before the ESM artifact ships.

Stable package subpaths cannot be created by `main` or `module`: `carbon-js-sdk/util/number` does not automatically resolve to `lib/util/number.js`. Therefore the stable-entrypoint PR must add conditional exports at the same time, but the first map must be compatibility-preserving rather than restrictive.

Generate that map from the packed-file and approved-entrypoint manifests. It must include:

- the package root with `types`, `import`, and `require` conditions;
- every new stable subpath;
- `./package.json` for existing package-inspection tests and consumers;
- every currently published `lib/*` JavaScript/declaration path;
- both extensionless and `.js` legacy specifier forms observed in the packed package and consumer corpus.

Also generate `typesVersions` mappings for stable and legacy subpaths so TypeScript consumers using legacy `moduleResolution: "node"` can find declarations without conditional-export support.

Example stable entries:

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
    },
    "./package.json": "./package.json"
  },
  "typesVersions": {
    "*": {
      "util/number": ["lib/util/number.d.ts"]
    }
  }
}
```

The real compatibility map must be generated, not represented by broad unverified wildcards or maintained by hand. No currently published path may become inaccessible in a non-breaking release. Restricting legacy `lib/*` paths is a separate major-release decision.

## Proposed stable entrypoints

Start with consumer-meaningful boundaries. Some are intentional public aliases rather than current source directory names and must be tested case-sensitively on Linux:

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

This list is a starting point. Phase 0 must derive the final list from actual consumer imports and remove aliases that would expose unstable internals. In particular, `constants` intentionally aliases the current `src/constant/` directory and `provider/rainbow-kit` intentionally normalizes the current `src/provider/rainbowKit/` casing; packed tests must prove those exact public spellings.

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
- The current singleton `registry` must remain available through the compatibility codec entrypoint.
- The root `Models` namespace must retain its exact existing shape, including `registry`, `TxTypes`, `EIP712Types`, `Carbon`, `IBC`, `PolyNetwork`, Cosmos namespaces, and convenience exports. Do not repoint `Models` to a narrower namespace in a compatibility release.
- Add a separately named pure-model entrypoint for tree-shakable consumers. Root ESM tree shaking should drop the unused legacy `Models` compatibility branch after side-effect isolation; it must not achieve size reduction by changing the public API.
- Generator inputs and outputs must be sorted deterministically, including shell `find` results, every `fs.readdirSync()` result in the five model generators, and generated per-directory `export.ts` files.

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

For every fixture, record raw/minified/gzip bytes, included Carbon modules, included third-party owner families, bundler warnings, and runtime smoke results. Store machine-readable reports as CI artifacts.

Use two explicit modes:

- `test:bundles:baseline` records and verifies the current deterministic module/size baseline and must pass in Phase 0;
- `test:bundles:targets` activates future ownership/size assertions phase by phase and must never be weakened merely to make current CommonJS pass.

Initial target assertions should prove that utility, single-codec, and provider fixtures exclude unrelated owner families. Set numeric budgets after recording baseline data; narrow imports should target at least an 80% reduction from the current root-import baseline without imposing an arbitrary budget on full `CarbonSDK` consumers.

### Phase 1 — Separate pure codecs from registry construction

Do this before dual output so CommonJS and ESM are not shipped with an avoidable mutable-registry coupling.

- Update the registry and model generators rather than hand-editing generated output.
- Generate pure model namespaces and metadata separately from registry setup.
- Add `createRegistry()` and retain the current singleton as a compatibility export.
- Preserve the exact root `Models` namespace shape.
- Add a separately named pure-model entrypoint.
- Sort shell discovery, all model-generator directory reads, and generated export files.
- Add forbidden-owner and deterministic-regeneration tests.

### Phase 2 — Produce a native dual CommonJS/ESM package

- Preserve `lib/` CommonJS output and declarations.
- Emit native ESM into `esm/` plus `esm/package.json` with `{"type":"module"}`.
- Rewrite emitted relative specifiers to explicit `.js` paths.
- Replace `src/provider/ledger/ledger.ts`'s raw `require("semver")` with an ESM/CJS-compatible static import.
- Replace runtime ABI JSON imports in `src/eth/abis/index.ts` with deterministic generated TypeScript constants, or use another strategy proven by direct Node ESM execution. Do not ship an ESM build that depends on unsupported JSON semantics.
- Add a source/output contract rejecting unapproved raw `require()` and unresolved extensionless ESM imports.
- Add the bundler-oriented `module` field and include `esm/` in packed files.
- Keep the package free of an exports map until Phase 3.

Validation must directly execute the explicit packed ESM artifact and assert its resolved URL, not infer ESM support from the `module` field. Add a mixed `require()`/`import()` fixture that documents and tests singleton behavior. If shared cross-format registry identity is required, solve it before release; otherwise document that consumers must not mix formats in one process.

### Phase 3 — Publish stable subpaths with compatibility exports

Stable subpaths and conditional exports land together because package metadata must map public names to `lib/` and `esm/`.

- Derive an approved entrypoint manifest from the real consumer inventory.
- Add only stable source barrels and documented aliases.
- Generate CommonJS, ESM, and declaration targets.
- Generate conditional exports for root, stable subpaths, `./package.json`, and every currently published legacy `lib/*` path in both extensionless and `.js` forms.
- Generate `typesVersions` for legacy TypeScript `moduleResolution: "node"`.
- Test exact casing on Linux.
- Validate package metadata and resolution from a packed install.

This phase must not block any existing published path. Restriction remains major-release-only.

### Phase 4 — Migrate first-party consumers

For Disco and other first-party consumers:

- replace `carbon-js-sdk/lib/*` imports with stable public subpaths;
- replace broad root runtime imports with the narrowest entrypoint;
- convert type-only usage to `import type`;
- update source-dependency contracts so private deep paths cannot return;
- preserve consumer-owned dependencies instead of relying on Carbon hoisting;
- record before/after bundle reports and production chunk sizes;
- run complete CI, TypeScript, ESLint, and production builds.

The current Disco counts—387 root-import files and 399 deep-import files—should be tracked to an explicit allowlist and ultimately to zero undocumented deep imports. This migration does not authorize breaking unknown external consumers in a minor release.

### Phase 5 — Add audited side-effect metadata

Only after registry isolation, native ESM validation, stable exports, and first-party migration:

- add the narrowest correct `sideEffects` value/list;
- add behavior tests for required provider, wallet, and registry initialization;
- activate final bundle ownership and size targets;
- publish a prerelease and test real applications before stable release.

Keep all compatibility exports in non-breaking releases. Rejecting or removing currently published `lib/*` paths belongs to a separately announced major-release PR with migration documentation and corpus-backed tests.

## Test-first implementation PR sequence

Each item below is a separate PR and commit boundary. Do not proceed until the current PR's RED contract has been observed, its cumulative GREEN gates pass, and a packed artifact has been exercised.

### PR 1 — Commit the bundle benchmark and ownership contracts

**Likely files:**

- Create `tests/bundles/package.json` with pinned Vite and webpack test tooling.
- Create fixtures under `tests/bundles/fixtures/` for root utility, future subpath utility, single codec, provider, wallet, `CarbonSDK`, and full registry imports.
- Create `scripts/check-bundle-contracts.cjs` to install the tarball, run both bundlers, parse reports, and enforce owner rules.
- Create `tests/bundle-contracts.test.cjs` for deterministic fixture behavior.
- Modify `package.json` with separate `test:bundles:baseline` and `test:bundles:targets` scripts.
- Modify `.github/workflows/node24.yml` to run the passing baseline mode and archive reports.

**RED:** First prove a future target assertion fails against current CommonJS—for example, a root utility import currently reaches the codec registry or unrelated owners.

**GREEN:** Commit a passing, deterministic baseline mode. Keep future target assertions in a separate mode and activate them one by one in the PR that implements each capability; do not gate PR 1 on assertions that are intentionally not yet satisfied.

**Gate:** Existing SDK lifecycle plus `test:bundles:baseline` run twice with identical included-module sets.

### PR 2 — Split generated models, metadata, and registry construction

**Likely files:**

- Modify `scripts/generate-registry.ts` and `scripts/generate-registry.sh`.
- Modify `scripts/generate-carbon-models.ts`, `scripts/generate-cosmos-models.ts`, `scripts/generate-ibc-models.ts`, `scripts/generate-polynetwork-models.ts`, and `scripts/generate-ethermint-models.ts` to sort directory reads.
- Sort `find` input in `scripts/generate-registry.sh` and deterministic per-directory `export.ts` generation.
- Generate `src/codec/model-namespaces.ts`, `src/codec/message-metadata.ts`, and `src/codec/create-registry.ts`.
- Keep `src/codec/index.ts` as a compatibility facade with the exact existing exported namespace shape.
- Create `tests/generated-registry-boundaries.test.cjs` and `tests/generated-code-determinism.test.cjs`.

**RED:** Add source-graph assertions that a pure model/metadata entrypoint must not reach `@cosmjs/proto-signing`, `new Registry()`, or `registry.register(...)`. Add an API-shape snapshot for the existing root `Models` namespace. The boundary test must fail against the current generated index.

**GREEN:** Change generators, regenerate, and make boundaries pass without removing any member of root `Models`. Run generation twice and require no second-run diff.

**Gate:** SDK lifecycle, signing behavior, API-shape snapshot, deterministic generation, bundle baseline, activated codec target, packed consumer, and Disco.

### PR 3 — Add native parallel ESM output

**Likely files:**

- Keep `tsconfig.json` as the CommonJS/declaration contract and create `tsconfig.esm.json`.
- Create `scripts/write-esm-package.cjs` to emit `esm/package.json` with `{"type":"module"}`.
- Modify build scripts to emit `lib/`, emit `esm/`, write the nested marker, and rewrite ESM relative imports to explicit `.js` paths.
- Modify `src/provider/ledger/ledger.ts` to remove raw `require("semver")`.
- Create a deterministic ABI generator such as `scripts/generate-abis.ts`, generate a TypeScript ABI module, and modify `src/eth/abis/index.ts` so native ESM does not rely on JSON imports without attributes.
- Create `tests/esm-output-contract.test.cjs` to reject unapproved `require()`, extensionless relative ESM imports, and unresolved runtime JSON edges.
- Extend `tests/package-smoke.test.cjs` to spawn a child process in the installed consumer and execute bare `require("carbon-js-sdk")`.
- Create `tests/package-esm-smoke.test.mjs` to execute `import("carbon-js-sdk/esm/index.js")` before exports exist and assert the resolved file URL is under `esm/`.
- Create a mixed-format registry/SDK fixture that documents whether CJS and ESM singleton instances are intentionally separate.
- Create `tests/typescript-resolution.test.cjs` for currently supported resolution modes.
- Modify `package.json` with `module`, ESM files, and build/test scripts—but no exports map yet.

**RED:** Explicit packed ESM execution, specifier validation, raw-`require` scanning, and ABI loading must fail against current output.

**GREEN:** Make direct Node ESM execution and bundler fixtures pass. If mixed-format shared identity is required, solve it; otherwise assert separate instances and document that one process must not mix package formats.

**Gate:** All prior gates plus CommonJS bare require, explicit native ESM execution, TypeScript resolution, Vite/Rollup, webpack, and activated ESM targets.

### PR 4 — Publish stable subpaths with non-restrictive compatibility exports

**Likely files:**

- Create `scripts/package-entrypoints.cjs` as the reviewed source of stable and legacy entrypoints.
- Add required barrels under `src/clients/`, `src/constant/`, `src/hydrogen/`, `src/insights/`, `src/modules/`, `src/provider/`, `src/util/`, `src/wallet/`, and `src/websocket/`.
- Generate conditional `exports` and `typesVersions` into `package.json`.
- Export root, stable subpaths, `./package.json`, and every file represented by the pre-change packed `lib/**/*` manifest.
- Generate and test both extensionless and `.js` legacy forms instead of relying on unverified wildcard behavior.
- Create `tests/public-entrypoints.test.cjs` and `tests/package-exports.test.cjs`.
- Update package smoke tests so child processes exercise bare `require("carbon-js-sdk")` and bare `import("carbon-js-sdk")` condition selection and assert the resolved file.
- Update metadata/owner tests, including `tests/elliptic-owner-boundary.test.cjs`, to inspect the installed tarball root directly or use exported `carbon-js-sdk/package.json` without bypassing condition-selection tests.
- Add documented imports and intentional aliases to `README.md`.

**RED:** Stable subpaths must fail before mappings exist. Add a corpus test that also fails if any previously published legacy path, either extensionless or `.js`, becomes inaccessible.

**GREEN:** Generate mappings and make stable, legacy, package-metadata, CommonJS, ESM, and TypeScript-`node` fixtures pass. Test `constants` versus `src/constant` and `provider/rainbow-kit` versus `src/provider/rainbowKit` on Linux.

**Gate:** Every approved and historical path resolves from an installed tarball in the applicable runtime/type modes; no pre-existing published path is blocked.

### PR 5 — Migrate Disco and other first-party consumers

**Likely Disco files:**

- Modify the 387 root-import files and 399 deep-import files in bounded batches, starting with type-only and utility imports.
- Create or update `scripts/ci/sdk-import-boundaries.test.js` to reject new `carbon-js-sdk/lib/*` imports and broad root imports outside a temporary allowlist.
- Update `scripts/ci/cosmjs-sdk-family.test.js` so app-owned and Carbon-owned dependencies are validated separately.
- Update the Carbon pin and generated lockfile through Yarn, never by hand.

**RED:** Tighten the boundary for one migration batch and observe current files fail.

**GREEN:** Replace imports with stable subpaths or `import type`, reduce the allowlist, and run Disco CI, TypeScript, ESLint, and staging production build. Record bundle owners and raw/gzip size after each batch.

**Gate:** Reach zero undocumented first-party `lib/*` imports. External compatibility mappings remain in the SDK until a major release.

### PR 6 — Add audited side-effect metadata and activate final targets

**Likely files:**

- Modify `package.json` with the audited `sideEffects` value/list without removing compatibility exports.
- Create `tests/side-effects-contract.test.cjs` for provider, wallet, registry, and generated initialization behavior.
- Expand bundle fixtures to activate final forbidden-owner and size targets.
- Keep `tests/package-exports.test.cjs` asserting that every historical `lib/*` compatibility path remains exported.

**RED:** Add behavior and bundle assertions that fail while registry or other top-level effects still force unrelated modules into narrow bundles.

**GREEN:** Add the narrowest correct side-effect declaration, preserve behavior, publish a prerelease, and validate Disco plus another smaller consumer.

**Gate:** CommonJS, ESM, all supported TypeScript modes, Vite/Rollup, webpack, side-effect behavior, package lint, signatures, audit, and consumer production builds pass from the packed prerelease.

A future major-release PR may remove legacy mappings only with migration documentation, explicit breakage tests, and ecosystem inventory. It is not part of the non-breaking six-PR rollout.

## CI and release gates

The matrix is cumulative by phase. Do not require outputs that an earlier benchmark-only PR has not created.

**Every PR:**

- frozen Yarn install and integrity check;
- lint, complete existing tests, and the current package build;
- `npm pack` contents inspection;
- dependency hygiene, production audit, and signature verification;
- PR 1's passing bundle-baseline mode.

**Add when introduced:**

| Starting PR | Additional mandatory gates |
| --- | --- |
| PR 2 | deterministic codec/model generation, exact `Models` API-shape compatibility, registry behavior, activated codec bundle target |
| PR 3 | CommonJS bare-require smoke, direct native-ESM execution, resolved-file assertions, raw-`require`/JSON/specifier contracts, mixed-format singleton contract, TypeScript resolution, Vite/Rollup, webpack |
| PR 4 | generated exports/typesVersions consistency, every historical and stable subpath in runtime/type modes, `./package.json`, Linux casing, bare CJS/ESM condition selection |
| PR 5 | packed Carbon validation in Disco, Disco CI/TypeScript/ESLint/production build, import-boundary allowlist, before/after bundle report |
| PR 6 | side-effect behavior, final owner/size budgets, prerelease validation in Disco and another consumer |

A release is not ready if an import succeeds only through source aliases, hoisted dependencies, unpublished files, a package-manager accident, or a bundler-specific workaround.

## Compatibility and rollout strategy

1. Ship deterministic benchmark fixtures.
2. Split pure models/metadata from registry construction while preserving the exact legacy `Models` API.
3. Ship additive native ESM output beside unchanged CommonJS.
4. Ship stable subpaths together with non-restrictive compatibility exports and `typesVersions`.
5. Migrate first-party consumers and publish bundle comparisons.
6. Add audited side-effect metadata and activate final budgets in a prerelease.
7. Remove legacy deep paths only in a separately announced major release.

Each phase should be a focused, independently reversible PR. Do not combine all phases into one release.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Native ESM contains extensionless imports, raw `require`, or unsupported JSON edges | Add output scans and direct Node execution; refactor `semver` loading and generate TypeScript ABI constants before shipping ESM. |
| ESM/CJS builds diverge behaviorally | Build from the same source commit and run value/behavior parity fixtures. |
| Loading both formats creates duplicate mutable singleton state | Split registry first; add a mixed-format test; either solve required shared identity or explicitly document separate instances and prohibit mixed use. |
| Root `Models` changes shape during registry separation | Snapshot the complete existing namespace and require all legacy members to remain in compatibility releases. |
| `sideEffects` drops required initialization | Split explicit factories first; audit and test each provider, wallet, registry, and generated initialization path. |
| An exports map blocks existing deep imports | Generate entries for every pre-change packed `lib/*` path, both extensionless and `.js`, plus `./package.json`; assert the corpus in CI. Remove only in a major release. |
| Legacy TypeScript `node` resolution cannot find stable declarations | Generate and test `typesVersions` alongside conditional exports. |
| Public alias casing differs from source paths | Treat aliases as intentional API and test exact spellings on Linux. |
| Namespace exports retain entire model graphs | Keep the legacy namespace for compatibility but add separately named pure per-module entrypoints and enforce bundle-owner targets. |
| Type-only imports become runtime imports | Require `import type` in consumer migration and inspect bundler reports. |
| Generated output is non-deterministic | Sort shell discovery, all generator directory reads, and generated export lists; fail on second-run diff. |
| Bundles improve in one tool but regress in another | Maintain Vite/Rollup and webpack fixtures with explicit budgets. |
| CommonJS users regress | Keep `lib/` and `main`; execute bare `require("carbon-js-sdk")` from every packed artifact. |

## Definition of done

Tree shaking is considered available when all of the following are true:

- compatible CommonJS and directly executable native ESM outputs are published;
- bare CJS and ESM package imports select and execute the intended files;
- stable public subpaths resolve in Node, supported TypeScript modes, Vite/Rollup, and webpack;
- every path published under the pre-change `lib/**/*` package remains resolvable in extensionless and `.js` form for non-breaking releases;
- `./package.json` and metadata/owner tests continue to work without bypassing condition-selection tests;
- the root `Models` namespace retains its complete compatibility shape;
- a narrow utility import excludes codec registry, wallet transports, providers, Ethers, and WebSocket code;
- a single-codec import excludes unrelated modules and the complete registry;
- root named imports tree-shake to within the approved tolerance of equivalent subpath imports;
- packed-consumer owner and size budgets are enforced cumulatively in CI;
- Disco and another representative consumer build and pass runtime smoke tests using the packed SDK;
- first-party consumers no longer rely on undocumented `lib/*` paths, while external legacy mappings remain until a major release;
- package metadata passes prerelease validation without breaking CommonJS, ESM, or TypeScript consumers;
- before/after bundle evidence is attached to implementation PRs and release notes.
