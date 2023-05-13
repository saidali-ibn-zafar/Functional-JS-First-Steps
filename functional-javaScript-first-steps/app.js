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

//  ITERATION
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
sum([0, 1, 2, 3, 4]); //10

// RECURSION
function sumNums(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    return nums[0] + sumNums(nums.slice(1));
  }
}
sum([0, 1, 2, 3, 4]); //10

// recursiveFibonacci
function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
let res = recursiveFibonacci(10);
console.log(res);

// first class FUNCTIONS
// !!! can be passed around as value (like callbacks!)

// higher-order functions
// take other functions as input/output

// Remember : Dont loop
// use higher-order functions like map, reduce , filter instead

// ................................................
// HIGHER-ORDER functions filter(), map(), reduce();

// function filter(predicateFn, array) {
//   if (length(array) === 0) return [];
//   const firstItem = head(array);
//   const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
//   return concat(filteredFirst, filter(predicateFn, tail(array)));
// }

function length(array) {
  return array.length;
}

const exampleArr = [1, 2, 3, 4, 5];
console.log(length(exampleArr));

//////////////////////////////////////////////////
function isEven(n) {
  return n % 2 === 0;
}

const wholes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// odds = filter((n) => {
//   return n % 2 !== 0;
// }, wholes);

// greaterThanFour = filter((num) => {
//   return num > 4;
// }, wholes);

// IS IT PRIME?
function isPrime(n) {
  if (n <= 1) return false;
  const wholeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = wholes.filter((m) => m > 1 && m < n);
  const factors = possibleFactors.filter((m) => n % m === 0);
  return factors.length === 0 ? true : false;
}

// CLOSURE
function makeAdjectifier(adjective) {
  return function (noun) {
    return adjective + " " + noun;
  };
}

const coolify = makeAdjectifier("cool");
coolify("workshop");
coolify("weather");

// CURRYING
function curryGreet(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const greetItalian = curryGreet("Ciao");
greetItalian("Ali");

const greetTex = curryGreet("Howdy");
greetTex("Usman");
greetTex("Zubary");

// COMPOSING FUNCTIONS
let ender = (ending) => (input) => input + ending;

let adore = ender(" rocks");
let announce = ender(", y'all");
let exclaim = ender("!");

let hypeUp = (x) => exclaim(announce(adore(x)));
hypeUp("JS"); // "JS rocks, y'all!"
hypeUp("FP"); // "FP rocks, y'all!"

// CLOSURE EXAMPLE FROM BRO CODE YOUTUBE
let score = (function () {
  let points = 0;

  return function () {
    points += 1;
    return points;
  };
})();

console.log(score);
console.log(score);
console.log(score);
