#!/usr/bin/env node

var beep = require('./index.js');
var arguments = process.argv;
var count = arguments[2];
if (!count) count = 1;
beep(count);
