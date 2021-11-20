function doubleChar(str) {
  let newArr = [];
  let arr = str.split('');
  for (let elem of arr) {
    newArr += elem + elem;
  }
  return newArr;
}