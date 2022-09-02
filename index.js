#! /usr/bin/env node
const { readFileSync } = require("fs");
const fortuneData = readFileSync("./fortune.txt", "utf-8");
const fortunes = fortuneData.split("%\r\n");
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)].trim();
console.log(randomFortune);
