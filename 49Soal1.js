// let people = [
//   { name: "alice", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "charlie", age: 15 },
// ];

// const checkAge = (arrayPeople) => {
//   // console.log(arrayPeople);
//   for (let a = 0; a < arrayPeople.length; a++) {
//     let limitAge = 17 - arrayPeople[a].age;
//     if (arrayPeople[a].age >= 17) {
//       console.log(
//         `${arrayPeople[a].name} Anda diperbolehkan mengakses konten ini`
//       );
//     } else {
//       console.log(
//         `${arrayPeople[a].name} anda diperbolehkan mengakses konten ini ${limitAge} tahun lagi`
//       );
//     }
//   }
// };

// checkAge(people);

// =================================== Dengan ckass

// class Person2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   accessContent() {
//     this.age >= 17
//       ? `${this.name} anda diperbolehkan mengakses konten ini`
//       : `${this.name} anda diperbolehkan mengakses konten ini ${
//           this.age - 17
//         } tahun lagi `;
//   }
// }

// const Fahmi = new Person2("fahmi", 26);
// console.log(Fahmi.accessContent);

// ============================= dengan forEach
const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 16 },
];

class Person {
  #accessGroup = [];

  constructor(people) {
    this.people = people;
  }

  checkAccess() {
    this.people.forEach((element) => {
      if (element.age >= 17) {
        console.log(
          `${element.name} anda diizinkan untuk mengakses konten ini`
        );
      } else {
        console.log(
          `${element.name} anda akan diizinkan untuk mengakses konten ini ${
            17 - element.age
          } tahun lagi`
        );
      }
    });
  }

  getAccess() {
    this.#accessGroup = this.people
      .filter((person) => person.age >= 17)
      .map((person) => person.name);
    return this.#accessGroup;
  }

  getNotAllowed() {
    return this.people.filter((person) => person.age < 17).length;
  }

  getAccessMessage() {
    this.people.forEach((person) => {
      if (person.age >= 17) {
        console.log(`${person.name} anda boleh mengakses konten ini`);
      } else {
        console.log(
          `${person.name} anda baru boleh mengakses konten ini ${
            17 - person.age
          } tahun lagi`
        );
      }
    });
  }
}

const personChecker = new Person(people);

personChecker.checkAccess();
console.log("Yang boleh akses:", personChecker.getAccess());
console.log("Jumlah yang tidak boleh akses:", personChecker.getNotAllowed());
personChecker.getAccessMessage();
