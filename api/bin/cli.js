#!/usr/bin/env node

const readPath = require('../src/services/readpath').readPath;
const [,, ...args] = process.argv;

const path = args[0] || __dirname;

readPath(path).then(res => console.log(res));

