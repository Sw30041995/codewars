function grow(x){
  return x.reduce(function(mul, item) {
    return mul * item;
  })
}