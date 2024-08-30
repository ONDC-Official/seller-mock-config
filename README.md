# Introduction

The Seller mock engine config converts yaml configs into single build.json file that can be consumed by the seller mock engine through the api.

By leveraging seller-mock-config, seller mock engine can pull latest config files without need to update configs. It ensures that the seller mock engine is running with latest configs.

# Repository Structure

- `/config` - stores configs in yamls
- `/build`
  - `build.json`  - build output
- `app.js`  - code to convert yamls into build.js


# Steps to setup protocol servel in local environment

## Prerequisites

- Install node (https://nodejs.org/en)

## Steps to setup the local environment

Go to project root and install dependencies
```
npm i
```

make config changes and run 
```
node app
```

This will output config from config folder into build/build.json
which can be retrieved using github/other api


