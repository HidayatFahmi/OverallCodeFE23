// Superclass (kelas induk)
class Kendaraan {
  constructor(merk, tahun) {
    this.merk = merk;
    this.tahun = tahun;
  }

  info() {
    console.log(`Kendaraan: ${this.merk}, Tahun: ${this.tahun}`);
  }
}

// Subclass (kelas turunan) yang mewarisi dari Kendaraan
class Mobil extends Kendaraan {
  constructor(merk, tahun, tipe) {
    // Memanggil constructor dari class induk (Kendaraan)
    super(merk, tahun);
    this.tipe = tipe;
  }

  // Method tambahan khusus Mobil
  klakson() {
    console.log(`${this.merk} ${this.tipe} berbunyi: "Beep beep!"`);
  }

  // Override method info dari parent
  info() {
    console.log(
      `Mobil: ${this.merk}, Tahun: ${this.tahun}, Tipe: ${this.tipe}`
    );
  }
}

// Penggunaan class
const kendaraan1 = new Kendaraan("Yamaha", 2015);
kendaraan1.info(); // Output: Kendaraan: Yamaha, Tahun: 2015

const mobil1 = new Mobil("Toyota", 2022, "SUV");
mobil1.info(); // Output: Mobil: Toyota, Tahun: 2022, Tipe: SUV
mobil1.klakson(); // Output: Toyota SUV berbunyi: "Beep beep!"
