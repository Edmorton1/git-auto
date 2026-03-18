#!/usr/bin/env node

const Commander = require('./commands');
const {command: userCommand, flags} = require('./utils');

const commander = new Commander();

const command = commander[userCommand];

if (command) {
  command(flags);
  process.exit(0);
}

console.log(`
> merge
-- checkout to source branch + create branch + commit + push
< task
  * 123123
< env
  * default: develop
    * develop
    * hotfix

> pull
-- restore package.json, package-lock.json + pull

> restart
-- rm -rf node_modules, package-lock.json + npm i + restart kuber service
< s
  * objects.business

> push
-- commit -m + push
< m
  * fix after review
`);
