let n1, n2;
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function calculate(n1, n2, operation) {
  switch (operation) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      return "Error: Invalid operation";
  }
}
function main() {
  n1 = prompt("Enter first number:");
  n2 = prompt("Enter second number:");
  const operation = prompt("Enter operation (+,-,*,/):");

  const result = calculate(n1, n2, operation);
  console.log(`Result: ${result}`);
}
main();
