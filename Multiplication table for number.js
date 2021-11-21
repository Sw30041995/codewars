function multiTable(number) {
  let str = '';
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${number * i}\n`;
  }
  return str.slice(0, -1);
}