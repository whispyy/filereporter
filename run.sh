#!/bin/bash

docker-compose up -d
cd api && npm install && chmod +x bin/cli.js && npm link
cd ../app && npm install && npm start