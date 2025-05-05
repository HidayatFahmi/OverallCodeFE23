class manusia {
  constructor(nama, usia) {
    this.nama = nama;
    this.usia = usia;
  }

  cekNama() {
    console.log(`halo nama saya ${this.nama}`);
  }

  cekUsia() {
    console.log(`usia saya sekarang ${this.usia} tahun`);
  }
}

const fahmi = new manusia("fahmi", 26);
fahmi.cekNama();
fahmi.cekUsia();
