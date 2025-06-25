// JavaScript code to demonstrate prototype inheritance
// and method invocation through prototype chain
const employee = {
  calTax1() {
    console.log("tax rate is 10%");
  },
};

const emp1 = {
  salary: 50000,
};
const emp2 = {
  salary: 60000,
  calTax() {
    console.log("tax rate is 20%");
  },
};
const emp3 = {
  salary: 70000,
};
const emp4 = {
  salary: 80000,
};

emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;
emp4.__proto__ = employee;
