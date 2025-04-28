// Buat function yang menerima parameter array.
// Kembalikan array baru berisi hanya bilangan genap dari input array.
// Jumlah elemen array input minimal 8.

let banyakNomor = 10;
const generateNumber = () => {
  let arrayNumber = [];
  for (let a = 0; a < banyakNomor; a++) {
    arrayNumber.push(Math.ceil(Math.random() * 100));
  }
  console.log(arrayNumber);
  return arrayNumber;
};

const sortEvenNumber = (array) => {
  let evenNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) evenNumber.push(array[i]);
    else continue;
  }
  return evenNumber;
};

console.log(sortEvenNumber(generateNumber()));
