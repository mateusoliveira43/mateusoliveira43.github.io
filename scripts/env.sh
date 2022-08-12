#!/bin/bash

ROOT="$(dirname $( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P ))"
FILE="$ROOT/.env"
USER_NAME='develop'
USER_HOME="/home/$USER_NAME"
PROJECT_NAME='m43'
WORK_DIR="$USER_HOME/$PROJECT_NAME"

if ! test -f $FILE; then
  echo "USER_ID=$(id -u)" >> $FILE
  echo "GROUP_ID=$(id -g)" >> $FILE
  echo "USER_NAME=$USER_NAME" >> $FILE
  echo "USER_HOME=$USER_HOME" >> $FILE
  echo "PROJECT_NAME=$PROJECT_NAME" >> $FILE
  echo "WORK_DIR=$WORK_DIR" >> $FILE
  echo 'HOST=0.0.0.0' >> $FILE
  echo 'PORT=3000' >> $FILE
  echo ".env file created in project's root"
fi
