let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };
//add event
btn1.addEventListener("click", (evt) => {
  console.log("btn was clicked-handler1");
});
btn1.addEventListener("click", (evt) => {
  console.log("btn was clicked-handler2");
});
//assign handler function in handler3

const handler3 = () => {
  console.log("btn was clicked-handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
  console.log("btn was clicked-handler4");
});
//remove handler3 using removeListener
btn1.removeEventListener("click", handler3);
