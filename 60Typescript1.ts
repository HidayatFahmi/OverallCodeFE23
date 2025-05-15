// - typescript check data  type and code in program beforre code execution
// - type assignment have two ways, explisit and implisit
// - explisit : let name: string = "fahmi";
// - implisit  is same way with js syntax : let namae = "fahmi";
// - different data type with same variable name will error
// - simple primitive type in ts , number, boolean, string etc
// - typescript special types : any, unknown, never, undefined & null. "any eon't throw error, becasuse disable sata type checking"
// - why we need ttypescript : for prevent assign value in same name variable but different data types
// - Array in typescript : const name: string[] = [];
// - Tuple : is typed arraywith predefined length and type for each index
// - tupple exp : let ourTuple: [numbrer, boolean, sctring]:
//   outTuple = [5, false, "coding god was here"]
// - optional variable : variableName?
// - declare variable alises with pascal case : FirstName https://prnt.sc/OeNec4rjkpxK
// - type aslises
// - interface
// - return type , unlike js the type of the value returned by the function can be explicitly defined
// - type void, indicate function doesn't return any value
// - implemntasi function with AI
// - recap : https://prnt.sc/ur7XAESTulfa

let firstName: string = "fahmi";
// let firtsName: string = 4; //error because wront assing value with data type

const user = {
  name: "fahmi",
  id: 1,
};

console.log(user.namez);

// Object in typescript
const carData: { type: string; model: string; year: number } = {
  type: "MX",
  model: "japan",
  year: 2010,
};

console.log(carData.type);

// return type

function getTime(): number {
  return new Date().getDate();
}

console.log(getTime());

// void type
function greeting(): void {
  console.log("Hello !");
}

greeting();

function add(a: number, b: number, c?: number): number {
  return a + b;
}

console.log(add(10, 11));

// ============================ Aliases
type ID = number;

let userId: ID = 101;

// ====== aliases untuk union type
type Status = "active" | "inactive" | "suspended";

let userStatus: Status = "active";

// ====== aliases untuk objek
type User = {
  id: number;
  name: string;
  email: string;
};

let user: User = {
  id: 1,
  name: "Fahmi",
  email: "fahmi@example.com",
};

// aliases untuk function type

type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};

// ====== aliases untuk array of object

type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product[] = [
  { id: 1, name: "laptop", price: 15000000 },
  { id: 2, name: "ketboard", price: 3000000 },
];

// @ts-check

let namaSaya: string = "fahmi";
