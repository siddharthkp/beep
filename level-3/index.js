function beep () {
  process.stdout.write('\u0007');
}

function beepTwice () {
  beep();
  setTimeout(function () {
    beep();
  }, 500);
}

beepTwice();
