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

let changeColor = (h1.style.backgroundColor = "red");
console.log(changeColor);

//add new elements
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
let list = document.querySelectorAll("div");
// list[1].append(newBtn);
// list[1].prepend(newBtn);
//list[1].before(newBtn);
list[1].after(newBtn);
console.log(list);

//remove the node
para.remove();

console.log(newBtn);
