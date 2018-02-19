#!/bin/bash

PRETTIER=./node_modules/.bin/prettier
INPUT_FILES="./src/**.js ./test/**.js"

$PRETTIER $INPUT_FILES --list-different

if [ "$?" != "0" ] ; then
  echo "Prettier: this files need to be fixed (use npm run lint:fix)"
  exit 1
fi

