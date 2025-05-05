/**
 * Simulasi belanja di supermarket
 *
 * Buat sebuah class Supermarket yang memiliki property
 * - nama
 * - uang belanja
 *
 * Buat method
 * - menghitung total belanja
 * - check discount belanja
 * - pembayaran (uang belanja - total belanja)
 *   - jika kurang, tampilkan pesan "Uang tidak cukup"
 *   - jika cukup, tampilkan pesan "Pembayaran berhasil", kembalikan sisa uang belanja
 */

class Supermarket {
  #nama;
  #uangBelanja;
  /**
   * arrayKeranjangBelanja = [
   *  {
   *    namaItem: 'Bayam',
   *    kategoriItem: 'sayur',
   *    jumlahItem: 2,
   *    totalHarga: 20000
   *  }
   * ]
   */
  #arrayKeranjangBelanja = [];

  constructor(nama, uangBelanja) {
    this.#nama = nama;
    this.#uangBelanja = uangBelanja;
  }

  #hargaBarangPerKategori(kategori) {
    switch (kategori) {
      case "sayur":
        return 10000;
      case "buah":
        return 20000;
      case "daging":
        return 50000;
      case "ikan":
        return 30000;
      default:
        return 0;
    }
  }

  #discountBarangPerKategori(kategori) {
    switch (kategori) {
      case "sayur":
        return 0.05;
      case "buah":
        return 0.1;
      case "daging":
        return 0.15;
      case "ikan":
        return 0.2;
      default:
        return 0;
    }
  }

  #menambahBarangKeranjang(objectBarang) {
    this.#arrayKeranjangBelanja.push(objectBarang);
  }

  membeliBarang({ namaItem, kategoriItem, jumlahItem }) {
    const hargaBarangPerItem = this.#hargaBarangPerKategori(kategoriItem);
    const diskon = this.#discountBarangPerKategori(kategoriItem);
    const hargaSetelahDiskon = hargaBarangPerItem * (1 - diskon);

    if (hargaBarangPerItem === 0) {
      console.log(`Barang ${kategoriItem} tidak tersedia`);
      return;
    }

    const totalHargaBarang = hargaSetelahDiskon * jumlahItem;

    const itemBarangIndex = this.#arrayKeranjangBelanja.findIndex((item) => {
      return item.kategoriItem === kategoriItem;
    });

    if (itemBarangIndex !== -1) {
      this.#arrayKeranjangBelanja[itemBarangIndex].jumlahItem += jumlahItem;
      this.#arrayKeranjangBelanja[itemBarangIndex].totalHarga +=
        totalHargaBarang;
    } else {
      const objectBarangBaru = {
        namaItem,
        kategoriItem,
        jumlahItem,
        totalHarga: totalHargaBarang,
      };
      this.#menambahBarangKeranjang(objectBarangBaru);
    }
  }

  menghapusBarang(kategoriItem, jumlahItem) {
    const hargaBarangPerItem = this.#hargaBarangPerKategori(kategoriItem);
    const diskon = this.#discountBarangPerKategori(kategoriItem);
    const hargaSetelahDiskon = hargaBarangPerItem * (1 - diskon);

    if (hargaBarangPerItem === 0) {
      console.log(`Barang ${kategoriItem} tidak tersedia`);
      return;
    }

    const totalHargaBarang = hargaSetelahDiskon * jumlahItem;

    const itemBarangIndex = this.#arrayKeranjangBelanja.findIndex((item) => {
      return item.kategoriItem === kategoriItem;
    });

    if (itemBarangIndex !== -1) {
      this.#arrayKeranjangBelanja[itemBarangIndex].jumlahItem -= jumlahItem;
      this.#arrayKeranjangBelanja[itemBarangIndex].totalHarga -=
        totalHargaBarang;

      if (this.#arrayKeranjangBelanja[itemBarangIndex].jumlahItem <= 0) {
        this.#arrayKeranjangBelanja.splice(itemBarangIndex, 1);
      }
    } else {
      console.log(`Barang ${kategoriItem} tidak ada di keranjang belanja`);
      return;
    }
  }

  #menghitungTotalBelanja() {
    const totalBelanja = this.#arrayKeranjangBelanja.reduce(
      (totalHargaSaatIni, objectBarang) => {
        return totalHargaSaatIni + objectBarang.totalHarga;
      },
      0
    );

    return totalBelanja;
  }

  pembayaran() {
    const totalBelanja = this.#menghitungTotalBelanja();

    if (this.#uangBelanja >= totalBelanja) {
      return (
        "Pembayaran berhasil, sisa uang belanja: " +
        (this.#uangBelanja - totalBelanja)
      );
    } else {
      return "Uang tidak cukup";
    }
  }

  get getArrayKeranjangBelanja() {
    return this.#arrayKeranjangBelanja;
  }
}

