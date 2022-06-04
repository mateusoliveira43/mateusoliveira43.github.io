#!/bin/bash

ROOT="$(dirname $( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P ))"
FILE="$ROOT/.env"

if ! test -f $FILE; then
  echo "USER_ID=$(id -u)" >> $FILE
  echo "GROUP_ID=$(id -g)" >> $FILE
  echo 'HOST=0.0.0.0' >> $FILE
  echo 'PORT=3000' >> $FILE
  echo ".env file created in project's root"
fi
