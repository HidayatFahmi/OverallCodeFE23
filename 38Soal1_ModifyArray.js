/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama: "Arkan",
  umur: 22,
};

// tulis kode di sini

let newSiswa = { ...siswa, umur: 23, pekerjaan: "programmer" };
newSiswa.pekerjaan = "programmer";

// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)

console.log(
  "------------------------------------------------------------------"
);

// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)

// const { pekerjaan, ...sisanya } = newSiswa;

// cara 2
let yangHarusDiekstrak = "nama";
const { [yangHarusDiekstrak]: extracted, ...rest } = newSiswa;

console.log(extracted); // Arkan
console.log(rest); // { nama: 'Arkan', umur: 23 }
