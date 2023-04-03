/*(1) Fibonacci Series:
Write a program to print Fibonacci for a given number.
The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1.
*/
// console.log("Fibonacci Series:");
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// function printFibonacci(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(fibonacci(i));
//     }
// }
// printFibonacci(10);
// console.log("=============================");
//************************************************************************************

/*(2)The sum of Array Elements:
Write a program that Calculates the sum of elements in an array 
 */
// console.log("The sum of Array Elements:");
// function sumArray(arr, n) {
//     if (n <= 0) {
//         return 0;
//     } else {
//         return sumArray(arr, n - 1) + arr[n - 1];
//     }
// }
// let myArray = [1, 2, 3, 4, 5];
// console.log(sumArray(myArray, myArray.length));
// console.log("=============================");
//************************************************************************************

/*(3) Reverse a String:
Write a program that Reverses a string 
*/
// console.log("Reverse a String:");
// function reverseString(str) {
//     if (str === "") {
//         return "";
//     } else {
//         let reverse = reverseString(str.substr(1)) + str.charAt(0);
//         console.log(reverse);
//         return reverse;
//     }
// }
// let myString = "hello world";


// class MinStack {
//     constructor() {
//         this.stack = [];
//         this.minStack = [];
//     }

//     push(val) {
//         this.stack.push(val);
//         if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//             this.minStack.push(val);
//         }
//     }

//     pop() {
//         const val = this.stack.pop();
//         if (val === this.minStack[this.minStack.length - 1]) {
//             this.minStack.pop();
//         }
//         return val;
//     }

//     getMin() {
//         if (this.minStack.length === 0) {
//             return null; // or throw an error
//         }
//         return this.minStack[this.minStack.length - 1];
//     }
// }




//Q2

// function reverseQueue(queue) {
//     const stack = [];
//     while (queue.length > 0) {
//         stack.push(queue.shift());
//     }
//     while (stack.length > 0) {
//         queue.push(stack.pop());
//     }
//     return queue;
// }


// const queue = [1, 2, 3, 4, 5];
// reverseQueue(queue);
// console.log(queue);





/* Create a function that takes a LinkedList and deletes the middle node 
    in it and returns it
 */

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     addNode(data) {
//         const new_node = new Node(data);
//         if (!this.head) {
//             this.head = new_node;
//             this.tail = this.head;
//         } else {
//             this.tail.next = new_node;
//             this.tail = new_node;
//         }
//         this.length++;
//     }

//     deleteMiddleNode() {
//         if (this.length < 2) {
//             return this.head;
//         }
//         const middle = Math.floor(this.length / 2);
//         let prevNode = null;
//         let currNode = this.head;
//         for (let i = 0; i < middle; i++) {
//             prevNode = currNode;
//             currNode = currNode.next;
//         }
//         prevNode.next = currNode.next;

//         this.length--;
//         return this.head;
//     }
// }

// const linkedList = new LinkedList();
// linkedList.addNode(1);
// linkedList.addNode(2);
// linkedList.addNode(3);
// linkedList.addNode(4);
// linkedList.addNode(5);



// linkedList.deleteMiddleNode();
// console.log(linkedList);



/* Create a function that takes a LinkedList and reverses it*/

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/* Function to reverse the linked list */
function reverse(node) {
    let prev = null;
    let current = node;
    let next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }
    node = prev;
    return node;
}

// prints content of double linked list
function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

// Driver Code

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log("Given linked list");
printList(head);
head = reverse(head);
console.log("Reversed linked list ");
printList(head);