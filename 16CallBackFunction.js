// adalah function yang memanggil function lain didalamnya
// penerapan callback pada for each dan map
// perbedaan forEach dan Map yaitu forEach tidak membuat variabel bari sedangkan map membuat variabel baru

// ForEach
const arrayNilai = [33, 65, 78, 87, 88, 56, 32];

arrayNilai.forEach((nilai, index) => {
  console.log(`index ${index} memiliki nilai ${nilai}`);
});

// Map
const angka = [1, 2, 3, 4, 5];
const hasilKaliDua = angka.map((item) => item * 2);

console.log(hasilKaliDua);
