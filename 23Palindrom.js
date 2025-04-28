/**
 * PALINDROME WORDS
 * - Palindrome adalah sebuah string yang memiliki pengejaan yang sama baik dari awal maupun dari akhir, contoh
 *    - "madam" -> di reverse menjadi "madam".
 *    - "ada" -> di reverse menjadi "ada".
 * Buatlah sebuah perulangan dan pengecekan apakah sebuah string merupakan palindrome atau tidak. String tersebut
 * dapat berupa semua karakter alphabet atau kombinasi dengan angka.
 *
 * NOTES: Hanya gunakan looping dan if else biasa, tidak menggunakan method tambahan seperti split(), reverse() dll.
 */

const checkPalindrom = (katanya) => {
  let palindrom = true;

  for (let i = 0; i < katanya.length / 2; i++) {
    for (let j = katanya.length - 1 - i; j >= katanya.length - 1 - i; j--) {
      if (katanya[i].toLowerCase() !== katanya[j].toLowerCase()) {
        palindrom = false;
        break;
      }
    }

    if (!palindrom) break;
  }

  return palindrom;
};

let kata1 = "1kodok1";
let kata2 = "fahmi";

checkPalindrom(kata1)
  ? console.log(`${kata1} adalah palindrom`)
  : console.log(`${kata1} bukan palindrom`);

checkPalindrom(kata2)
  ? console.log(`${kata2} adalah palindrom`)
  : console.log(`${kata2} bukan palindrom`);
