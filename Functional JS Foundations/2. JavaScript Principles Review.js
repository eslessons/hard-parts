/* JavaScript Principles Review

What happens when javascript executes (runs) my code?

const num = 3;
const multiplyBy2 = (inputNumber) => {
	const result = inputNumber*2;
	return result;
}

const name = "Will"

Code is saved (defined) in functions - to be run later

As soon as we start running our code, we create a global execution context

	— Thread of execution (parsing and executing the code line after line)
	— Live memory of variables with data (known as a Global Variable
	Environment)

Running/calling/invoking a function

This is not the same as defining a function
const num = 3;

const multiplyBy2 = (inputNumber) => {
	const result = inputNumber*2;
	return result;
}

const output = multiplyBy2(num);

const newOutput = multiplyBy2(10);

When you execute a function you create a new execution context comprising:

	1. The thread of execution (we go through the code in the function line by line)
	2. A local memory ('Variable environment') where anything defined in the function is stored

We keep track of the functions being called in JavaScript
with a Call stack

Tracks which execution context we are in - that is, what
function is currently being run and where to return to
after an execution context is popped off the stack

One global execution context, multiple function
contexts

*/