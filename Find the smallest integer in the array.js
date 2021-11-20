class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let elem of args) {
      if (elem < min) {
        min = elem;
      }
    }
    return min;
  }
}