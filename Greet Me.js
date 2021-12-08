var greet = function(name) {
  let nameLowerCase = name.toLowerCase();
  let correctName = name[0].toUpperCase() + nameLowerCase.slice(1);
  return `Hello ${correctName}!`
};