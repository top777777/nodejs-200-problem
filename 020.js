const user = {name:"kim", age:53};
console.log("user: ", user);
console.log("user.name: ", user.name);

user.job = "developer";
user.nation = "korea";
console.log(user);

const memberName = "age";
console.log(user[memberName]);