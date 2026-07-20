#!/usr/bin/env bash
set -euo pipefail

: "${GH_TOKEN:?GH_TOKEN is required}"
: "${GH_REPO:?GH_REPO is required}"
: "${RELEASE_TAG:?RELEASE_TAG is required}"
: "${RELEASE_VERSION:?RELEASE_VERSION is required}"
: "${RELEASE_COMMIT:?RELEASE_COMMIT is required}"
: "${RELEASE_PRERELEASE:?RELEASE_PRERELEASE is required}"
: "${RELEASE_ARTIFACT:?RELEASE_ARTIFACT is required}"
: "${RELEASE_CHECKSUM:?RELEASE_CHECKSUM is required}"
: "${RELEASE_DIGEST:?RELEASE_DIGEST is required}"

if [[ "$RELEASE_TAG" != "v${RELEASE_VERSION}" ]]; then
  echo "Release tag $RELEASE_TAG does not match version $RELEASE_VERSION" >&2
  exit 1
fi
if [[ "$RELEASE_PRERELEASE" != "true" && "$RELEASE_PRERELEASE" != "false" ]]; then
  echo "RELEASE_PRERELEASE must be true or false" >&2
  exit 1
fi

verify_local_inputs() {
  local actual_digest expected_checksum_name
  for file in "$RELEASE_ARTIFACT" "$RELEASE_CHECKSUM"; do
    if [[ ! -f "$file" ]]; then
      echo "Release asset does not exist: $file" >&2
      exit 1
    fi
  done

  actual_digest="$(sha256sum "$RELEASE_ARTIFACT" | cut -d' ' -f1)"
  if [[ "$actual_digest" != "$RELEASE_DIGEST" ]]; then
    echo "Artifact digest changed before upload: expected $RELEASE_DIGEST, got $actual_digest" >&2
    exit 1
  fi

  expected_checksum_name="$(basename "$RELEASE_ARTIFACT").sha256"
  if [[ "$(basename "$RELEASE_CHECKSUM")" != "$expected_checksum_name" ]]; then
    echo "Checksum asset must be named $expected_checksum_name" >&2
    exit 1
  fi
  if ! cmp -s "$RELEASE_CHECKSUM" <(printf '%s  %s\n' "$RELEASE_DIGEST" "$(basename "$RELEASE_ARTIFACT")"); then
    echo "Checksum file does not contain the expected digest and artifact name" >&2
    exit 1
  fi
}

resolve_remote_tag_commit() {
  local object object_type object_sha depth
  object="$(gh api "repos/${GH_REPO}/git/ref/tags/${RELEASE_TAG}" --jq '.object.type + " " + .object.sha')"
  read -r object_type object_sha <<< "$object"
  for ((depth = 0; depth < 8; depth++)); do
    if [[ "$object_type" == "commit" && "$object_sha" =~ ^[0-9a-f]{40}$ ]]; then
      printf '%s\n' "$object_sha"
      return 0
    fi
    if [[ "$object_type" != "tag" || ! "$object_sha" =~ ^[0-9a-f]{40}$ ]]; then
      echo "Remote tag $RELEASE_TAG resolved to invalid object: $object_type $object_sha" >&2
      return 1
    fi
    object="$(gh api "repos/${GH_REPO}/git/tags/${object_sha}" --jq '.object.type + " " + .object.sha')"
    read -r object_type object_sha <<< "$object"
  done
  echo "Remote tag $RELEASE_TAG exceeded the annotated-tag resolution limit" >&2
  return 1
}

verify_remote_tag() {
  local remote_commit
  remote_commit="$(resolve_remote_tag_commit)"
  if [[ "$remote_commit" != "$RELEASE_COMMIT" ]]; then
    echo "Remote tag $RELEASE_TAG does not resolve to tagged commit $RELEASE_COMMIT; got $remote_commit" >&2
    exit 1
  fi
}

verify_local_inputs
verify_remote_tag

workdir="$(mktemp -d)"
trap 'rm -rf "$workdir"' EXIT

provenance_file="$workdir/provenance.md"
cat > "$provenance_file" <<EOF
<!-- carbon-js-sdk-prebuilt-provenance -->
## Prebuilt package provenance

