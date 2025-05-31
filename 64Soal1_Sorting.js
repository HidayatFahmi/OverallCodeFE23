// sorting

let dataAwal = [2, 6, 3, 4, 5, 8, 10, 17, 14, 12, 11, 19];

// SelectionSort

const ascendingSelectionSort = (arr) => {
  let n = arr.length;

  for (let a = 0; a < n; a++) {
    let minIndex = a;
    for (let b = a + 1; b < n; b++) {
      if (arr[b] < arr[minIndex]) {
        minIndex = b;
      }
    }
    if (minIndex != a) {
      [arr[minIndex], arr[a]] = [arr[a], arr[minIndex]];
    }
  }

  return arr;
};

const descendingSelectionSort = (arr) => {
  let n = arr.length;

  for (let a = 0; a < n; a++) {
    let maxIndex = a;
    for (let b = a + 1; b < n; b++) {
      if (arr[b] > arr[maxIndex]) {
        maxIndex = b;
      }
    }
    if (maxIndex != a) {
      [arr[maxIndex], arr[a]] = [arr[a], arr[maxIndex]];
    }
  }

  return arr;
};

console.log(ascendingSelectionSort([...dataAwal]));
console.log(descendingSelectionSort([...dataAwal]));

//============================  bubble sort
const ascendingBubbleSort = (arr) => {
  let n = arr.length;

  for (let a = 0; a < n; a++) {
    let swapped = false;
    for (let b = 0; b < n - 1 - a; b++) {
      let leftIndex = arr[b];
      let righIndex = arr[b + 1];

      if (leftIndex > righIndex) {
        let temp = leftIndex;
        leftIndex = righIndex;
        righIndex = temp;
        swapped = true;

        // cara 2 swap
        // [arr[b], arr[b + 1]] = [arr[b + 1], arr[b]];
      }
    }
    if (swapped == false) break;
  }
  return arr;
};

console.log(ascendingBubbleSort([...dataAwal]));
