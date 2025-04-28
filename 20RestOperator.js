// mengirim argumen dengan banayak variabel

const totalNilaiSiswa = (...nilai) => {
  let hasil = 0;
  console.log(nilai);
  for (let a of nilai) {
    hasil += a;
  }
  return hasil / nilai.length;
};

const result = totalNilaiSiswa(23, 45, 22, 34, 54, 66, 88, 78);
console.log(result);
