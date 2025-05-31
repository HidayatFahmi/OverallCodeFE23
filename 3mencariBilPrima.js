let startNum = 1;
let lastNumber = 20;
let primesNumbers = [];
let primeNumberCount = 0;

const findPrimesNumber = (start, last) => {
  for (let i = start; i < last; i++) {
    if (i < 2) continue;
    let isPrimes = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      console.log(i, j, i % j);
      if (i % j == 0) {
        isPrimes = false;
        break;
      }
    }

    if (isPrimes) {
      primesNumbers.push(i);
    }
  }

  return primesNumbers;
};

console.log(findPrimesNumber(startNum, lastNumber));
primeNumberCount = primesNumbers.length;
console.log(primeNumberCount);
