// ==============================
// PURE AND NOT PURE FUNCTIONS
// ==============================

// not pure function = = = = = = = = = = = = = = =
let name = "Saidali";
function greet() {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Saidali!

name = "Umar";
greet(); // Hello, Umar!

// pure function = = = = = = = = = = = = = = = = =
function greeting(name) {
  return `Hello, ${name}`;
}

greet("Saidali"); // Hello, Saidali!

greet("Umar"); // Hello, Umar!

// ==============================
// IMPERATIVE AND FUNCTIONAL
// ==============================

// imperative = = = = = = = = = = = = = = =
let name1 = "Ali";
let greeiting = "Hi";

console.log(`${greeting}, ${name1}`);
// Hi, Ali

greeting = "Howdy";
console.log(`${greeting}, ${name}`);
// Howdy, Ali

// functional = = = = = = = = = = = = = = =

function greeting1(greeting, name) {
  return `${greeiting}, ${name}!`;
}

greeting1("Hi", "Umar");
// Hi, Umar!

greeting1("Howdy", "Umar");
// Howdy, Umar!

// ==============================
// SIDE EFFECTS
// ==============================

let thesis = { name: "Ali", date: 1991 };
function renameThesis(newName) {
  thesis.name = newName;
  console.log("Renamed!");
}

renameThesis("Saidali-Ibn_Zafar"); // Renamed!
thesis; // {name: "Saidali-Ibn-Zafar", date: 1991}

// ==============================
// NO SIDE EFFECTS
// ==============================

// let thesis = { name: "Ali", date: 1991 };
function renameThesis1(oldThesis, newName) {
  return {
    name: newName,
    date: oldThesis.date,
  };
}

const thesis2 = renameThesis1(thesis, "Saidali");
thesis; // {name: "Ali", date: 1991}
thesis2; // {name: "Saidasli", date: 1991}

 