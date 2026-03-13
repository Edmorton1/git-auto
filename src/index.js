#!/usr/bin/env node

const Commander = require('./commands');
const {command: userCommand, flags} = require('./utils');

const commander = new Commander();

const command = commander[userCommand];

if (command) {
  command(flags);
  process.exit(0);
}

console.log('123');
