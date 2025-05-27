let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//square of each element in the array
let calculateSquare = (arr) => {
  console.log(`Square of ${arr} is:`, arr * arr);
};
arr.forEach(calculateSquare);

//cube of each element in the array
arr.forEach(
  (calculateCube = (arr) => {
    console.log(`Cube of ${arr} is:`, arr * arr * arr);
  })
);

//map method to create a new array with each element decremented by 1
let newArr = arr.map((arr) => {
  return arr - 1;
});
console.log("New Array with squares:", newArr);

//filter method to create a new array with elements greater than 5
let filteredArr = arr.filter((arr) => {
  return arr > 5;
});
console.log("Filtered Array with elements greater than 5:", filteredArr);

//reduce method to calculate the sum of all elements in the array
const initialValue = 0;
const sum = arr.reduce(
  (result, currentValue) => result + currentValue,
  initialValue
);
console.log("Sum of all elements in the array using reduce method:", sum);

//reduce method to calculate minimum and maximum value in the array
const Max = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
const Min = arr.reduce((prev, curr) => {
  return prev < curr ? prev : curr;
});

console.log("Minimum value in the array using reduce method:", Min);
console.log("Maximum value in the array using reduce method:", Max);
 