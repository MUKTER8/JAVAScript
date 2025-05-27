const sum = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

const subtract = (a, b) => {
  console.log(`Subtracting ${b} from ${a}`);
  return a - b;
};

const multiply = (a, b) => {
  console.log(`Multiplying ${a} and ${b}`);
  return a * b;
};

const divide = (a, b) => {
  console.log(`Dividing ${a} by ${b}`);
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
};

const calculate = (n1, n2, operation) => {
  switch (operation) {
    case "+":
      return sum(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      return "Error: Invalid operation";
  }
};
const main = () => {
  const n1 = parseFloat(prompt("Enter first number:"));
  const n2 = parseFloat(prompt("Enter second number:"));
  const operation = prompt("Enter operation (+,-,*,/):");

  const result = calculate(n1, n2, operation);
  console.log(`Result: ${result}`);
};
main();
