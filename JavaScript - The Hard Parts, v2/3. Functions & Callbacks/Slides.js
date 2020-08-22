/* Functions & Callbacks

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Callbacks & Higher Order Functions

One of the most misunderstood concepts in JavaScript
- Enables powerful pro-level functions like map, filter, reduce (a core aspect of
functional programming)
- Makes our code more declarative and readable
- Forms the backbone of the Codesmith technical interview (and professional
mid/senior level engineering interviews)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Why do we even have functions?

Let’s see why…
Create a function 10 squared
- Takes no input
- Returns 10*10
What is the syntax (the exact code we type)?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

tenSquared

function tenSquared() {
 return 10*10;
}
tenSquared() // 100
What about a 9 squared function?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

nineSquared

function nineSquared() {
 return 9*9;
}
nineSquared() // 81
And an a 8 squared function? 125 squared?
What principle are we breaking? DRY (Don’t Repeat Yourself)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We can generalize the function to make it reusable
function squareNum(num){
 return num*num;
}
squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Generalizing functions

‘Parameters’ (placeholders) mean we don’t need to decide what data to run our functionality on until we run the function
- Then provide an actual value (‘argument’) when we run the function
Higher order functions follow this same principle.
- We may not want to decide exactly what some of our functionality is until we
run our function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now suppose we have a function copyArrayAndMultiplyBy2
function copyArrayAndMultiplyBy2(array) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(array[i] * 2);
 }
 return output;
 }
const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What if want to copy array and divide by 2?
function copyArrayAndDivideBy2(array) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(array[i] / 2);
 }
 return output;
 }
const myArray = [1,2,3];
const result = copyArrayAndDivideBy2(myArray);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Or add 3?
function copyArrayAndAdd3(array) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(array[i] + 3);
 }
 return output;
 }
const myArray = [1,2,3];
const result = copyArrayAndAdd3(myArray);

// What principle are we
// breaking? DRY - Don’t Repeat Yourself

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We could generalize our function - So we pass in our specific instruction only when we run copyArrayAndManipulate !

function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}

function multiplyBy2(input) { return input * 2; }

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How was this possible?

Functions in javascript = first class objects
They can co-exist with and can be treated like any other javascript object
1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Which is our Higher
Order Function?

- The outer function that takes in a function is our higher-order function

Which is our Callback Function
- The function we insert is
our callback function

function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}

function multiplyBy2(input) {return input * 2;}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Higher-order functions

Takes in a function or passes out a function

Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Callbacks and Higher Order Functions simplify our code
and keep it DRY

- Declarative readable code: Map, filter, reduce - the most readable way to write code to work with data

- Codesmith & pro interview prep: One of the most popular topics to test in interview both for Codesmith and mid/senior level job interviews

- Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript, and are
under-the-hood of promises, async/await

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Introducing arrow functions - a shorthand way to save functions

function multiplyBy2(input) { return input * 2; }
>>>
const multiplyBy2 = (input) => { return input*2 }
>>>
const multiplyBy2 = (input) => input*2
>>>
const multiplyBy2 = input => input*2

const output = multiplyBy2(3) //6

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Updating our callback function as an arrow function

function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}

const multiplyBy2 = input => input*2

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We can even pass in multiplyBy2 directly without a name

But it’s still just the code of a function being passed into copyArrayAndManipulate

function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}

const multiplyBy2 = input => input*2

const result = copyArrayAndManipulate([1, 2, 3], input => input*2);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Anonymous and arrow functions

- Improve immediate legibility of the code

- But at least for our purposes here they are ‘syntactic sugar’ - we’ll see their full effects later

- Understanding how they’re working under-the-hood is vital to avoid confusion

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
