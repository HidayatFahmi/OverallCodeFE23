let dataAwal = [2, 6, 3, 4, 5, 8, 10, 17, 14, 12, 11, 19];

function arrCounter(arr) {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (countObj[`${arr[i]}`] === undefined) {
      countObj[`${arr[i]}`] = 1;
    } else {
      countObj[`${arr[i]}`]++;
    }
  }

  return countObj;
}

function countingSortAsc(arr) {
  // tulis code di sini
  const counted = arrCounter(arr);
  const keys = Object.keys(counted);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < counted[keys[i]]; j++) {
      result.push(Number(keys[i]));
    }
  }

  return result;
}

function countingSortDesc(arr) {
  // tulis code di sini
  const counted = arrCounter(arr);
  const keys = Object.keys(counted);
  const result = [];
  for (let i = keys.length - 1; i >= 0; i--) {
    for (let j = counted[keys[i]]; j > 0; j--) {
      result.push(Number(keys[i]));
    }
  }

  return result;
}

console.log(countingSortAsc([...dataAwal]));
console.log(countingSortDesc([...dataAwal]));
