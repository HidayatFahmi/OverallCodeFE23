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

// MethodArray
// Add and deleteelements
//1.==================== push
let nilai1 = [2, 3, 4, 5, 6, 7];
nilai1.push(100);

console.log(nilai1);

//2.==================== pop

nilai1.pop();
console.log(nilai1);

//3.==================== unshift

nilai1.unshift("fahmi");
console.log(nilai1);

//4.==================== shift

nilai1.shift();
console.log(nilai1);

//5.==================== splice

// months.splice(4, 1, "May");
// Replaces 1 element at index 4
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
let nilai2 = nilai1.splice(2, 2, 5);
console.log(nilai1);
console.log(nilai2);

//6.==================== slice
let nilai3 = nilai1.slice(1, 2);
console.log(nilai1);
console.log(nilai3);

//7.==================== includes

let arrayNilai2 = [45, 54, 77, 87, 67, "fahmi", 98, 77, 77];

if (!arrayNilai2.includes(100)) {
  arrayNilai.push(100);
}

console.log(arrayNilai);

//8.==================== fill
const arrayBuah = new Array(5).fill(null);
arrayBuah.forEach((_, i, arr) => {
  arr[i] = i * 2;
});

console.log(arrayBuah);

//9.==================== indexOf

console.log(arrayNilai2.indexOf(77));
console.log(arrayNilai2.lastIndexOf(77));

//10 ==================== find, findIndex, lastIndexOf
console.log(arrayNilai);
let nilaiPertama = arrayNilai2.find((item) => item > 46);
console.log(nilaiPertama);
console.log(arrayNilai.findIndex((item) => item > 8));
console.log(arrayNilai2.lastIndexOf("fahmi"));

//11.==================== some, every
let isSome = arrayNilai.some((item) => item > 100 && item < 1000);
console.log(isSome);
let isEvery = arrayNilai.every((item) => item >= 2 && item <= 100);
console.log(isEvery);

// 12. forEach menjalankan fungsi untuk setiap element tapi tidak membuat variabel baru
const nilaiFahmi = [78, 87, 88, 98, 89];
nilaiFahmi.forEach((nilai, index) => {
  console.log(`${index + 1}. ${nilai}`);
});

//13.==================== concat
const nilaiMahasiswa1 = [23, 45, 55];
const nilaiMahasiswa2 = nilaiMahasiswa1.reverse();
console.log(nilaiMahasiswa2);
let concatNilai = nilaiMahasiswa1.concat(nilaiMahasiswa2);
console.log(concatNilai);

//14.==================== join
let nilaiMahasiswa3 = [88, 89, 97, 78, 99];
let joinNilaiMahasiswa3 = nilaiMahasiswa3.join(", ");
console.log(joinNilaiMahasiswa3);

// 15. ================== ascii code
console.log("a".charCodeAt(0));
console.log("A".charCodeAt(0));
console.log("1".charCodeAt(0));

let duaString = "2";
let duaNum = 2;
let add = duaNum + duaString;
console.log(add);
