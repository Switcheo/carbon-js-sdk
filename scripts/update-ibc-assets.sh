#!/usr/bin/env bash

set -eo pipefail

ROOT_DIR=$(pwd)
ASSETLIST_FILE=gen/assetlists/osmosis-1/osmosis-frontier.assetlist.json
NEW_ASSETLIST_FILE=gen/assetlists/osmosis-1/ibc-assetlist.json
NEW_FILEPATH=src/constant/ibc-assetlist.json

rm -rf gen

mkdir gen
cd gen
git clone https://github.com/osmosis-labs/assetlists.git

cd $ROOT_DIR
cp $ASSETLIST_FILE $NEW_ASSETLIST_FILE
mv $NEW_ASSETLIST_FILE $NEW_FILEPATH

# Reset file directory
rm -rf gen
