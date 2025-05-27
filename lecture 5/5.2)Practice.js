//create a function using the "function" keyword that takes a string as an argument & returns the number of vowles in the string.

let Str = prompt("Enter a string :");
let i,
  cCount = 0,
  vCount = 0;
function countVowel(Str) {
  Str = Str.toLowerCase(); // Convert string to lowercase for uniformity
  for (i = 0; i < Str.length; i++) {
    if (
      Str[i] === "a" ||
      Str[i] === "e" ||
      Str[i] === "i" ||
      Str[i] === "o" ||
      Str[i] === "u"
    ) {
      console.log("Vowel is :", Str[i]);
      vCount += 1;
    } else {
      console.log("Consonant is :", Str[i]);
      cCount += 1;
    }
  }
  console.log(" Vowel of the string is :", vCount);
  console.log(" Consonant of the string is :", cCount);
}

countVowel(Str);
