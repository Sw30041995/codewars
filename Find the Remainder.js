function remainder(a, b){
  return (b === 0) ? NaN
  : b > a ? b % a
  : a % b;
}