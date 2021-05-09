# File Reporter

## Overview

Filer Reporter list files and folders given a path.
The list is ordered by size and will read path to compute size, file and folders.

App provides a CLI, an API and UI app.

## Usage

## CLI

In API folder give permission `chmod +x bin/cli.js` and `npm link`.

The command `file-reporter` will be accessible. 
With no argument it prompts report for current folder.
It accepts as first argument relative or absolute path.

## API

### run 

- `docker-compose up`

or

- `cd api && npm install && node index.js`

Documentation (graphiql) available at : [localhost:4000](http://localhost:4000/)

### To improve

- Put type definitions and resolvers away from `index.js`
- Create custom scalar for Big Int because GraphQL is limiting to 32-bit int

## APP


## To do

- docker
- CI/CD
- releases (changelog)
- tests (unit, e2e..)
- production build cmd

- export style as common style (ie color, metrics..etc)
- add a translation (i18n) system
