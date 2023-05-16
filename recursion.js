// iterator function
// const countToTen = (num = 1) => {
//   while (num <= 10) {
//     console.log(num);
//     num++;
//   }
// };
// countToTen();

// recursive function
// const recurToTen = (num = 1) => {
//   if (num > 10) return;
//   console.log(num);
//   num++;
//   recurToTen(num);
// };

// recurToTen();

// Without Recursion:
// const fibonacci = (num, array = [0, 1]) => {
//   while (num > 2) {
//     const [nextToLast, last] = array.slice(-2);
//     array.push(nextToLast + last);
//     num -= 1;
//   }
//   return array;
// };

// fibonacci(12);

// With Recursion

// const fib = (num, array = [0, 1]) => {
//   if (num <= 2) return array;
//   const [nextToLast1, last1] = array.slice(-2);
//   return fib(num - 1, [...array, nextToLast1 + last1]);
// };

// fib(12);

// Without Recursion FIBONACCI POSITION;
// const fibonacciPos = (pos) => {
//   if (pos <= 1) return pos;
//   const seq = [0, 1];
//   for (let i = 2; i <= pos; i++) {
//     const [nextToLast, last] = seq.slice(-2);
//     seq.push(nextToLast + last);
//   }
//   return seq[pos];
// };

// console.log(fibonacciPos(7));

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
