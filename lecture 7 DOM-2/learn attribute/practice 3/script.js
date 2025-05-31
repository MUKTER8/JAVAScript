let para = document.querySelectorAll("p");
console.log(para);

//using classList for change style. why not get or set attribute?
// because if we use that then whole style change if we try to change specific then use classlist
para[1].classList.add("newClass");
// if remove
//para[1].classList.remove("newClass");
//if replace
//para[1].classList.replace("newClass");
//if toggle
//para[1].classList.toggle("newClass");