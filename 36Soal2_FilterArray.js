// const { customFilterArrayByThreshold } = require("./test");

/**
 * Rest Parameter
 * Create a function that takes a threshold and an array of numbers as arguments.
 *  * The function should return a new array containing only the numbers greater than the threshold.
 *  * The function should use the rest parameter syntax to accept the array of numbers.
 */

// const customFilterArrayByThreshold = (thresholdNumber, ...arrayNumberData) => {
//   // Condition to check if the threshold is < 0
//   if(thresholdNumber < 0 || typeof thresholdNumber !== 'number') {
//     return "Threshold must be a number greater than 0";
//   }

//   // Filter the array based on the threshold
//   return arrayNumberData.filter((number) => number > thresho

const customFilterArrayByThreshold = (thresholdNumber, ...arrayNumberData) => {
  if (thresholdNumber < 0 || typeof thresholdNumber !== "number") {
    return "Threshold must be a number greater than 0";
  }
  return arrayNumberData.filter((number) => number > thresholdNumber);
};

console.log(customFilterArrayByThreshold(10, 5, 15, 20, 8, 25));
console.log(customFilterArrayByThreshold(-5, 10, 20));
