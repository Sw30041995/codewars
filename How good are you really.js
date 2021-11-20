function betterThanAverage(classPoints, yourPoints) {
  let total = classPoints.reduce(function(sum, item) {
    return sum + item;
  }, 0);
  return (total / classPoints.length < yourPoints);
}
