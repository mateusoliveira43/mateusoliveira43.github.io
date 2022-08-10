#!/bin/bash

ROOT="$(dirname $( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P ))"
$ROOT/scripts/env.sh

docker-compose \
--file $ROOT/docker/docker-compose.yaml \
--project-directory $ROOT \
run --rm --service-ports --entrypoint sh m43
