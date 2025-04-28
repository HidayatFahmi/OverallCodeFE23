/**
 * Menghitung Harga dan Discount dari toko pakaian
 * Sebuah toko pakaian akan memberikan discount pada beberapa stock barang mereka dengan aturan berikut
 * - Kemeja, discount 20%
 * - Kaos, discount 15%
 * - Jeans, discount 12.75%
 * - Sepatu, discount 12.5%
 * - Jaket, discount 3.5%
 *
 * Discount akan diberikan tanpa ada minimum pembelian. Hitunglah harga barang yang dibeli oleh Ryan
 * per masing-masing item nya sebelum dan setelah discount. Kemudian hitunglah total harga yang perlu dibayar
 * Ryan untuk seluruh barangnya.
 *
 * NOTE: (Gunakan Switch Case)  ---> per masing masing barang saja
 */

const kemeja = 750000;
const kaos = 50000;
const jeans = 100000;
const sepatu = 60000;
const jaket = 120000;

const barangPilihanRyan = "sepatu";
let hargaBarangBeforeDisc = 0;
let hargaBarangAfterDisc = 0;

switch (barangPilihanRyan) {
  case "sepatu":
    hargaBarangBeforeDisc = sepatu;
    hargaBarangAfterDisc =
      hargaBarangBeforeDisc - hargaBarangBeforeDisc * 0.125;
    break;

  case "kemeja":
    hargaBarangBeforeDisc = kemeja;
    hargaBarangAfterDisc = hargaBarangBeforeDisc - hargaBarangBeforeDisc * 0.2;
    break;

  case "kaos":
    hargaBarangBeforeDisc = kaos;
    hargaBarangAfterDisc = hargaBarangBeforeDisc - hargaBarangBeforeDisc * 0.15;
    break;

  case "jeans":
    hargaBarangBeforeDisc = jeans;
    hargaBarangAfterDisc =
      hargaBarangBeforeDisc - hargaBarangBeforeDisc * 0.1275;
    break;

  case "jaket":
    hargaBarangBeforeDisc = jaket;
    hargaBarangAfterDisc =
      hargaBarangBeforeDisc - hargaBarangBeforeDisc * 0.035;
    break;
}

console.log(hargaBarangBeforeDisc);
console.log(hargaBarangAfterDisc);
