const selectionSortAlgorithm = (arrayData) => {
  const n = arrayData.length;

  for (let i = 0; i < n - 1; i++) {
    // Step 1. Set nilai dari index elemen dengan nilai paling kecil
    let minIndex = i;

    // Step 2. Lakukan inner looping untuk mencari nilai minIndex pada array
    for (let j = i + 1; j < n; j++) {
      // Step 3. Compare nilai minIndex dan j, jika j < minIndex, set j sebagai minIndex
      if (arrayData[j] < arrayData[minIndex]) {
        minIndex = j;
      }
    }

    // Step 4. Swap nilai array ke - i dan minIndex
    if (minIndex != i) {
      let tempData = arrayData[i];
      arrayData[i] = arrayData[minIndex];
      arrayData[minIndex] = tempData;

      // atau dengan cara erikut
      // [arrayData[i], arrayData[minIndex]] = [arrayData[minIndex], arrayData[i]];
    }
  }

  return arrayData;
};

// Contoh penggunaan:
const data = [64, 25, 12, 22, 11];
console.log("Sebelum sort:", data);
console.log("Setelah sort:", selectionSortAlgorithm(data));
