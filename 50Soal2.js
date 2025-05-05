// Buat class daftar belanjaan (Shopping list)

class ShoppingItem {
  constructor(items) {
    this.items = items;
  }

  tampilkanSemuaNama() {
    console.log("Semua nama barang:");
    this.items.forEach((item) => console.log(item.nama));
  }

  tampilkanBarangByHarga() {
    console.log("\nBarang dengan harga di atas Rp20000:");
    this.items
      .filter((item) => item.harga > 20000)
      .forEach((item) => console.log(`${item.nama} - Rp${item.harga}`));
  }

  TotalHarga() {
    const total = this.items.reduce((sum, item) => sum + item.harga, 0);
    console.log(`\nTotal harga semua barang: Rp${total}`);
  }

  tampilkanMakanan() {
    console.log("\nBarang kategori makanan:");
    this.items
      .filter((item) => item.kategori === "makanan")
      .forEach((item) => console.log(item.nama));
  }
}

const dataBelanja = [
  { nama: "Ayam Goreng", harga: 18000, kategori: "makanan" },
  { nama: "Jaket", harga: 120000, kategori: "pakaian" },
  { nama: "Buku Tulis", harga: 6000, kategori: "alat tulis" },
  { nama: "Soto Ayam", harga: 15000, kategori: "makanan" },
  { nama: "Kaos", harga: 55000, kategori: "pakaian" },
  { nama: "Spidol", harga: 4000, kategori: "alat tulis" },
];

const daftar = new ShoppingItem(dataBelanja);
daftar.tampilkanSemuaNama();
daftar.tampilkanBarangByHarga();
daftar.TotalHarga();
daftar.tampilkanMakanan();

// ============================================== Dengan for loop

class ShoppingItem2 {
  constructor(items) {
    this.items = items;
  }

  showAllName() {
    console.log("Semua nama barang:");
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].nama);
    }
  }

  showUpperPrice() {
    console.log("\nBarang dengan harga di atas Rp20000:");
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].harga > 20000) {
        console.log(this.items[i].nama + " - Rp" + this.items[i].harga);
      }
    }
  }

  totalPrice() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].harga;
    }
    console.log("\nTotal harga semua barang: Rp" + total);
  }

  byCategory() {
    console.log("\nBarang kategori makanan:");
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].kategori === "makanan") {
        console.log(this.items[i].nama);
      }
    }
  }
}

const dataBelanja2 = [
  { nama: "Ayam Goreng", harga: 18000, kategori: "makanan" },
  { nama: "Jaket", harga: 120000, kategori: "pakaian" },
  { nama: "Buku Tulis", harga: 6000, kategori: "alat tulis" },
  { nama: "Soto Ayam", harga: 15000, kategori: "makanan" },
  { nama: "Kaos", harga: 55000, kategori: "pakaian" },
  { nama: "Spidol", harga: 4000, kategori: "alat tulis" },
];

const daftar2 = new ShoppingItem2(dataBelanja2);
daftar2.showAllName();
daftar2.showUpperPrice();
daftar2.totalPrice();
daftar2.byCategory();
