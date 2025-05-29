//create 3 div with common class name"box".
// Access them and add some unique text to each of them
let divs = document.querySelectorAll(".box");

for (div of divs) {
  console.log(div.innerText);
}
let i = 1;
for (div of divs) {
  div.innerText = `new unique value ${i}`;
  i++;
}
console.log("After changes:");
for (div of divs) {
  console.log(div.innerText);
}
