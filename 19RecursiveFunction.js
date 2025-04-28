const sayHello = (n) => {
  if (n === 0) {
    console.log("\nGood Night! \n");
    return;
  }
  console.log(`Hello World !!!`);
  sayHello(n - 1);
};

sayHello(5);
