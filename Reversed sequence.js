const reverseSeq = (n) => {
  let arr = [];
  while (n >= 1) {
    arr.push(n);
    n--;
  }
  return arr;
};