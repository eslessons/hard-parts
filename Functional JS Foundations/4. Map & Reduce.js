/* Map & Reduce 

 reduce and reducers

— The most versatile higher order function of all

— Takes a mental shift to look at problems through the
reduce lens

— Can even enable function composition (to come)

We have already seen ‘reduction’ in action

const map = (array, instructions) => {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instructions(array[i]));
	}
	return output;
}

const multiplyBy2 = input => input*2

const result = map([1, 2, 3], multiplyBy2);

What is map actually doing? (accumulator, push etc)

We combined/reduced by:

	— Taking the array [] and combine with array[0] by
		pushing, take that combined value and combine with
		array[1] by pushing and so forth

How else could we combine and use, combine and use?

How else could we ‘combine and use, combine and use’?

	— Take the number 0 and combine with array[0] by adding, take that
	combined value and combine with array[1] by adding and so forth...
	— Take the empty string “ ” and combine with array[0] by appending,
	take that combined value and combine with array[1] by appending
	and so forth...

We’d want to write our function so that it could handle:
	— Any ‘accumulator’ (array, string, number)
	— Any combining logic/code/functionality (the ‘reducer’)

This function is known as reduce - it can handle a
remarkable range of tasks

const reduce = (array, howToCombine, buildingUp) => {
	for (let i = 0; i < array.length; i++){
		buildingUp = howToCombine(buildingUp, array[i])
	}
	return buildingUp
}

const add = (a, b) => a + b

const summed = reduce([1,2,3], add, 0)

Should be called ‘reduce from 2 things to 1 repeatedly, inside’

Interlude - arrays, objects and functions have access to
‘methods’

— ‘methods’ are functions that they can use on themselves
const array = [1,2,3]

array.push(10) // Where’s this push method come from?

— The ‘methods’ that arrays get are stored in an object that
every array has access to when you refer to the array, followed
by a ‘dot’ and the method name (See OOP JS Hard Parts)

— The link to this object full of shared methods is on the
__proto__ property

JavaScript has a built-in version of reduce available to all
arrays

Reminder of our version of reduce

const add = (a, b) => a + b

const summed = reduce([1,2,3], add, 0) // summed is 6

With the built-in version , the array is inserted into the reduce function
automatically as the first input/argument. But they produce the same result

const add = (a, b) => a + b

const summed = [1,2,3].reduce(add, 0) // summed is 6

In fact we get a number of built-in higher order functions
in JavaScript

	— map, forEach, filter, flatMap, reduce, reduceRight
	— All ‘iterate’ through each element of the array and
	run a function on each
	— But behave differently - MDN guides us

const array = [1,2,3,4,5,6]
const greaterThan2 = num => num > 2
const filteredArray = array.filter(greaterThan2) // [3,4,5,6]

And we can ‘chain’ these higher order functions - pass the
output of one as the input of the next

const array = [1,2,3,4,5,6]
const greaterThan2 = num => num > 2
const add = (a, b) => a + b
const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add,0)

	— The output of each higher order function (HOF),
		where it’s an array, has access to all the HOFs (map,
		filter, reduce) through the prototype chain

reduce, filter and chaining higher order functions

	— Easier to add features - we can reuse filter in a 1000
	different filtering scenarios and can chain it up with other
	functions

	— More readable -
	array.filter(greaterThan2).reduce(add,0) - more
	readable than individual steps with explicit loop

	— Easier to debug - As long as we understand what’s happening
	under-the-hood

And reduce is going to enable something even more powerful

*/