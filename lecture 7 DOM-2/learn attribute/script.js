//getAttribute
let h1 = document.querySelector("div");
console.log(h1);

let id = h1.getAttribute("id");
console.log(id);

let name = h1.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
//setAttribute
console.log(para.setAttribute("class", "newClass"));
console.log(para.getAttribute("class"));

//style.node
console.log(h1.style);

let changeColor=h1.style.backgroundColor="red";
console.log(changeColor);
