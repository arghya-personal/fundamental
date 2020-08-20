/*
Here we will understand call, apply and bind method
*/

let name = {
  firstName: "Arghya",
  lastName: "Chowdhury"
  // fullName: function () {
  //   console.log(this.firstName + " " + this.lastName);
  // }
};

let fullName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown);
};

fullName.call(name, "Kolkata");

let anotherName = {
  firstName: "John",
  lastName: "Lenon"
};

fullName.apply(anotherName, ["krishnanagar"]);

// bind method returns a method or function which will call later
// bind method gives you the copy which can be invoked later where as call method invoked directly

let bindFu = fullName.bind(name, "kolktat");
console.log(bindFu);
bindFu();
