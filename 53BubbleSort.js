const bubbleSortAlgorithm = (arrayData) => {
  // Step 1. Inisialisasi variable awal
  let swapped = false;
  const n = arrayData.length;

  // Step 2. Lakukan looping terluar
  for (let i = 0; i < n; i++) {
    // Step 3. Inisialisasi nilai swapped setiap looping
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      // Step 4. Lakukan pengecekan antara j dan j+1
      if (arrayData[j] > arrayData[j + 1]) {
        let tempData = arrayData[j + 1];
        arrayData[j + 1] = arrayData[j];
        arrayData[j] = tempData;
        swapped = true;
      }
    }

    // Step 5. Break looping jika tidak ada yang di-swap lagi
    if (swapped === false) break;
  }

  return arrayData;
};

let array = [2, 4, 5, 7, 6, 8, 10, 12, 13, 22, 1, 3];

console.log(bubbleSortAlgorithm(array));
