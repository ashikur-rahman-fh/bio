#!/bin/bash

# run lint
echo "Running lint"
npm run lint

if [ $? -ne 0 ]; then
  echo "Lint failed. Exiting..."
  exit
else
  echo "Lint passed"
fi

# pre test:
# restore babel config from backup
mv babel.config.js.bak babel.config.js

npm run test

# post test:
# backup babel config for NextJS conflict
mv babel.config.js babel.config.js.bak
