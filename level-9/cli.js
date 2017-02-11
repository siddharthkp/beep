#!/usr/bin/env node

var beep = require('./index.js');
var inquirer = require('inquirer');

var arguments = process.argv;
var count = arguments[2];
if (count) beep(count);
else {
  var question = {
    name: 'count',
    type: 'input',
    message: 'How many beeps do you want?'
  };
  inquirer.prompt(question)
  .then(function(answer) {
    beep(answer.count);
  });
}
