let heading = document.getElementById("headingId"); //h1
console.dir(heading);
console.log(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let allParagraph = document.getElementsByTagName("p");
console.dir(allParagraph);
console.log(allParagraph);

//Query Selector with tag
let firstElements = document.querySelector("p"); //Returns  1st element
console.dir(firstElements);
console.log(firstElements);

let allElements = document.querySelectorAll("p"); //Returns a Node List
console.dir(allElements);
console.log(allElements);

//Query Selector with class
let firstCls = document.querySelector(".heading-class"); //Returns  1st element
console.dir(firstCls);
console.log(firstCls);

let allCls = document.querySelectorAll(".heading-class"); //Returns a Node List
console.dir(allCls);
console.log(allCls);

//Query Selector with Id

let Id = document.querySelector("#headingId"); //Returns  1st element
console.dir(Id);
console.log(Id);
