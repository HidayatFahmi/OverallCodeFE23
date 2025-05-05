// SOAL 2 —> Wajib Dikerjakan
// buat function

// input : const number = 15

// buat function yang mendeclare :
// aha habis dibagi 3
// ihi habis dibagi 5
// aha ihi, habis dibagi 3&5

// ====================== cara 1
const number = 15;

const ahaIhiUhu = (arr) => {
  let result = [];
  for (let a = 1; a <= arr; a++) {
    if (a % 3 == 0 && a % 5 == 0) result[a - 1] = "uhu";
    else if (a % 3 == 0) result[a - 1] = "aha";
    else if (a % 5 == 0) result[a - 1] = "ihi";
    else result[a - 1] = a;
  }

  return result;
};

console.log(ahaIhiUhu(number));

// ============= Cara 2 dengan method push

function ahaIhiUhu2(arr) {
  let result = [];
  for (let a = 1; a <= arr; a++) {
    if (a % 3 == 0 && a % 5 == 0) result.push("uhu");
    else if (a % 3 == 0) result.push("aha");
    else if (a % 5 == 0) result.push("ihi");
    else result.push(a);
  }

  return result;
}

console.log(ahaIhiUhu2(number));
