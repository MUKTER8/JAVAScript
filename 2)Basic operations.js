//Arithmetic operations
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let exponent = a ** b;

console.log("Exponent:", exponent);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

//Unary operations
a++;
b--;
console.log("Incremented a:", a);
console.log("Decremented b:", b);

//Assignment operations
a += 5; // a = a + 5
b -= 2; // b = b - 2
console.log("Updated a:", a);
console.log("Updated b:", b);
//Comparison operations
console.log("Is a equal to b?", a === b);
console.log("Is a not equal to b?", a !== b);
console.log("Is a greater than b?", a > b);
console.log("Is a less than b?", a < b);

//Logical operations
console.log("Is a greater than 10 and b less than 10?", a > 10 && b < 10);
console.log("Is a greater than 10 or b less than 10?", a > 10 || b < 10);
//Bitwise operations
console.log("Bitwise AND of a and b:", a & b);
console.log("Bitwise OR of a and b:", a | b);

//conditional statements
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log("Color based on mode:", color);

//ternary operator
let max = a > b ? a : b;
console.log("Maximum value using ternary operator:", max);
//Switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
