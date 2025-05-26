i = 0;
n = prompt("Enter a number for even using do while loop:");
console.log("even number using DO WHILE LOOP :", n);
do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= n);
