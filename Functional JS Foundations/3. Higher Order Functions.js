/* Higher Order Functions

Suppose we have a function copyArrayAndMultiplyBy2. Let's diagram it out

const copyArrayAndMultiplyBy2 = (array) => {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(array[i] * 2);
	}
 return output;
}

const myArray = [1,2,3]
const result = copyArrayAndMultiplyBy2(myArray)

What if want to copy array and divide by 2?
const copyArrayAndDivideBy2 = (array) => {
	const output = [];

	for (let i = 0; i < array.length; i++) {
		output.push(array[i] /2);
	}

	return output;
}

const myArray = [1,2,3]

const result = copyArrayAndDivideBy2(myArray);

Or add 3?

const copyArrayAndAdd3 = (array) => {
	const output = [];

	for (let i = 0; i < array.length; i++) {
		output.push(array[i] +3);
	}

	return output;
}

const myArray = [1,2,3]

const result = copyArrayAndAdd3(myArray);

What principle are we breaking?

We're breaking DRY (Don't repeat yourself)

What could we do?

We could generalize our function so that we pass in our
specific instruction only when we run the copyArrayAndManipulate function!

const copyArrayAndManipulate = (array, instructions) => {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instructions(array[i]));
	}
	return output;
}

const multiplyBy2 = (input) => {
 return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2); 

How was this possible?

Functions in javascript = first class objects

They can co-exist with and can be treated like any other
javascript object

	1. assigned to variables and properties of other objects

	2. passed as arguments into functions

	3. returned as values from functions

Callback vs. Higher-order function

const copyArrayAndManipulate = (array, instructions) => {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instructions(array[i]));
	}
	return output;
}

const multiplyBy2 (input) => {
	return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

Which is our callback function? Which is our higher order function?

The function we pass in is a callback function. The outer function that takes in the function (our callback) is a higher-order function

Higher-order functions

Takes in a function or passes out a function

Just a term to describe these functions - any function
that does it we call that - but there's nothing different
about them inherently

Higher order functions

— Easier to add features - we don’t need to build a brand
new copyArrayAndAdd3 function - just use
copyArrayManipulate with the input of add3. Higher
order functions keep our code DRY

— More readable - copyArrayManipulate(multiplyBy2) - I
know what this is doing more readily than the for loop
style

— Easier to debug - As long as we understand what’s
happening under-the-hood

*/