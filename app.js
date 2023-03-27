
// Fibonacci Series:
let x = 0;
let y = 1;
let arr = [0, 1];

function fibonacci(z) {
  if (z === 1) return;
  let z1 = x + y;
  x = y;
  y = z1;
  arr.push(y);
  fibonacci(z - 1);
}

fibonacci(20);
document.write(`Fibonacci = ${arr}<br>`); 



// The sum of Array Elements:


let arr0 = [0, 1, 2, 3];

function sum1(arr, i) {
  if (i === arr.length) return 0;
  return arr[i] + sum1(arr, i + 1);
}

const sum = sum1(arr0, 0);
document.write(`sum = ${sum}<br>`); 


// Reverse a String:

let str = "FARAH";
let strReversed = "";
let j = str.length - 1;
let k = 0;

function reverse(j) {
  if (j === -1) return strReversed;
  strReversed += str[j];
  j--;
  reverse(j);
}

reverse(j);
document.write(`str reverse = ${strReversed}<br>`); 
