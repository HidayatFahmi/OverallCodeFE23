// Soal 2: Modifikasi dan Penambahan Property pada Object
// Buat object dengan data awal:
// nama -> Meuthia
// umur -> 25
// Ubah nilai umur menjadi 23.
// Tambahkan:
// Property jurusan dengan value “sistem informasi”.
// Property jadwalKuliah, yang berisi object dengan hari (senin–rabu) dan mata kuliah (array of string) sesuai jadwal yang ditentukan. Dengan ketentuan sebagai berikut
// senin -> “kalkulus”, “AI”, “product management”
// selasa -> “network engineering”, “algoritma pemrograman”
// rabu -> “kalkulus”, “product design”, “IOT”

let dataMahasiswa = {
  nama: "Fahmi Hidayat",
  umur: 26,
};

dataMahasiswa.umur = 23;
dataMahasiswa.jurusan = "Sistem informasi";
dataMahasiswa.JadwalKuliah = {
  senin: ["Kalkulus", "AI", "Product Management"],
  selasa: ["Network Engineering", "Algoritma Pemrograman"],
  rabu: ["kalkulus", "Product Design", "IOT"],
};

console.log(dataMahasiswa.nama);
console.log(dataMahasiswa.umur);
console.log(dataMahasiswa.jurusan);
// console.log(dataMahasiswa.JadwalKuliah.senin);
