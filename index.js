#! /usr/bin/env node
const { readFileSync } = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/fortune.txt");
const fortuneData = readFileSync(dirPath, "utf-8");
const fortunes = fortuneData.split("%\r\n");
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)].trim();
console.log(randomFortune);
