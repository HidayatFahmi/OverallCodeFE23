let stdName = "Aldo Prasetyo";

// 1. Function and block scope
const testScope1 = (number) => {
  let stdName = "Yanto Sukma";

  if (number > 0) {
    let stdName = "Joseph";
    console.log(stdName);
  }

  console.log(stdName);
};
testScope1(1);

// 2. Test access variable outside the block scope (LET / CONST)
// 3. Test access variable outside the block scope (VAR)
const testScope3 = (number) => {
  if (number > 0) {
    var stdName = "John Doe";
    var stdAge = 20;
  }

  console.log(stdName);
  console.log(stdAge);
};
testScope3(1);

// 4. Test access variable global scope with window object (CONST & VAR)
var numberOfStudent = 20;
const numberOfPeople = 77;

console.log(window.numberOfStudent);
console.log(window.numberOfPeople);
