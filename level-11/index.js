function beep () {
  process.stdout.write('\u0007');
}

function beepN (n) {
  if (n > 0) {
    beep();
    n = n -1;
    setTimeout(function () {
      beepN(n);
    }, 500);
  }
}

module.exports = beepN;