- Tagged commit: \`$RELEASE_COMMIT\`
- Artifact SHA-256: \`$RELEASE_DIGEST\`
<!-- /carbon-js-sdk-prebuilt-provenance -->
EOF

release_endpoint="repos/${GH_REPO}/releases/tags/${RELEASE_TAG}"
release_state="$workdir/release.json"
release_probe_error="$workdir/release-probe-error.txt"
set +e
release_probe="$(gh api --silent --include "$release_endpoint" 2>"$release_probe_error")"
release_probe_status=$?
set -e
release_status_line="${release_probe%%$'\n'*}"
if [[ "$release_status_line" =~ ^HTTP/[0-9.]+[[:space:]]+([0-9]{3}) ]]; then
  release_http_status="${BASH_REMATCH[1]}"
else
  echo "Unable to determine GitHub Release state for $RELEASE_TAG: missing HTTP status" >&2
  sed 's/^/gh: /' "$release_probe_error" >&2
  exit 1
fi

release_exists=false
case "$release_http_status" in
  200)
    if (( release_probe_status != 0 )); then
      echo "Unable to determine GitHub Release state for $RELEASE_TAG: HTTP 200 returned with a failed request" >&2
      sed 's/^/gh: /' "$release_probe_error" >&2
      exit 1
    fi
    gh api "$release_endpoint" > "$release_state"
    RELEASE_JSON_FILE="$release_state" node <<'NODE'
    const fs = require("node:fs");
    const release = JSON.parse(fs.readFileSync(process.env.RELEASE_JSON_FILE, "utf8"));
    if (!Array.isArray(release.assets) || !release.assets.every(asset => typeof asset?.name === "string")) {
      throw new Error("GitHub Release assets response is malformed");
    }
    if (release.body !== null && typeof release.body !== "string") {
      throw new Error("GitHub Release body response is malformed");
    }
    if (typeof release.prerelease !== "boolean") {
      throw new Error("GitHub Release prerelease response is malformed");
    }
NODE
    release_exists=true
    ;;
  404)
    if (( release_probe_status == 0 )); then
      echo "Unable to determine GitHub Release state for $RELEASE_TAG: HTTP 404 returned as success" >&2
      exit 1
    fi
    ;;
  *)
    echo "Unable to determine GitHub Release state for $RELEASE_TAG: HTTP $release_http_status" >&2
    sed 's/^/gh: /' "$release_probe_error" >&2
    exit 1
    ;;
esac

missing_assets=()
release_has_asset() {
  RELEASE_JSON_FILE="$release_state" ASSET_NAME="$1" node <<'NODE'
  const fs = require("node:fs");
  const release = JSON.parse(fs.readFileSync(process.env.RELEASE_JSON_FILE, "utf8"));
  process.exit(release.assets.some(asset => asset.name === process.env.ASSET_NAME) ? 0 : 1);
NODE
}

verify_existing_asset() {
  local file="$1"
  local name remote_file local_digest remote_digest
  name="$(basename "$file")"
  if release_has_asset "$name"; then
    remote_file="$workdir/$name"
    rm -f "$remote_file"
    gh release download "$RELEASE_TAG" --repo "$GH_REPO" --pattern "$name" --dir "$workdir"
    local_digest="$(sha256sum "$file" | cut -d' ' -f1)"
    remote_digest="$(sha256sum "$remote_file" | cut -d' ' -f1)"
    if [[ "$local_digest" != "$remote_digest" ]]; then
      echo "Refusing to replace existing release asset $name: local SHA-256 $local_digest differs from remote $remote_digest" >&2
      exit 1
    fi
    echo "Existing release asset $name has identical bytes; leaving it unchanged."
  else
    missing_assets+=("$file")
  fi
}

current_prerelease="$RELEASE_PRERELEASE"
if [[ "$release_exists" == true ]]; then
  verify_existing_asset "$RELEASE_ARTIFACT"
  verify_existing_asset "$RELEASE_CHECKSUM"

  current_notes="$workdir/current-notes.md"
  RELEASE_JSON_FILE="$release_state" NOTES_FILE="$current_notes" node <<'NODE'
  const fs = require("node:fs");
  const release = JSON.parse(fs.readFileSync(process.env.RELEASE_JSON_FILE, "utf8"));
  fs.writeFileSync(process.env.NOTES_FILE, release.body ?? "");
NODE
  NOTES_FILE="$current_notes" PROVENANCE_FILE="$provenance_file" node <<'NODE'
  const fs = require("node:fs");
  const body = fs.readFileSync(process.env.NOTES_FILE, "utf8").trimEnd();
  const provenance = fs.readFileSync(process.env.PROVENANCE_FILE, "utf8").trimEnd();
  const start = "<!-- carbon-js-sdk-prebuilt-provenance -->";
  const end = "<!-- /carbon-js-sdk-prebuilt-provenance -->";
  const count = (text, marker) => text.split(marker).length - 1;
  const starts = count(body, start);
  const ends = count(body, end);
  if (starts === 0 && ends === 0) process.exit(0);
  if (starts !== 1 || ends !== 1) {
    throw new Error("Release notes must contain exactly one complete prebuilt-package provenance block");
  }
  const startIndex = body.indexOf(start);
  const endIndex = body.indexOf(end);
  if (startIndex > endIndex) {
    throw new Error("Release notes contain a malformed prebuilt-package provenance block");
  }
  const existing = body.slice(startIndex, endIndex + end.length);
  if (existing !== provenance) {
    throw new Error("Release notes already contain different prebuilt-package provenance");
  }
NODE
  current_prerelease="$(RELEASE_JSON_FILE="$release_state" node -e 'const fs=require("node:fs"); process.stdout.write(String(JSON.parse(fs.readFileSync(process.env.RELEASE_JSON_FILE, "utf8")).prerelease))')"
else
  verify_remote_tag
  create_args=(
    "$RELEASE_TAG"
    --repo "$GH_REPO"
    --verify-tag
    --target "$RELEASE_COMMIT"
    --title "$RELEASE_TAG"
    --generate-notes
    --notes-file "$provenance_file"
  )
  if [[ "$RELEASE_PRERELEASE" == true ]]; then
    create_args+=(--prerelease)
  fi
  gh release create "${create_args[@]}"
  missing_assets=("$RELEASE_ARTIFACT" "$RELEASE_CHECKSUM")
fi

if (( ${#missing_assets[@]} > 0 )); then
  verify_local_inputs
  verify_remote_tag
  gh release upload "$RELEASE_TAG" --repo "$GH_REPO" "${missing_assets[@]}"
fi

if [[ "$current_prerelease" != "$RELEASE_PRERELEASE" ]]; then
  verify_remote_tag
  gh release edit "$RELEASE_TAG" --repo "$GH_REPO" --prerelease="$RELEASE_PRERELEASE"
fi

verify_remote_tag
