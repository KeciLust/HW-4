#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
const num = Math.floor(Math.random() * 2 + 1);

console.log(num)





rl.close();