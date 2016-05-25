#!/usr/bin/env node


var program = require('commander');
var version = require('../package.json').version;
var babyname = require('../index.js');
program
    .version(version)
    .option('-n, --name <n>', 'name template using * as placeholder')
    .option('-t, --times <n>', 'how many random name you want, default is 1', 1);
program.parse(process.argv);

var results = [];
for (var i = 0; i < program.times; i++) {
    results.push(babyname.generate(program.name));
}
console.log(results.join(', '));
