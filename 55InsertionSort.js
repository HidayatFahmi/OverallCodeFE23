const insertionSortAlgorithm = (arrayData) => {
  const n = arrayData.length;

  for (let i = 1; i < n; i++) {
    // Step 1. Set nilai dari keyTarget dan j
    let keyTarget = arrayData[i];
    console.log(keyTarget);
    let j = i - 1;

    // Step 2. Lakukan looping ke belakang untuk compare j dan keyTarget
    while (j >= 0 && arrayData[j] > keyTarget) {
      // Step 3. Jika memenuhi kondisi, geser nilai [j] ke [j + 1]
      arrayData[j + 1] = arrayData[j];
      j--;
      console.log(j);
    }

    // Step 4. Ubah nilai j + 1 dengan keyTarget
    arrayData[j + 1] = keyTarget;
    console.log(arrayData[j + 1]);
  }

  return arrayData;
};

// Contoh penggunaan:
// const arrayData1 = [9, 17, 1, 8, 4];
// console.log("\nArray1 sebelum sorting:", arrayData1);
// const sortedArrayData1 = insertionSortAlgorithm(arrayData1);
// console.log("Array1 setelah sorting:", sortedArrayData1);

const arrayData2 = [90, 22, 17, 10, 23, 2, 11, 9, 7];
console.log("\nArray2 sebelum sorting:", arrayData2);
const sortedArrayData2 = insertionSortAlgorithm(arrayData2);
console.log("Array2 setelah sorting:", sortedArrayData2);
