function findDifference(a, b) {
  let arr1 = a[0] * a[1] * a[2];
  let arr2 = b[0] * b[1] * b[2];
  return arr1 > arr2 ? arr1 - arr2 : arr2 - arr1;
}