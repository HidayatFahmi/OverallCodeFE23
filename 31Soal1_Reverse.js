// Buat fungsi untuk membalikkan sebuah string.
// Contoh Input: "hello"
// Contoh Output: "olleh"

let input = "hello";
let reversedString = [];
// ========================= cara1
for (let a = input.length - 1; a >= 0; a--) {
  reversedString.push(input[a]);
}

console.log(reversedString.join(""));

// ========================= cara 2
let input2 = "hello";
let reversedString2 = input2.split("").reverse().join("");
console.log(reversedString2);

// ========================= Cara 3
let input3 = "hello fahmi";
let reversedString3 = "";

for (let a = input3.length - 1; a >= 0; a--) {
  reversedString3 += input3[a];
}

console.log(reversedString3);

// with function
let input4 = "Haii fahmi";

const reversedWord = (kata) => {
  let reversedString4 = "";

  for (let a = kata.length - 1; a >= 0; a--) {
    reversedString4 += kata[a];
  }
  return reversedString4;
};

console.log(reversedWord(input4));

// ========================= Cara4
let input5 = "fahmi hidayat";

const reversedWord2 = (kata) => {
  let startWord = 0;
  let lastWord = kata.length - 1;
  let arrayKata = kata.split("");

  while (startWord < lastWord) {
    let temp = arrayKata[startWord];

    console.log(temp);
    arrayKata[startWord] = arrayKata[lastWord];
    arrayKata[lastWord] = temp;

    startWord++;
    lastWord--;
  }

  return arrayKata.join("");
};

console.log(reversedWord2(input5));
