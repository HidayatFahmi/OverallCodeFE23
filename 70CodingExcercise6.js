// Word Formatter

let input = "SelAmaT PaGi fahMI hiDaYAt";

let wordFormated = (word) => {
  let result = "";
  let activeUpperCase = true;

  for (let a = 0; a < word.length; a++) {
    let temp = "";
    temp = activeUpperCase ? word[a].toUpperCase() : word[a].toLowerCase();

    activeUpperCase = word[a] == " " ? true : false;
    result += temp;
  }

  return result;
};

console.log(wordFormated(input));
