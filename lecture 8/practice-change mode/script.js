let modeBtn = document.querySelector("#btn1");
let body = document.querySelector("body");
let currMode = "Light"; //dark

modeBtn.addEventListener("click", () => {
  console.log("try to change mode");
  if (currMode == "Light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "Light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
