// Soal 1: Manipulasi Array Nilai Siswa
// Buat array berisi nilai selama 8 semester: [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25].
// Lakukan perulangan untuk menghitung:
// Total nilai semester ganjil dan genap.
// Rata-rata nilai semester ganjil dan genap.

let arrayNilai = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

const rekapNilaiSiswa = (array) => {
  let totalGanjil = 0;
  let totalGenap = 0;
  let countGanjil = 0;
  let countGenap = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      totalGanjil += array[i];
      countGanjil++;
    } else {
      totalGenap += array[i];
      countGenap++;
    }
  }

  const rataGanjil = totalGanjil / countGanjil;
  const rataGenap = totalGenap / countGenap;
  const rata1Semester = (rataGanjil + rataGenap) / 2; //Improve menambhakan rata-rat nilai 1 semster

  return {
    totalGanjil,
    rataGanjil: rataGanjil.toFixed(2),
    totalGenap,
    rataGenap: rataGenap.toFixed(2),
    rata1Semester: rata1Semester.toFixed(2),
  };
};

const result = rekapNilaiSiswa(arrayNilai);
const status = result.rata1Semester >= 7.5 ? "Lulus" : "Tinggal Kelas";
console.log(result, status);
