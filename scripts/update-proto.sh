#!/usr/bin/env bash

set -eo pipefail

rm -rf ./src/codec
mkdir ./src/codec
tar -zxvf proto-ts.tar.gz --directory ./src/codec
mv src/codec/protobuf-def.json ./scripts/


# Remove unnecessary codec files
rm -rf \
  src/codec/collateralizeddebtposition/ \
  src/codec/autodeleverage/ \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ 

yarn sync-reset
sh $(dirname "${BASH_SOURCE[0]}")/generate-registry.sh
