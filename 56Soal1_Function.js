// SOAL 1 → Wajib Dikerjakan
// membuat function usia dengan prameter tahun lahir dan tahun sekarang

function myAge(bornYear) {
  const currentYear = new Date().getFullYear();
  let result = currentYear - bornYear;
  return result;
}

console.log(myAge(1998));
