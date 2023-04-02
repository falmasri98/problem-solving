// Question 1 

// Implement a function that returns the minimum element in a stack in constant time complexity.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new MinStack();
stack.push(5);
stack.push(9);
stack.push(11);
console.log(stack.getMin()); 

// Question 2

//Given a queue of integers, reverse the order of the elements in the queue.

function reverseQueue(queue) {
  const stack = [];

  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  return queue;
}
class Queue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  dequeue() {
    return this.elements.shift();
  }

  enqueue(element) {
    this.elements.push(element);
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

const reversedQueue = reverseQueue(queue);

console.log(reversedQueue); 

// Question 3 
// Implement a Queue using 2 stacks s1 and s2.

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  isEmpty() {
    return this.s1.length + this.s2.length === 0;
  }

  enqueue(element) {
    this.s1.push(element);
  }

  dequeue() {
  
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    if (this.s2.length > 0) {
      return this.s2.pop();
    }

    return null;
  }
}
const queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1.dequeue()); 
console.log(queue1.dequeue()); 
queue1.enqueue(4);
queue1.enqueue(5);

console.log(queue1.dequeue()); 
console.log(queue1.dequeue()); 
console.log(queue1.dequeue());

console.log(queue1.dequeue()); 




// // Fibonacci Series:
// let x = 0;
// let y = 1;
// let arr = [0, 1];

// function fibonacci(z) {
//   if (z === 1) return;
//   let z1 = x + y;
//   x = y;
//   y = z1;
//   arr.push(y);
//   fibonacci(z - 1);
// }

// fibonacci(20);
// document.write(`Fibonacci = ${arr}<br>`); 



// // The sum of Array Elements:


// let arr0 = [0, 1, 2, 3];

// function sum1(arr, i) {
//   if (i === arr.length) return 0;
//   return arr[i] + sum1(arr, i + 1);
// }

// const sum = sum1(arr0, 0);
// document.write(`sum = ${sum}<br>`); 


// // Reverse a String:

// let str = "FARAH";
// let strReversed = "";
// let j = str.length - 1;
// let k = 0;

// function reverse(j) {
//   if (j === -1) return strReversed;
//   strReversed += str[j];
//   j--;
//   reverse(j);
// }

// reverse(j);
// document.write(`str reverse = ${strReversed}<br>`); 



