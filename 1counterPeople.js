let people = [
  "andi",
  "leo",
  "geri",
  "thomas",
  "alea",
  "lerma",
  1,
  "sweas",
  true,
  "",
];

let countingPeople = 0;
let continueCounting = true;
let index = 0;

while (continueCounting) {
  if (typeof people[index] == "string" && people[index].length > 0) {
    countingPeople++;
  } else if (people[index] == undefined) continueCounting = false;
  index++;
}

console.log(countingPeople);
console.log("asdsds");
console.log(Math.sqrt(5));
