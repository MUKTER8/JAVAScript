let arr = [1, 2, 3, 4, 5];
let city = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
arr.forEach((val) => {
  console.log(val);
});

city.forEach((val, idx) => {
  console.log(val.toUpperCase(), idx);
});
