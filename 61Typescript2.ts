let name: string = "fahmi hidayat";
let studentsData: string[] = ["fahmi", "hidayat", "leo", "ihsan", "leonord"];
let ourTuple: [number, string, boolean] = [1, "fahmi hidayat", true];

// optional variable
let myName: string = "fahmi hidayat";
let myAge: number = 26;
let myCity: string = "Bangka Belitung";

const greeting = (name: string, age: number, city?: string): void => {
  console.log(`Helo my name is ${name}, Im ${age} years old from ${city}`);
};

greeting(myName, myAge);

// alises
type UserID = number;

let id: UserID = 1;

// alias pada object
type UserId = {
  id: number;
  name: string;
  email: string;
};

let userId: UserId = {
  id: 1,
  name: "fahmi hidayat",
  email: "fahmihd22@gmail.com",
};

// alias pada function
type GreetFn = (name: string) => void;

const greetFn: GreetFn = (name) => {
  console.log(`Hello my name is ${name}`);
};

greetFn("fahmi hidayat");

// union
type MyId = number | string;
let myId: string | number;

const myData = (myId): void => {
  if (typeof myId == "number") {
    console.log(`hello my name is fahmi hidayat and my ID is ${myId}`);
  } else {
    console.log(`helo.. friends`);
  }
};

myData("3");
