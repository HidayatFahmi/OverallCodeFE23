// =========================== Binary search (itterative binary search)

let arrayNilai = [2, 3, 6, 4, 7, 5, 8, 9, 11, 3, 43, 20, 63, 55];

const findIndexTarget2 = (arr, target) => {
  let arrSort = arr.sort((a, b) => a - b);
  console.log(arrSort);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(right - left) / 2;

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(findIndexTarget2(arrayNilai, 9));

// =========================== Binary search (recursive binary search)
let limitArrayData = 20;

const generateArrayNilai2 = (limit) => {
  let array = [];

  for (let a = 0; a < limit; a++) {
    array.push(Math.round(Math.random() * 20));
  }
  return array.sort((a, b) => a - b);
};

const findIndexTarget3 = (array, startIndex, lastIndex, target) => {
  if (startIndex > lastIndex) return false;

  let middleIndex = Math.floor(lastIndex - startIndex) / 2;

  if (array[middleIndex] == target) return middleIndex;

  if (array[middleIndex] < target) {
    let updateStartIndex = middleIndex + 1;
    return findIndexTarget3(array, updateStartIndex, lastIndex, target);
  } else {
    let updateLastIndex = middleIndex - 1;
    return findIndexTarget3(array, startIndex, updateLastIndex, target);
  }
};

arrayNilai2 = generateArrayNilai2(limitArrayData);
console.log(arrayNilai2);
let startIndex = 0;
let lastIndex = arrayNilai2.length - 1;
let target = 4;
console.log(lastIndex);

console.log(findIndexTarget3(arrayNilai2, startIndex, lastIndex, target));

// check apakah ada data yang diinginkan pada array
// let isValueThere = arrayNilai2.includes(3);
// console.log(isValueThere);
