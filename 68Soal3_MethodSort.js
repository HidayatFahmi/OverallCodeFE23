// mengurutkan angka
let angka = [1, 5, 23, 3, 5, 6, 3, 3, 45, 6, 53, 2, 6, 34, 523, 912];

let angkaAsc = [...angka].sort((a, b) => a - b); // Ascending
let angkaDesc = [...angka].sort((a, b) => b - a); // Descending

console.log({ angkaAsc, angkaDesc });
console.log("--------------------------------------------------");

// mengurutkan grade
let students = [
  { name: "Andi", grade: 7.5 },
  { name: "Ardi", grade: 9 },
  { name: "Ahmad", grade: 7 },
  { name: "Anang", grade: 6 },
  { name: "Amir", grade: 8 },
];

let studentsAsc = [...students].sort((a, b) => a.grade - b.grade); // Ascending by grade
let studentsDesc = [...students].sort((a, b) => b.grade - a.grade); // Descending by grade

console.log({ studentsAsc, studentsDesc });
