var beep = require('beep-sid');

function add (a, b) {
  var c = a + b;
  console.log(c);
  beep(2);
}

add(2, 3);
