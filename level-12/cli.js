#!/usr/bin/env node

var beep = require('./index.js');
var prompt = require('prompt');
var colors = require('colors');

var arguments = process.argv;
var count = arguments[2];
if (count) beep(count);
else {
  console.log('How many beeps do you want?'.blue);
  prompt.get('count', function(err, answer) {
    beep(answer.count);
  });
}
