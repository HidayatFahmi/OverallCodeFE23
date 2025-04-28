// Cetak angka dari 1 hingga 100. Untuk kelipatan 3 cetak "Kelipatan 3", untuk kelipatan 5 cetak "Kelipatan 5", dan untuk kelipatan keduanya cetak "Kelipatan 5 dan 3".

let awal = 1;
let akhir = 100;

const modulusPrint = (number) => {
  for (let a = awal; a <= akhir; a++) {
    if (a % 3 == 0 && a % 5 == 0) {
      console.log(`${a} modulus of 3 and 5`);
    } else if (a % 3 == 0) {
      console.log(`${a} modulus of 3`);
    } else if (a % 5 == 0) {
      console.log(`${a} modulus of 5`);
    } else {
      console.log("None of them");
    }
  }

  return akhir;
};

console.log(modulusPrint(akhir));
