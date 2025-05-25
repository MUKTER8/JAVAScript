// let user to input a number using prompt ("Enter a number: "); check if the number is a multiple of 5 or not.
let number = prompt("Enter a number: ");
if (number % 5 === 0) {
  console.log(number, "is a multiple of 5.");
} else {
  console.log(number, "is not a multiple of 5.");
}

// write a code which can give grades to students according to their scores:
//80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let score = prompt("Enter the student's score: ");
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score < 80) {
  console.log("Grade: B");
} else if (score >= 60 && score < 70) {
  console.log("Grade: C");
} else if (score >= 50 && score < 60) {
  console.log("Grade: D");
} else if (score < 50) {
  console.log("Grade: F");
}
