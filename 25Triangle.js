/**
 * RIGHT TRIANGLE
 * Membuat segitiga siku siku dengan 2 kondisi
 * - Kondisi 1 -> dimulai dari kiri
 * *
 * **
 * ***
 * ****
 * *****
 *
 * - Kondisi 2 -> dimulai dari kiri dan terbalik
 * *****
 * ****
 * ***
 * **
 * *
 *
 * - Kondisi 3 -> dimulai dari kiri kemudian dilanjutkan terbalik
 * *
 * **
 * ***
 * ****
 * *****
 * ****
 * ***
 * **
 * *
 *
 * Lakukan looping untuk menyelesaikan segitiga berikut!
 */

let panjangBintang = 5;
let bintang = "*";

function triangle1() {
  for (let i = 0; i < panjangBintang; i++) {
    let output = "";
    for (let j = 0; j <= i; j++) {
      output += "*";
    }
    console.log(output);
  }
}

function triangle2() {
  for (let i = 0; i < panjangBintang; i++) {
    let output = "";
    for (let j = panjangBintang - i; j > 0; j--) {
      output += bintang;
    }
    console.log(output);
  }
}

function triangle3() {
  triangle1();
  triangle2();
}

console.log("----------------------- Triangle1 -----------------------");
triangle1();
console.log("----------------------- Triangle2 -----------------------");
triangle2();
console.log("----------------------- Triangle3 -----------------------");
triangle3();
