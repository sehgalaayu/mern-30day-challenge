const add = function sum(a, b) {
  return a + b;
};

const checkOddEven = function (no) {
  if (no % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
};

const findLargest = function (a, b, c) {
  let arr = [a, b, c];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
};
const celsiusToFahrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};

console.log(add(2, 3));
console.log(checkOddEven(4));
console.log(findLargest(1, 5, 7));
console.log(celsiusToFahrenheit(0));
