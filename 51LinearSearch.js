// ========================= Linear search
let arrayAngka = [2, 22, 3, 43, 5, 7, 65, 57, 89, 87, 77, 56];

const linearSearch = (arr, target) => {
  for (let a = 0; a < target; a++) {
    if (arr[a] == target) return a;
  }
  return -1;
};

const indexOfTarget = linearSearch(arrayAngka, 57);
console.log(indexOfTarget);
