let dataAwal = [2, 6, 3, 4, 5, 8, 10, 17, 14, 12];

function countingSortAsc(arr) {
  const mapArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!mapArr[arr[i]]) mapArr[arr[i]] = 1;
    else mapArr[arr[i]]++;
    console.log(mapArr);
  }
  const newArr = [];
  for (let i = 0; i < mapArr.length; i++) {
    while (mapArr[i] && mapArr[i] > 0) {
      newArr.push(i);
      mapArr[i]--;
      console.log(newArr);
      console.log(mapArr);
    }
  }
  return newArr;
}

console.log(countingSortAsc(dataAwal));

function countingSortDesc(arr) {
  const mapArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!mapArr[arr[i]]) mapArr[arr[i]] = 1;
    else mapArr[arr[i]]++;
    console.log(mapArr); // Opsional: untuk debugging
  }

  const newArr = [];
  for (let i = mapArr.length - 1; i >= 0; i--) {
    while (mapArr[i] && mapArr[i] > 0) {
      newArr.push(i);
      mapArr[i]--;
    }
  }

  return newArr;
}

console.log(countingSortDesc(dataAwal));

// =================== dengan method unshift

function countingSortDesc(arr) {
  const mapArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!mapArr[arr[i]]) mapArr[arr[i]] = 1;
    else mapArr[arr[i]]++;
  }

  const newArr = [];
  for (let i = 0; i < mapArr.length; i++) {
    while (mapArr[i] && mapArr[i] > 0) {
      newArr.unshift(i); // Masukkan ke depan
      mapArr[i]--;
    }
  }

  return newArr;
}

console.log(countingSortDesc(dataAwal));
