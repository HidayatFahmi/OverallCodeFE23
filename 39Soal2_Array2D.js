/**
 * Menggabungkan array
 */

let array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let spreadArray = [...array2d];
console.log(spreadArray);

//========================= Cara 1

let array1D = [];
// tulis code di sini
for (let a = 0; a < array2d.length; a++) {
  for (let b = 0; b < array2d[a].length; b++) {
    array1D.push(array2d[a][b]);
  }
}

console.log(array1D);
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)

//========================= Cara 2
const newArr = [];
let x = 1;

for (let arr of array2d) {
  newArr.push(...arr);
  console.log(`====== loop ${x} =======`);
  console.log(newArr);
  x++;
}

console.log("======== end of loop ");
console.log(newArr);

//========================= Cara 3 with function

const outOfArray = (array) => {
  let newArr = [];

  for (let a of array) {
    for (let b of a) {
      newArr.push(b);
    }
  }

  return newArr;
};

console.log(outOfArray(array2d));
