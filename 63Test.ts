// https://learn.dibimbing.id/class/653/contents?source=&contentId=14916&tab=0
// outline
// 1. class and object
// 2 generic
// - integration with framework

// - class alass are a template for creating objects, they encapsulation data with code to work on that data
// - this method/function inside a class, that we can call/use
// - Generic : alow function to be more genereal, by makking its props and return types a variable
// - generic juga bisa digunakan agar bisa menulis function dengan tugas a=yang sama tapi memiliki tipe data berbeda, bisa dengan any tapi tidak disatankan maka gunakan generic
// - Integration with framework, typescript already integrated with many framework
// - 2026 vanilla js will stop by other framework is means you need to learn more typescript
//  how to init next.js step
// 1. npx crate-next-app@latest
// 2. open folder, npm i
// recap https://prnt.sc/CKgAnT8QAym1

class Car {
  public brand: string;
  public model: string;
  private year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public info(): string {
    return `brand = ${this.brand}, model = ${this.model} tahun = ${this.year}`;
  }
}

const myCar = new Car("toyota", "avanza", 2017);
// console.log(myCar.year);
console.log(myCar.info());

// ===================== Generic

function printParam(param: string): string {
  console.log(`${param}`);
}

function printParam(param: number): number {
  console.log(printParamNUmber);
}

// solusi
function printParam<T>(param: T): T {
  console.log(`${param}`);
}

printParam<string>("Hello");
printParam<number>(66);

// Generi dengan baynyak parameter dengan tipe data berbeda

function printIt<T, U>(a: T, b: U): [T, U] {
  console.log(`${a} and ${b}`);
  return [a, b];
}

let result = printIt<number, string>(33, "Hello");
console.log(result);

// Generic pada object
interface Data<T> {
  value: T;
}

const data: Data<number> = {
  value: 200,
};

console.log(data.value);

// =============== contoh 2
interface Response<T> {
  status: number;
  message: string;
  data: T;
}

const response: Response<{ name: string; age: number }> = {
  status: 200,
  message: "Lulus",
  data: { name: "fahmi hidayat", age: 26 },
};

// ===== Generic pada function dengan parameter object lebih dari 1

function data<T, U, V>(obj1: T, obj2: U, obj3: V): T & U & V {
  return { ...obj1, ...obj2, ...obj3 };
}

const result = mergeThreeObjects(
  { name: "fahmi" },
  { age: 25 },
  { lulus: true }
);

console.log(result);
