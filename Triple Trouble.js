function tripleTrouble(one, two, three){
  let s = '';
  for (let i = 0; i < one.length; i++) {
    s += one[i] + two[i] + three[i];
  }
  return s;
 }