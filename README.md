# File Reporter

- [File Reporter](#file-reporter)
  - [Overview](#overview)
  - [TL;DR Run everything FAST](#tldr-run-everything-fast)
  - [BackEnd: API & CLI](#backend-api--cli)
    - [Run](#run)
    - [Give permission to cli](#give-permission-to-cli)
    - [Tests](#tests)
    - [To improve](#to-improve)
    - [Troubleshooting](#troubleshooting)
  - [FrontEnd: APP](#frontend-app)
    - [Run](#run-1)
    - [Tests](#tests-1)
    - [Structure detail](#structure-detail)
    - [To improve to be production ready](#to-improve-to-be-production-ready)

## Overview

Filer Reporter list files and folders given a path.
The list is ordered by size and will read path to compute size, file and folders.

App provides a CLI, an API and UI app.

You must have Node.js v14.0.0 or newer because there is a lot of optional chaining. 

## TL;DR Run everything FAST

Run BackEnd + FrontEnd (Using Node v14+ and docker) : `chmod +x ./run.sh && ./run.sh`

Run Tests (Using Nodev14+) : `chmod +x ./run-test.sh && ./run-test.sh`

## BackEnd: API & CLI

Back end is using `node.js` and `graphql` (with apollo) to run the API.
Readpath service is using `fs` and `path`.


### Run 

- `docker-compose up`

or

- `cd api && npm install && node index.js`

Documentation (graphiql) available at : [localhost:4000](http://localhost:4000/)

### Give permission to cli

- `chmod +x bin/cli.js` and `npm link`

The command `file-reporter <path>` will be accessible. 
With no argument it prompts report for current folder.
It accepts as first argument relative or absolute path.

CLI is using `cli-table` to format output

### Tests

- `cd api && npm install && npm run test`

### To improve

- Put type definitions and resolvers away from `index.js`
- Create custom scalar for Big Int because GraphQL is limiting to 32-bit int


### Troubleshooting

- EPERM error : I am ignoring this error to continue crawling files and folder
- ENOENT error : Same as previous
- FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
  - you might want to allocate more memory to node (ex: `export NODE_OPTIONS="--max-old-space-size=8192"` to allocate 8Go)
  - another solution would probably be to handle concurrency by limiting parallel recursion at the same time.


---

## FrontEnd: APP

To see more detail see [app/README.md](app/README.md) file.

### Run

You should ensure backend is started before accessing front-end

- `cd app && npm install && npm start`

### Tests

- `cd app && npm install && npm run test`

### Structure detail

- `src/lib` contains shared components and utils
- `src/Home` module contains content of the page
- `src/models` contains interfaces

### To improve to be production ready

- handle api in `.env` instead of hardcoded `localhost:4000`
- export style as common style (ie color, metrics..etc)
- add a translation (i18n) system
- add more tests
- improve Jenkins pipeline to run the production build created (ie spawn an instance)

