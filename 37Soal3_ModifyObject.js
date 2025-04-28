const mahasiswa = {
  nomorIndukMahasiswa: "123456789",
  nama: "Aldo Prasetyo",
  umur: 25,
  jurusan: "Sistem Informasi",
  semester: 5,
  nilaiNilai: {
    semester1: [90, 85, 80],
    semester2: [88, 92, 95],
    semester3: [85, 87, 90],
    semester4: [80, 82, 85],
  },
};

const formatObjectMahasiswa = (objectMahasiswa, ...arrayNilaiSemester) => {
  const keysNilaiNilai = Object.keys(objectMahasiswa.nilaiNilai);

  const rataRataNilai = keysNilaiNilai.reduce((acc, arraySemester) => {
    const arraySemesterSpesifik = objectMahasiswa.nilaiNilai[arraySemester];
    const totalRataRataSemesterSaatIni =
      arraySemesterSpesifik.reduce((acc, nilaiSemesterSpesifik) => {
        return acc + nilaiSemesterSpesifik;
      }, 0) / arraySemesterSpesifik.length;

    return acc + totalRataRataSemesterSaatIni;
  }, 0);

  const ratarataNilaiSemester5 =
    arrayNilaiSemester.reduce((totalNilaiSaatIni, nilaiItem) => {
      return totalNilaiSaatIni + nilaiItem;
    }, 0) / arrayNilaiSemester.length;

  const rataRataSeluruhSemester = (rataRataNilai + ratarataNilaiSemester5) / 5;

  return {
    ...objectMahasiswa,
    rataRataSeluruhSemester: rataRataSeluruhSemester,
    nilaiNilai: {
      ...objectMahasiswa.nilaiNilai,
      semester5: arrayNilaiSemester,
    },
  };
};

const formattedObjectMahasiswa = formatObjectMahasiswa(mahasiswa, 75, 80, 90);
console.log("object original", mahasiswa);
console.log("object formatted", formattedObjectMahasiswa);
