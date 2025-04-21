#!/bin/bash

# pre test:
# restore babel config from backup
mv babel.config.js.bak babel.config.js

npm run test

# post test:
# backup babel config for NextJS conflict
mv babel.config.js babel.config.js.bak
