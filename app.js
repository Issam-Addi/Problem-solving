/*(1) Fibonacci Series:
Write a program to print Fibonacci for a given number.
The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1.
*/
console.log("Fibonacci Series:");
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function printFibonacci(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fibonacci(i));
    }
}
printFibonacci(10);
console.log("=============================");
//************************************************************************************

/*(2)The sum of Array Elements:
Write a program that Calculates the sum of elements in an array 
 */
console.log("The sum of Array Elements:");
function sumArray(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sumArray(arr, n - 1) + arr[n - 1];
    }
}
let myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray, myArray.length));
console.log("=============================");
//************************************************************************************

/*(3) Reverse a String:
Write a program that Reverses a string 
*/
console.log("Reverse a String:");
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        let reverse = reverseString(str.substr(1)) + str.charAt(0);
        console.log(reverse);
        return reverse;
    }
}
let myString = "hello world";
reverseString(myString);