const orang1 = new Supermarket("Yanto", 500000);
console.log("Status belanja awal: ", orang1.getArrayKeranjangBelanja);

orang1.membeliBarang({
  namaItem: "Daging Sapi",
  jumlahItem: 2,
  kategoriItem: "daging",
});
orang1.membeliBarang({
  namaItem: "Ikan Tuna",
  jumlahItem: 1,
  kategoriItem: "ikan",
});
console.log("Status belanja saat ini: ", orang1.getArrayKeranjangBelanja);

console.log("==========================");
orang1.membeliBarang({
  namaItem: "Daging Sapi",
  jumlahItem: 1,
  kategoriItem: "daging",
});
console.log("Status belanja saat ini: ", orang1.getArrayKeranjangBelanja);

console.log("==========================");
orang1.menghapusBarang("ikan", 2);
console.log("Status belanja saat ini: ", orang1.getArrayKeranjangBelanja);

console.log("==========================");
const hasilPembayaran = orang1.pembayaran();
console.log(hasilPembayaran);

// class Supermarket {
//   #uangBelanja;
//   arrayBelanja = [];

//   constructor(nama, uangBelanja) {
//     this.nama = nama;
//     this.#uangBelanja = uangBelanja;
//   }

//   set setUangBelanja(uangBelanja) {
//     this.#uangBelanja = uangBelanja;
//   }

//   get getUangBelanja() {
//     return this.#uangBelanja;
//   }

//   get getArrayBelanja() {
//     return this.arrayBelanja;
//   }

//   mendapatHargaPerKategori(kategori) {
//     switch(kategori) {
//       case 'sayur':
//         return 10000;
//       case 'buah':
//         return 20000;
//       case 'daging':
//         return 50000;
//       case 'ikan':
//         return 30000;
//       default:
//         return 0;
//     }
//   };

//   membeliBarang(namaItem, kategoriItem, jumlahItem) {
//     const hargaPerItem = this.mendapatHargaPerKategori(kategoriItem);

//     // Check if the item is valid
//     if (hargaPerItem === 0) {
//       console.log(`Item ${namaItem} sedang kosong dan tidak tersedia`);
//       return;
//     }

//     const totalHarga = hargaPerItem * jumlahItem;

//     // Check apakah barang sudah ada di keranjang
//     const itemIndex = this.arrayBelanja.findIndex(item => item.namaItem === namaItem);
//     if (itemIndex !== -1) {
//       this.arrayBelanja[itemIndex].jumlahItem += jumlahItem;
//       this.arrayBelanja[itemIndex].totalHarga += totalHarga;
//     } else {
//       const objectBelanja = {
//         namaItem: namaItem,
//         kategoriItem: kategoriItem,
//         jumlahItem: jumlahItem,
//         totalHarga
//       }
//       this.addBelanja(objectBelanja);
//     }
//   }

//   mengembalikanBarang(kategoriItem, jumlahItem) {
//     const hargaPerItem = this.mendapatHargaPerKategori(kategoriItem);

//     // Check if the item is valid
//     if (hargaPerItem === 0) {
//       console.log(`Item ${namaItem} sedang kosong dan tidak tersedia`);
//       return;
//     }

//     const totalHarga = hargaPerItem * jumlahItem;

//     // Check apakah barang sudah ada di keranjang
//     const itemIndex = this.arrayBelanja.findIndex(item => item.kategoriItem === kategoriItem);
//     if (itemIndex !== -1) {
//       this.arrayBelanja[itemIndex].jumlahItem -= jumlahItem;
//       this.arrayBelanja[itemIndex].totalHarga -= totalHarga;

//       // Jika jumlah item sudah 0, hapus dari keranjang
//       if (this.arrayBelanja[itemIndex].jumlahItem <= 0) {
//         this.arrayBelanja.splice(itemIndex, 1);
//       }
//     } else {
//       console.log(`Barang ${kategoriItem} tidak ada di keranjang belanja`);
//     }
//   }

//   addBelanja(item) {
//     this.arrayBelanja.push(item);
//   }
// }

// const orang1 = new Supermarket('Orang 1', 100000);
// orang1.membeliBarang('Bayam', 'sayur', 2);
// orang1.membeliBarang('Jeruk', 'buah', 3);
// orang1.membeliBarang('Daging Sapi', 'daging', 1);
// orang1.membeliBarang('Bayam', 'sayur', 1);
// console.log(orang1.getArrayBelanja);
// console.log("=========================");

// orang1.mengembalikanBarang('sayur', 1);
// orang1.mengembalikanBarang('daging', 1);
// console.log(orang1.getArrayBelanja);
