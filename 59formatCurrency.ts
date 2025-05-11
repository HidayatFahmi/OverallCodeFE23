// import currency from "currency";

// Complete this function,  so that it returns a formatted currency string. For example, if the input is 1000 and "Rp", it should return "Rp1000".
// And if the input is 2500 and "$", it should return "$2500".
// If currency type doesnt provided just return the amount as a string.
function formatCurrency(amount: number, currency?: string): string {
  // TODO: implement this function
  if (currency != undefined) {
    return `${currency}${amount}`;
  } else return `${amount}`;

  //   or with ternary operator
  return currency ? `${currency}${amount}` : `${amount}`;
}

// Same with previous function, but this time the input must be and object that has properties `amount` and `currency`. For example:
// { amount: 1000, currency: "Rp" }
// If the currency type is not provided, just return the amount as a string.
// Example output: "Rp1000"
// Make sure you make type or interface for the input object.
interface CurrencyInput {
  amount: number;
  currency?: string;
}
// cara 1
function formatCurrencyObject(input: CurrencyInput): string {
  if (input.currency != undefined) return `${input.currency}${input.amount}`;
  else return `${input.amount}`;
}

// cara 2
function formatCurrencyObject(input: CurrencyInput): string {
  return input.currency
    ? `${input.currency}${input.amount}`
    : input.amount.toString();
}

console.log(formatCurrency(1000, "RP"));
console.log(formatCurrency(7000, "$"));
console.log(formatCurrency(1000));

console.log(formatCurrencyObject({ amount: 3000, currency: "Rp" }));
console.log(formatCurrencyObject({ amount: 3000, currency: "$" }));
console.log(formatCurrencyObject({ amount: 4500 }));
