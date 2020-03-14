const studentList = [
  { name: "kim", age: 31, score: 95},
  { name: "lee", age: 31, score: 85},
  { name: "bak", age: 31, score: 75},
  { name: "joe", age: 31, score: 65},
];

let resultStudent = " ";
for (let index = 0; index < resultStudent.length; index += 1) {
  if (studentList[index].name === "bak") {
    resultStudent = studentList[index];
    break;
  }
  console.log(studentList[index].name, "은 bak이 아닙니다.");
}

console.log("resultStudent : ", resultStudent);