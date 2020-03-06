const studentList = [
  {name:"kim", age: 31, matj: 85, science: 75},
  {name:"lee", age: 31, matj: 85, science: 75},
  {name:"pak", age: 31, matj: 85, science: 75},
];
const plus = (a, b) => a + b;
studentList.forEach(student => console.log(`${student.name} total: ${plus(student.math, student.science)}`));

console.log("-----------");

studentList.forEach((student) => {
  console.log(`${student.name} total: ${plus(student.math, student.science)}`);
});