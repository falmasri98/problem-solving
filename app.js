// linked list task

// linked list
///////////// Q1 \\\\\\\\\\\\\\
// Create a function that takes a LinkedList and deletes the middle node in it and returns it
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  addNode(data) {
      const new_node = new Node(data);
      if (!this.head) {
          this.head = new_node;
          this.tail = this.head;
      } else {
          this.tail.next = new_node;
          this.tail = new_node;
      }
      this.length++;
  }


  deleteMiddleNode() {
      if (this.length < 2) {
          return this.head;
      }
      const middle = Math.floor(this.length / 2);
      let prevNode = null;
      let currNode = this.head;
      for (let i = 0; i < middle; i++) {
          prevNode = currNode;
          currNode = currNode.next;
      }
      prevNode.next = currNode.next;
      this.length--;
      return this.head;
  }


}


const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);


// Before deleting middle node
console.log(linkedList);

linkedList.deleteMiddleNode();

// After deleting middle node
console.log(linkedList);







//////////////// Q2 \\\\\\\\\\\\\\\\\
// Create a function that takes a LinkedList and reverses it
class ListNode {
  constructor(data) {
      this.data = data;
      this.next = null;
  }

}

class LinkedList {
  constructor(head = null) {
      this.head = head;
  }



  reverse(node1) {
      var prev = null;
      var current = node1;
      var next = null;
      while (current != null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }
      node1 = prev;
      return node1;
  }
}
let node1 = new LinkedList(1);
let node2 = new LinkedList(2);
let node3 = new LinkedList(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list);

console.log(list.reverse(node1));








// // Question 1 

// // Implement a function that returns the minimum element in a stack in constant time complexity.

// class MinStack {
//   constructor() {
//     this.stack = [];
//     this.minStack = [];
//   }

//   push(val) {
//     this.stack.push(val);
//     if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
//       this.minStack.push(val);
//     }
//   }

//   pop() {
//     const val = this.stack.pop();
//     if (val === this.minStack[this.minStack.length - 1]) {
//       this.minStack.pop();
//     }
//     return val;
//   }

//   top() {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin() {
//     return this.minStack[this.minStack.length - 1];
//   }
// }

// const stack = new MinStack();
// stack.push(5);
// stack.push(9);
// stack.push(11);
// console.log(stack.getMin()); 

// // Question 2

// //Given a queue of integers, reverse the order of the elements in the queue.

// function reverseQueue(queue) {
//   const stack = [];

//   while (!queue.isEmpty()) {
//     stack.push(queue.dequeue());
//   }

//   while (stack.length > 0) {
//     queue.enqueue(stack.pop());
//   }

//   return queue;
// }
// class Queue {
//   constructor() {
//     this.elements = [];
//   }

//   isEmpty() {
//     return this.elements.length === 0;
//   }

//   dequeue() {
//     return this.elements.shift();
//   }

//   enqueue(element) {
//     this.elements.push(element);
//   }
// }
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// const reversedQueue = reverseQueue(queue);

// console.log(reversedQueue); 

// // Question 3 
// // Implement a Queue using 2 stacks s1 and s2.

// class Queue {
//   constructor() {
//     this.s1 = [];
//     this.s2 = [];
//   }

//   isEmpty() {
//     return this.s1.length + this.s2.length === 0;
//   }

//   enqueue(element) {
//     this.s1.push(element);
//   }

//   dequeue() {
  
//     if (this.s2.length === 0) {
//       while (this.s1.length > 0) {
//         this.s2.push(this.s1.pop());
//       }
//     }

//     if (this.s2.length > 0) {
//       return this.s2.pop();
//     }

//     return null;
//   }
// }
// const queue1 = new Queue();

// queue1.enqueue(1);
// queue1.enqueue(2);
// queue1.enqueue(3);

// console.log(queue1.dequeue()); 
// console.log(queue1.dequeue()); 
// queue1.enqueue(4);
// queue1.enqueue(5);

// console.log(queue1.dequeue()); 
// console.log(queue1.dequeue()); 
// console.log(queue1.dequeue());

// console.log(queue1.dequeue()); 




// // // Fibonacci Series:
// // let x = 0;
// // let y = 1;
// // let arr = [0, 1];

// // function fibonacci(z) {
// //   if (z === 1) return;
// //   let z1 = x + y;
// //   x = y;
// //   y = z1;
// //   arr.push(y);
// //   fibonacci(z - 1);
// // }

// // fibonacci(20);
// // document.write(`Fibonacci = ${arr}<br>`); 



// // // The sum of Array Elements:


// // let arr0 = [0, 1, 2, 3];

// // function sum1(arr, i) {
// //   if (i === arr.length) return 0;
// //   return arr[i] + sum1(arr, i + 1);
// // }

// // const sum = sum1(arr0, 0);
// // document.write(`sum = ${sum}<br>`); 


// // // Reverse a String:

// // let str = "FARAH";
// // let strReversed = "";
// // let j = str.length - 1;
// // let k = 0;

// // function reverse(j) {
// //   if (j === -1) return strReversed;
// //   strReversed += str[j];
// //   j--;
// //   reverse(j);
// // }

// // reverse(j);
// // document.write(`str reverse = ${strReversed}<br>`); 



