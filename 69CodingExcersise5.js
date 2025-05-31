const input = "SelamatPagiSemua";

const splitWord = (str) => {
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrayCapital = capital.split("");
  let result = "";

  for (let a of str) {
    if (arrayCapital.includes(a)) result += " " + a;
    else result += a;
  }

  return result.trim();
};

console.log(splitWord(input));
