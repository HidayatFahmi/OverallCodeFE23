// Soal 5: Manipulasi Array Menggunakan Lodash
// Buat array berisi 8 angka antara 1–100.
// Gunakan method _.remove dari Lodash untuk:
// Menghapus bilangan genap.
// Menghapus bilangan < 50 ATAU > 100.

const _ = require("lodash");

const maxArrayQty = 8;

const generateArrayNum = () => {
  let array = [];
  for (let a = 0; a < maxArrayQty; a++) {
    array.push(Math.ceil(Math.random() * 100));
  }
  console.log(array);
  return array;
};

const removeLodash = (numbers) => {
  let arrayEvenNum = structuredClone(numbers);
  let arrayBetweenNumber = structuredClone(numbers);
  _.remove(arrayEvenNum, (del) => del % 2 == 0);
  _.remove(arrayBetweenNumber, (del) => del < 50 || del > 100);

  console.log(arrayEvenNum);
  console.log(arrayBetweenNumber);
  return { arrayEvenNum, arrayBetweenNumber };
};

console.log(removeLodash(generateArrayNum()));
