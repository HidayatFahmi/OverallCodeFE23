let fruits = ["apple", "orange", "peneaple", "mango", "grape"];
let randomTake = Math.ceil(Math.random() * 5);
let takedFruits = fruits[randomTake];

console.log(randomTake);

switch (takedFruits) {
  case "apple":
    console.log(`you choose Apel`);
    break;
  case "peneaple":
    console.log(`you choose nanas`);
    break;
  case "mango":
    console.log(`you choose mangga`);
    break;
  case "orange":
    console.log(`you choose Jeruk`);
    break;
  case "grape":
    console.log(`you choose anggur`);
    break;
  default:
    console.log(`you not even choose anythings`);
}
