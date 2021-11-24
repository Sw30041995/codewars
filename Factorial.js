function factorial(n){
  let factorial = 1;
  for (let i = n; i >= 2; i--) {
    factorial *= i;
  }
  return factorial;
}