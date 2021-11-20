function findLongest(str) {
  let longest = 0;
  let spl = str.split(" ");
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
}
    return longest;
}