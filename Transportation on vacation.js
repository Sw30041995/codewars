function rentalCarCost(d) {
  return (d >= 3 && d < 7) ? 40 * d - 20 
  : (d >= 7) ? d * 40 - 50
  : d * 40;
  }