function digitize(n) {
  let str = String(n);
  let arr = str.split('');
  let numArr = [];
  for (let item of arr) {
    numArr.push(+item);
  }
  return numArr;
}