function invert(array) {
  let filArr = [];
   for (let item of array) {
       filArr.push(-item);
     }
  return filArr;
}