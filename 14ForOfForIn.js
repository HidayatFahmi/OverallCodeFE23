let arraySiswa = ["fahmi", "hidayat", "leo", "dimas", "rio", "leo"];

for (let a of arraySiswa) {
  console.log(a);
}

let dataMahasiswa = {
  nama: "fahmi hidayat",
  umur: 26,
  single: true,
  nilai: [87, 77, 89, 95, 89],
};

for (let i in dataMahasiswa) {
  console.log(dataMahasiswa[i]);
}
