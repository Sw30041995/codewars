function getAverage(marks){
  let amount = marks.reduce(function(sum, item) {
    return sum + item;;
  }, 0);
  return Math.floor(amount / marks.length);
}