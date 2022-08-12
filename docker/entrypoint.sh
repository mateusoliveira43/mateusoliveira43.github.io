#!/bin/sh

ROOT="$(dirname $( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P ))"
NODE_MODULES="$ROOT/node_modules"

if ! test -d $NODE_MODULES; then
  npm ci
fi
exec npm start
