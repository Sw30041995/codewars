function makeNegative(num) {
  if (num < 0) {
    return num
  } else {
    return -num;
  }
}


// Write here your multiply-function
function multiply (a, b) {
  return a * b;
}

function addFive(num) {
  var total = num + 5;
  return total;
}


const move = (position, roll) => position + roll * 2;


const even_or_odd = number => number % 2 ? 'Even' : 'Odd';


const opposite = number => -number;


const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 !== 0 ? true : false;


const litres = time => Math.floor(time * 0.5);
