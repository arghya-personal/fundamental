document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("child clicked");
  },
  true
);

// addEventListener parameter => event type, listener or function, useCapture

// useCapture is a boolean value, by default it takes false

// if false then event bubling up and if true then event trickle down or event capturing occurs.

// here event capturing happened .
