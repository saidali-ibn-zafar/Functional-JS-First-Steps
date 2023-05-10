// PURE AND NOT PURE FUNCTIONS

// not pure function = = = = = = = = = = = = = = = = = =
let name = "Saidali";
function greet() {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Saidali!

name = "Umar";
greet(); // Hello, Umar!

// pure function = = = = = = = = = = = = = = = = = =
function greeting(name) {
  return `Hello, ${name}`;
}

greet("Saidali"); // Hello, Saidali!

greet("Umar"); // Hello, Umar!
