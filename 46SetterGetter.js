class Mahasiswa {
  constructor(nama, umur) {
    this._nama = nama;
    this._umur = umur; // Gunakan _ sebagai konvensi untuk properti "private-ish"
  }

  // Getter untuk nama
  get nama() {
    return this._nama;
  }

  // Setter untuk nama
  set nama(namaBaru) {
    if (namaBaru.length < 3) {
      console.log("Nama terlalu pendek!");
    } else {
      this._nama = namaBaru;
    }
  }

  // Getter untuk umur
  get umur() {
    return this._umur;
  }

  // Setter untuk umur
  set umur(umurBaru) {
    if (umurBaru < 0) {
      console.log("Umur tidak boleh negatif!");
    } else {
      this._umur = umurBaru;
    }
  }
}

// Penggunaan:
const mhs = new Mahasiswa("Fahmi", 20);

console.log(mhs.nama); // Fahmi
mhs.nama = "Al"; // Nama terlalu pendek!
mhs.nama = "Ali";
console.log(mhs.nama); // Ali

console.log(mhs.umur); // 20
mhs.umur = -5; // Umur tidak boleh negatif!
mhs.umur = 21;
console.log(mhs.umur); // 21
