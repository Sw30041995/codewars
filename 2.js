function getSum(a, b) {
    if(a == b) {
        return a
    }
    else if (a < b) {
        return a + getSum(a+1, b)
    } else {
        return a + getSum(a-1, b)
    };
}


function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
       return false;
    }

  }
  return true;
}