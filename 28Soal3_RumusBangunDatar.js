// Soal 3: Pembuatan Function Bangun Datar
// Buat function untuk menghitung luas:
// Persegi Panjang (gunakan Function Declaration)
// Segitiga Siku-Siku (gunakan Function Expression)
// Ketupat (gunakan Arrow Function)
// Lingkaran (boleh dengan gaya function bebas)
// Semua function harus menerima parameter dinamis.

// ==================== Rectangilar with function declaration

console.log(rectangularFormula(9, 5));

function rectangularFormula(panjang, lebar) {
  let luas = panjang * lebar;
  return luas.toFixed(2);
}

// ==================== Right triangle with function expression

const triangleFormula = function (alas, tinggi) {
  let luas = 0.5 * alas * tinggi;
  return luas.toFixed(2);
};

console.log(triangleFormula(33, 77));

// ==================== Diamond formula with arrow function

const diamondFormula = (dia1, dia2) => {
  let luas = 0.5 * dia1 * dia2;
  return luas.toFixed(2);
};

console.log(diamondFormula(67.883, 56.777));

// ==================== Circle  formula with anything function style

const circleFormula = (jari) => {
  let pi = 3.14;
  let luas = pi * jari ** 2;
  return luas.toFixed(2);
};

console.log(circleFormula(7));
