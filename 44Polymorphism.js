// Kelas induk
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  suara() {
    console.log(`${this.nama} mengeluarkan suara.`);
  }
}

// Kelas turunan 1
class Anjing extends Hewan {
  suara() {
    console.log(`${this.nama} menggonggong: "Guk guk!"`);
  }
}

// Kelas turunan 2
class Kucing extends Hewan {
  suara() {
    console.log(`${this.nama} mengeong: "Meong~"`);
  }
}

// Kelas turunan 3
class Burung extends Hewan {
  suara() {
    console.log(`${this.nama} berkicau: "Cuit cuit!"`);
  }
}

// Fungsi yang menunjukkan polimorfisme
function buatHewanBersuara(hewan) {
  hewan.suara(); // Memanggil method suara(), isi method tergantung jenis objek
}

// Penggunaan:
const hewan1 = new Anjing("Buddy");
const hewan2 = new Kucing("Mimi");
const hewan3 = new Burung("Cici");

// Semua objek menggunakan method `suara()` tapi hasilnya berbeda
buatHewanBersuara(hewan1); // Buddy menggonggong: "Guk guk!"
buatHewanBersuara(hewan2); // Mimi mengeong: "Meong~"
buatHewanBersuara(hewan3); // Cici berkicau: "Cuit cuit!"
