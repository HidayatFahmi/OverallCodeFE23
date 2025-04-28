// Diberikan sebuah string, cari karakter pertama yang tidak berulang.
// Contoh Input: "swiss"
// Contoh Output: "w"
// input: “ariz rizky rizaldy”
// output: “k”

// ============================ cara2
let obj = Object.create(null);

function firstNonRepeat(str) {
  // populate
  // data 1 = f
  for (let s of str) {
    if (!obj[s]) {
      obj[s] = 1;
    } else {
      obj[s] += 1;
    }
  }

  const arr = Object.entries(obj).filter((o) => o[1] === 1); //merubah object menjadi array dengan pasangan key dan value (dalam bentuk array kecil 2 elemen)

  return arr[0][0];
}

const test = firstNonRepeat("fariz rizky rizaldi");
console.log(test);

// Cara 3

function firstNonRepeatingChar(str) {
  const rmvSpasi = str.replace(/\s/g, ""); //regex for take out space

  for (const char of rmvSpasi) {
    const count = rmvSpasi.split("").filter((c) => c === char).length;
    if (count === 1) return char;
  }

  return null;
}
console.log(firstNonRepeatingChar("ariz rizky rinaldy"));
