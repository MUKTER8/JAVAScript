let subject = ["Math", "English", "Science", "History", "Geography"];
console.log("The subject is: ", subject);

// Length of the array
console.log("Length of subject is: ", subject.length);

//Push a new subject to the end of the array
subject.push("Art", "Computer");
console.log("The updated subject list is: ", subject);

// Use pop to remove the last element
subject.pop();
console.log("The subject list after pop is: ", subject);

// use shift to remove the first element
subject.shift();
console.log("The subject list after shift is: ", subject);

// use unshift to add a new subject at the beginning
subject.unshift("Physical");
console.log("The subject list after unshift is: ", subject);

// Change the subject at index 2
subject[2] = "Biology";
console.log("The subject list after changing index 2 is: ", subject);

// Add a new subject at index 2 using splice
subject.splice(2, 1, "Chemistry");
console.log("The subject list after splice is: ", subject);

// Sort the array
subject.sort();
console.log("The subject list after sort is: ", subject);

// Reverse the array
subject.reverse();
console.log("The subject list after reverse is: ", subject);

// Loop through the array and print each subject
console.log("Using for loop through the subject array:");
for (let i = 0; i < subject.length; i++) {
  console.log("The subject at index " + i + " is: ", subject[i]);
}

//for of loop
console.log("Using for-of loop through the subject array:");
for (let sub of subject) {
  console.log("The subject is: ", sub);
}

//average marks of students
let marks = [85, 90, 78, 92, 88, 85];
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);

  // Calculate total marks
  totalMarks += marks[i];
}
let averageMarks = totalMarks / marks.length;
console.log("The average marks of the students is: ", averageMarks);

//subjects with marks using map()
let subjectsWithMarks = subject.map((sub, index) => `${sub}: ${marks[index]}`);
console.log("Subjects with marks: ", subjectsWithMarks);

//convert array to string
let marksString = marks.toString();
console.log("The marks in string format is: ", marksString);

// Find the maximum & minimum marks
let maxMarks = marks[0];
let minMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > maxMarks) {
    maxMarks = marks[i];
  }
  if (marks[i] < minMarks) {
    minMarks = marks[i];
  }
}
console.log("The maximum marks of the students is: ", maxMarks);
console.log("The minimum marks of the students is: ", minMarks);

//for a given array with prices of 5 items->[250,645,120,450,300]
//all items have an offer of 10% off,print the final price of each item after applying the offer.
let prices = [250, 645, 120, 450, 300];
let finalPrices = [];

for (let i = 0; i < prices.length; i++) {
  let finalPrice = prices[i] - prices[i] * 0.1; // Applying 10% discount
  finalPrices.push(finalPrice);
  console.log("original price: ", prices[i]);
  console.log("offer prices  : ", finalPrices[i]);
}
