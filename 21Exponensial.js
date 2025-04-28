/**
 * PERPANGKATAN
 * Lakukan looping pada angka 1-10, lalu lakukan pemangkatan dengan kondisi berikut
 * - Jika suatu angka merupakan bilangan genap DAN berada dibawag 5, maka lakukan pemangkatan dari angka 1-2
 * - Jika suatu angka merupakan bilangan ganjil DAN berada dibawah 5, maka lakukan pemangkatan dari angka 1-3
 * - Jika suatu angka berada diatas 5, maka lakukan pemangkatan dari angka 1 saja.
 */

for (let i = 1; i <= 10; i++) {
  let batasPangkat = 0;
  if (i <= 5 && i % 2 == 1) {
    batasPangkat = 3;
  } else if (i <= 5 && i % 2 == 0) {
    batasPangkat = 2;
  } else {
    batasPangkat = 1;
  }

  console.log(
    `Ganjil, maka perpangakatan angka ${i} sebanyak ${batasPangkat} kali`
  );

  for (let j = 1; j <= batasPangkat; j++) {
    let hasilPangkat = i ** j;
    console.log(`${i} ^ ${j} = ${hasilPangkat}`);
  }

  console.log("=====================================");
}
