#!/usr/bin/env node

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const fs = require("fs");

const path = require("path");

const file = path.join(__dirname, "log.txt");

const rl = readline.createInterface({ input, output });
const num = Math.floor(Math.random() * 2 + 1);

console.log("Угадайте число");
let result = "";
rl.on("line", (ans) => {
  if (num == ans) {
    console.log("Вы угадали");
    result = "1";
    rl.close();
  } else {
    console.log("Вы ошиблись");
    result = "0";
    rl.close();
  }
  fs.appendFile(file, result, (err) => {
    if (err) {
      console.error(err);
    }
  });
});
