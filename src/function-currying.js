let multiply = (x, y) => {
  return x * y;
};
console.log(multiply(2, 3)); // simple example

let myltiplyBy2 = multiply.bind(this, 2); // function currying, we just copy the muliply method here where x value is 2
console.log(myltiplyBy2(5));

// instead of binding method we can use function closure for that

let closureMultiply = (x) => {
  return (y) => {
    console.log(x * y);
  };
}; // A function that returns another function called closure, somethime it may call as higoher order function

let muliplyBy4 = closureMultiply(4);
console.log(muliplyBy4(6));
