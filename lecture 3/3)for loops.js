let i, n;
n = prompt("Enter a number to sum up to:");
console.log("FOR LOOPS:");
for (i = 0; i < n; i++) {
  console.log(i);
}

let sum = 0;
for (i = 0; i < n; i++) {
  sum += i;
}
console.log("Sum is ", sum);
