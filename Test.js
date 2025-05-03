let limitStars = 5;

const generateStars1 = () => {
  let bintang = "*";
  let result = "";
  for (let i = 0; i < limitStars; i++) {
    result = "";
    for (let j = 0; j <= i; j++) {
      result += bintang;
      1;
    }
    console.log(result);
  }
};

const generateStars2 = () => {
  let result = "";
  let space = " ";
  for (let a = 0; a < limitStars; a++) {
    result = "";
    for (let b = limitStars - a - 1; b >= 0; b--) {
      result += space;
    }
    for (let c = 0; c <= a; c++) {
      result += "*";
    }
    console.log(result);
  }
};

generateStars1();
console.log("=============== triangle 2 ==================");
generateStars2();
