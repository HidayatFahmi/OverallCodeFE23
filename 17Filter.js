// Filter method

const ArrayAngkaRandom = [25, 45, 65, 75, 34, 78, 88, 76];

const ArrayAngkaGenap = ArrayAngkaRandom.filter((x) => x % 2 == 0);
console.log(ArrayAngkaGenap);

// Reduce
const arrayNilai = [4, 5, 6, 8, 7, 9, 3, 2];

const totalNilai = arrayNilai.reduce((tot, curr) => {
  console.log(tot, curr);
  return (tot += curr);
});

console.log(totalNilai);
