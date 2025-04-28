// **
// * PASSWORD CREATION
// * Seseorang ingin membuat password dari kumpulan karakter pada sebuah string. Kondisinya sebagai berikut:
// * 1. Jika password kurang dari 7 karakter, maka print "PASSWORD TERLALU PENDEK".
// * 2. Jika password melebihi 7 karakter namun tidak terdapat angka, maka print "PASSWORD LEMAH, TAMBAHKAN ANGKA".
// * 3. Jika password sudah melebihi 7 karakter dan terdapat angka, namun hanya ada 1 angka saja maka print
// *    "PASSWORD CUKUP KUAT, TAMBAHKAN ANGKA 1 LAGI AGAR SEMPURNA"
// * 4. Jika password sudah melebihi 7 karakter dan terdapat setidaknya 2 angka, maka print "PASSWORD SEMPURNA".
// * 5. Jika password lebih dari 10 karakter, maka print "PASSWORD TERLALU PANJANG".
// *

let setPassword = "Faheww22";
let minPassLength = 7;
let maxPassLength = 10;

const checkPasswordSecurity = (pass) => {
  let countNumber = 0;
  if (pass.length < minPassLength) console.log("PASSWORD TERLALU PENDEK BRO");
  else if (pass.length > maxPassLength) console.log("PASSWORD TERLALU PANJANG");
  else {
    for (let i = 0; i < pass.length; i++) {
      let parsingChar = parseInt(pass[i]);
      if (!isNaN(parsingChar)) {
        countNumber++;
      }
    }
    if (countNumber == 0) console.log("PASSWORD LEMAH, TAMBAHKAN ANGKA");
    else if (countNumber == 1)
      console.log("PASSWORD CUKUP KUAT, TAMBAHKAN 1 ANGKA LAGI AGAR SEMPURNA");
    else console.log("PASSWORD SEMPURNA");
  }
  return countNumber;
};

console.log(checkPasswordSecurity(setPassword));
