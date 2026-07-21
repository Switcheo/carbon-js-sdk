# GitHub Release playbook

This repository publishes a prebuilt npm tarball to GitHub Releases. It does not publish to npm.

## One-time setup

1. Merge the release-package workflow into the default `staging` branch.
2. In **Settings → Rules → Rulesets**, create an active tag ruleset targeting `v*`.
   - GitHub's tag-ruleset UI adds the `refs/tags/` prefix automatically.
   - The Rulesets API must show exactly `refs/tags/v*`, not `refs/tags/refs/tags/v*`.
   - Enable **Restrict updates**, **Restrict deletions**, and **Block force pushes**.
   - Leave **Restrict creations** disabled so new version tags can be pushed.
3. Before the first production release, complete the sandbox test below.

Verify the configured pattern:

```bash
RULESET_ID="$(
  gh api 'repos/Switcheo/carbon-js-sdk/rulesets?includes_parents=true' \
    --jq '.[] | select(.target == "tag" and .name == "Immutable version tags") | .id'
)"
gh api "repos/Switcheo/carbon-js-sdk/rulesets/$RULESET_ID" \
  --jq '{name, enforcement, include: .conditions.ref_name.include, rules: [.rules[].type]}'
```

## Prepare a release

1. Update `package.json` to the intended strict SemVer version through a normal PR.
2. Merge the version change into `staging` only after required CI passes.
3. Check out the exact current `staging` commit with a clean worktree:

```bash
git fetch origin
git switch staging
git pull --ff-only origin staging
git status --short
VERSION="$(node -p 'require("./package.json").version')"
printf 'release version: %s\ncommit: %s\n' "$VERSION" "$(git rev-parse HEAD)"
```

Do not proceed if the worktree is dirty, CI is failing, or the version is not the intended release.

## Publish

Create one annotated tag at the reviewed `staging` commit and push it once:

```bash
git tag -a "v$VERSION" -m "carbon-js-sdk v$VERSION"
git push origin "v$VERSION"
```

Never move, delete, or reuse a pushed version tag. A correction must use a new version.

The tag push starts **Publish prebuilt release package**. The workflow:

1. Captures trusted publisher code in a read-only job.
2. Builds and validates the SDK with Node and Yarn versions pinned by the repository.
3. Runs `npm pack --ignore-scripts` without publishing to npm.
4. Creates the corresponding GitHub Release and uploads:
   - `carbon-js-sdk-<version>.tgz`
   - `carbon-js-sdk-<version>.tgz.sha256`

## Monitor

```bash
RUN_ID="$(
  gh run list \
    --repo Switcheo/carbon-js-sdk \
    --workflow release-package.yml \
    --limit 1 \
    --json databaseId \
    --jq '.[0].databaseId'
)"

gh run watch "$RUN_ID" \
  --repo Switcheo/carbon-js-sdk \
  --exit-status
```

## Verify the release

```bash
gh release view "v$VERSION" \
  --repo Switcheo/carbon-js-sdk \
  --json url,tagName,isPrerelease,targetCommitish,assets

VERIFY_DIR="$(mktemp -d)"
gh release download "v$VERSION" \
  --repo Switcheo/carbon-js-sdk \
  --dir "$VERIFY_DIR"

(
  cd "$VERIFY_DIR"
  sha256sum --check "carbon-js-sdk-$VERSION.tgz.sha256"
)
```

Confirm that the release contains exactly the tarball and checksum, the checksum passes, and prerelease versions such as `1.2.3-rc.1` are marked as prereleases.

Test installation without lifecycle scripts:

```bash
CONSUMER_DIR="$(mktemp -d)"
cd "$CONSUMER_DIR"
npm init -y
npm install --ignore-scripts "$VERIFY_DIR/carbon-js-sdk-$VERSION.tgz"
node -e 'const sdk = require("carbon-js-sdk"); if (!sdk) throw new Error("CommonJS load failed")'
node --input-type=module -e 'const sdk = await import("carbon-js-sdk"); if (!sdk) throw new Error("ESM load failed")'
```

## Safe reruns and recovery

A failed workflow attempt can be rerun without changing the tag:

```bash
gh run rerun "$RUN_ID" --repo Switcheo/carbon-js-sdk
gh run watch "$RUN_ID" --repo Switcheo/carbon-js-sdk --exit-status
```

Reruns accept byte-identical assets and upload missing assets. They fail instead of replacing an existing asset with different bytes.

If a rerun reports conflicting bytes, malformed provenance, an unreadable release, or a moved tag:

1. Stop; do not use `--clobber` and do not alter the tag.
2. Inspect the workflow logs and existing release assets.
3. Correct the source or release process through a new PR.
4. Publish a new SemVer version rather than reusing the old tag.

## First-release sandbox test

Before the first production release, copy the PR head to a disposable private repository, set its default branch to `staging`, and push `HEAD` as `refs/tags/v<package-version>`. Verify the initial workflow run, the downloaded checksum, CommonJS and ESM installation, and a **Re-run all jobs** attempt. Delete the sandbox after recording the results.
