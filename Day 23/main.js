// Q 145:
// Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern 
//is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior
// of a function with custom actions.
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 5, 3);
//.....................................................................................................................
// Q 146:
//Show an example of a callback function used to filter an array of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented 
//by the provided function. This method is commonly used to search through an array and create a subset of 
//it based on certain criteria.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers); // [6 , 7 , 8 , 9]
//.....................................................................................................................
// Q 147:
// Explain how to handle errors in a callback pattern.
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first 
//argument to the callback. This convention allows the callback function to check for errors before proceeding
// with its execution.
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
//...........................................................................................................................
// Q 148:
//Demonstrate the use of the setTimeout() function to execute code after a delay.
// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code
// after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution
// without blocking the main thread.
setTimeout(function () {
    console.log("Sandwich is ready within 5 - second delay.");
}, 5000);
//...............................................................................................................................
// Q 149: 
//Explain the concept of the event loop in JavaScript with an example.
// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. 
//It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from
// the queue to the stack, ensuring non-blocking execution.
console.log("Start");
setTimeout(function () {
    console.log("Callback executed");
}, 0);
console.log("End");
//.....................................................................................................................
// Q 150: 
//Describe how asynchronous callbacks differ from synchronous code execution.
// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations,
// or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous 
//code, in contrast, runs sequentially, blocking further execution until the current operation completes.
console.log("Before sync operation");
for (var i = 0; i <= 9; i++) {
    console.log("After sync operation");
}
console.log("Before async operation");
setTimeout(function () {
    console.log("Async operation completed");
}, 1000);
console.log("After async operation setup");
