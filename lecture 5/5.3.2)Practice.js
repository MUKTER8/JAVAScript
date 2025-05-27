let marks = [91, 82, 93, 84, 95];

let maxMarks = marks.filter((val) => {
  return val > 90;
});
console.log(maxMarks);

let n = prompt("Enter the value of n:");
let arr = [];
// Prompt the user to enter n values and store them in the array
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);
const sum = arr.reduce((result, currentValue) => {
  return result + currentValue;
});
console.log("Sum of all elements in the array using reduce method:", sum);

const product = arr.reduce((result, currentValue) => {
  return result * currentValue;
});
console.log(
  "Product of all elements in the array using reduce method:",
  product
);
