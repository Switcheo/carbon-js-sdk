# Dependency maintenance

This repository treats dependency updates as supply-chain-sensitive changes. A green bot PR is compatibility evidence, not proof that a published artifact is safe.

## Routine update policy

Dependabot targets `staging` weekly and keeps major updates separate from grouped patch/minor work. Runtime and development updates are grouped independently so production graph changes are not hidden in tooling churn. GitHub Actions updates use the same cadence and retain immutable action commit SHAs after review.

For every proposed package version:

1. Verify the canonical registry identity, publisher/maintainer continuity, repository link, license, runtime engines, deprecation/yank state, publication history, and advisory status.
2. Match the registry tarball integrity and shasum, inspect source/package changes, and review new lifecycle scripts, binaries, native code, network/shell behavior, and transitive dependencies.
3. Confirm every parent selector accepts the selected version. Do not use blanket `resolutions` to force a patched leaf through an incompatible root contract.
4. Install with lifecycle scripts disabled first, using matching Yarn integrity flags. Then repeat a clean frozen install with lifecycle scripts enabled.
5. Run the validation below, inspect the lockfile graph diff, and document residual risks and blocked checks in the PR.

Major ecosystem or runtime migrations must remain isolated from routine updates. A package without a compatible patched release remains visible until its owning root can be migrated safely.

## Dependency contract checks

SDK source imports must be declared directly, and direct roots that are no longer used must be removed rather than retained as accidental transitive providers.

```bash
yarn test:dependency-hygiene
```

This standalone command compiles the tracked source, then runs the existing source-import contract, dependency-contract, and unused-root/pruning regressions. The full `yarn test` suite also discovers these files, so the Node 24 workflow enforces the same gate without running a duplicate compilation.

Do not add a heavy dependency analyzer merely to duplicate these tracked-source, compiled-artifact, and AST-based checks. Update the existing tests when the production import contract changes deliberately.

## Required validation

Use Node.js from `.nvmrc` and Yarn Classic `1.22.22`:

```bash
yarn install --frozen-lockfile --ignore-scripts --non-interactive
yarn check --integrity --ignore-scripts
rm -rf node_modules
yarn install --frozen-lockfile --non-interactive
yarn check --integrity
yarn check --verify-tree
yarn lint
yarn test
yarn test:dependency-hygiene
yarn build
npm pack --dry-run --json
npm audit signatures
git diff --check
```

For runtime graph changes, install the packed tarball in an isolated consumer **with lifecycle scripts enabled**, run `tests/package-smoke.test.cjs` against that package, and directly require native bindings. `secp256k1` must resolve an audited artifact under `prebuilds/`; its JavaScript fallback is not sufficient proof that the native backend loaded.

Network, registry, authentication, or tooling failures are blocked checks, not incompatibility evidence and not passes.

## Known major/unpatched boundaries

The following families cannot be closed safely by lockfile overrides:

- `elliptic@6.6.1` has no patched release for GHSA-848j-6mx2-7j84. Closure requires root migrations such as CosmJS `>=0.34`, Ethers 6, and modern BIP32/Ethereum utility paths.
- `ws@7.4.6` is exact-pinned by `@ethersproject/providers@5.7.2`; full closure requires an Ethers/provider migration.
- Axios `0.21.1` under SecretJS and Axios `0.27.2` under Keplr remain constrained by legacy roots.
- Protobuf.js 6.x remains constrained by `@confio/ics23`, SecretJS, Keplr/Cosmos paths, and the SDK's current major contract. Full remediation requires an audited Protobuf.js 7 migration and root upgrades.

The current detailed ownership paths, validated patch stack, and alert projection live under `plans/audits/`.

## Review and merge discipline

Dependency PRs remain drafts until their artifact audit and Node 24 validation are reviewed. Stacked PRs must be merged sequentially: squash the lowest layer, rebase only the next layer's delta onto updated `staging`, push with an explicit force-with-lease, retarget it, and wait for fresh CI before squashing. Never merge stacked branches independently or carry already-squashed commits forward.

Repository settings and branch-protection changes are separate administrative actions and are not changed by this policy.
