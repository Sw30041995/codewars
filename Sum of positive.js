function positiveSum(arr) {
  let filterArr = arr.filter(function(item) {
    return item > 0;
  });
  let amount = filterArr.reduce(function(sum, item) {
    return sum + item;
  }, 0);
  return amount;
}