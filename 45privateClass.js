class AkunBank {
  #saldo; // Private property

  constructor(nama, saldoAwal) {
    this.nama = nama;
    this.#saldo = saldoAwal;
  }

  // Public method
  cekSaldo() {
    console.log(`Saldo ${this.nama}: Rp${this.#saldo}`);
  }

  // Private method
  #logTransaksi(jumlah, tipe) {
    console.log(`Transaksi ${tipe}: Rp${jumlah}`);
  }

  setor(jumlah) {
    this.#saldo += jumlah;
    this.#logTransaksi(jumlah, "Setoran");
  }

  tarik(jumlah) {
    if (jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
      this.#logTransaksi(jumlah, "Penarikan");
    } else {
      console.log("Saldo tidak cukup!");
    }
  }
}

// Penggunaan:
const akunFahmi = new AkunBank("Fahmi", 100000);
akunFahmi.cekSaldo(); // Saldo Fahmi: Rp100000
akunFahmi.setor(50000); // Transaksi Setoran: Rp50000
akunFahmi.cekSaldo(); // Saldo Fahmi: Rp150000
akunFahmi.tarik(70000); // Transaksi Penarikan: Rp70000
akunFahmi.cekSaldo(); // Saldo Fahmi: Rp80000

// Tidak bisa diakses dari luar:
// console.log(akunFahmi.#saldo);         ❌ Error
// akunFahmi.#logTransaksi(1000, "Coba"); ❌ Error
