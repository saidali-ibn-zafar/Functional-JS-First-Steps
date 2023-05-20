// iterator function
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};
countToTen();

// recursive function
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};

recurToTen();

// Without Recursion:
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

fibonacci(12);

// With Recursion

const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast1, last1] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast1 + last1]);
};

fib(12);

// Without Recursion FIBONACCI POSITION;
const fibonacciPos = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};

console.log(fibonacciPos(7));

// With Recursion
const fibPos1 = (pos) => {
  if (pos < 2) return pos;
  console.log(fibPos1(pos - 1) + fibPos1(pos - 2));
  return fibPos1(pos - 1) + fibPos1(pos - 2);
};

console.log(fibPos1(6));


// REPEATING PROGRAM
//with while loop
function repetition(txt, n) {
	let result = '';
	while(n > 0){
		result += txt;
		n--;
	}
	return result;
}
repetition('*', 7);

//with recursion
const repetition = (txt, n=> {
	if(n < 0){
		return "";
	}
	if(n === 1){
		return txt;
	}
	else{
		return txt + repetition(txt, n- 1);
	}
} 

repetition('Saidali', 7);

//with repeat();
const repetition = (txt, n) => txt.repeat(n);
repetition('Ali', 5);

//much more better, because we need to check if the n is positive or not!
const repetition = (txt, n) => n ? txt.repeat(n) : "";
repetition('Ali', 2);


//multiplying
function multiSum(num, ten=10) {
	return num && ten ? num * ten + multiSum(num, ten-1) : 0
}

// OR THIS WAY
const multiSum = (num, ten=10) => num && ten ? num * ten + multiSum(num, ten-1) : 0

///////////////////////////////////////////
function factorial(n) {
	if(n < 1) return 1;
	return n * factorial(n-1);
}
///////////////////////////////////////////
const factorial = (n) => n ? n * factorial(n-1) : 1;
///////////////////////////////////////////

const addUp = (n) => n ? n * (n+1)/2 : 1; // but we did not use recursion in this case
//so do it with below:
const addUp = (n) => n > 1 ? n + addUp(n-1) : 1;

///////////////////////////////////////////
const numberSquares = (n) => n > 1 ? n ** 2 + numberSquares(n-1) : 1;
///////////////////////////////////////////


///////////////////////////////////////////
const doubleFactorial = (num) => num > 1 ? num * doubleFactorial(num-2) : 1;
///////////////////////////////////////////

///////////////////////////////////////////
	const sumArray = (arr) => {
	arr = arr.flat(Infinity);
	return arr.length > 0 ? arr.reduce((sum, n) => sum + n, 0) : 0;
	}
	sumArray([1,2,3,4]);
///////////////////////////////////////////


///////////////////////////////////////////

function findHighest(arr) {
	arr = arr.flat(Infinity);
	const arrSorted = [...arr].sort((a,b) => a - b);
	return arrSorted.length > 0 ? arrSorted[arrSorted.length-1] : 0;
} 

findHighest([1,2,3,4,5]);
///////////////////////////////////////////

///////////////////////////////////////////
const findHighest= (arr) => {
	const arrSorted = [...arr].flat(Infinity).sort((a,b) => a - b);
	return arrSorted.length > 0 ? arrSorted[arrSorted.length-1] : 0;
} 

findHighest([1,2,3,4,5]);
///////////////////////////////////////////

///////////////////////////////////////////
function findHighest(arr,max = 0){
	const lastArrEl = arr.pop();
	max = max > lastArrEl ? max : lastArrEl;
  return arr.length ? findHighest(arr,max) : max
}
/////////////////////////////////////////// 

/////////////////////////////////////////// 
const largestEven = arr => Math.max(...arr.filter(num => num % 2 === 0), -1);
/////////////////////////////////////////// 


/////////////////////////////////////////// 
function collatz(num) {
	return num === 1 ? 0 : collatz(num % 2 ? num * 3 + 1 : num / 2) + 1;
}
/////////////////////////////////////////// 

/////////////////////////////////////////// 
const collatz = (num) => {
	return num === 1 ? 0 : collatz(num % 2 ? num * 3 + 1 : num / 2) + 1; 
}
/////////////////////////////////////////// 

/////////////////////////////////////////// 
const isPalindrome = (str) => {
	const reversedStrCopy = str.split('').reverse().join('');
	return str === reversedStrCopy ? true : false;
}
/////////////////////////////////////////// 

//below codes are coooool;
///////////////////////////////////////////
const isPalindrome = str => str.length < 2 ? true : str.endsWith(str[0]) ? isPalindrome(str.slice(1,-1)) : false;
/////////////////////////////////////////// 


//FIND GCD
///////////////////////////////////////////
const gcd = (n1, n2) => n2 === 0 ? n1 : gcd(n2, n1 % n2); 
///////////////////////////////////////////

///////////////////////////////////////////
const sumDigit = (n) => n !== 0 ? n % 10 + sumDigit(parseInt(n / 10)) : 0;
///////////////////////////////////////////

///////////////////////////////////////////
const fib = (n) => n >= 2 ? fib(n-1) + fib(n-2) : n;
///////////////////////////////////////////

// Consider an array of objects representing different products in a shopping cart, like the one shown below:

let cart = [
  { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
  { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
  { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
  { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
  { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 }
];

// Write a JavaScript function that calculates the total cost of all 'Fruit' items in the cart. Please ensure your function adheres to functional programming principles and avoids changing the original 'cart' array.

// const totalCostOfFruits = Array.prototype.reduce.call(cart, (acc, element) => acc + element.quantity * element.price , 0);

const totalCostOfFruits = cart.filter(el => el.category === 'Fruit').reduce((acc, element) => {
    return acc + element.quantity * element.price 
}, 0)

// console.log(totalCostOfFruits);

// Write a pure function named sumArray that takes an array of numbers as an input and returns the sum of all the numbers in the array. A pure function should not alter any external state and should always produce the same output given the same input. 

const sumArray = (arr) => {
    if(arr.length === 0){
        return 0;
    }
    else if(arr.length === 1){
        return arr[0];
    }
    else{
        return arr[0] + sumArray(arr.slice(1));
    }
}

// console.log(sumArray([]));

// Write a function named createAdder that takes one argument, x. This function should return a new function that takes one argument, y, and returns the sum of x and y. 

const createAdder = (x) => {
    return (y) => {
        return x + y;
    }
}

// Write a function named curry that takes a function and returns a curried version of the function. The curried function should be callable as a chain of functions, each with a single argument. For example, if there was a function add defined by function add(x, y, z) { return x + y + z; }, then curry(add)(1)(2)(3) should return 6.

function add(x, y, z) {
  return x + y + z;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6

// immutability
// mutability


