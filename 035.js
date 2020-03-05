const listUser = [
  {name: "kim", age:28, score:95},
  {name: "sin", age:38, score:75},
  {name: "lee", age:41, score:85},
];

listUser.forEach(function(user){
  console.log(user);
});
console.log('---------------');
listUser.forEach(user => console.log(user));