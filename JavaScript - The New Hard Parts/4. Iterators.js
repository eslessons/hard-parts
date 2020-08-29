/* Iterators

We regularly have lists or collections or data
where we want to go through each item and do
something to each element

const numbers = [4,5,6]
for (let i = 0; i < numbers.length; i++){
	console.log(numbers[i])
}

We’re going to discover there’s a new beautiful
way of thinking about using each element one-byone

Programs store data and apply functionality to
it. But there are two parts to applying
functions to collections of data

1. The process of accessing each element

2. What we want to do to each element

Iterators automate the accessing of each element - so we can focus on what to do to each element - and make it available to us in a smooth way

Imagine if we could create a function that stored numbers and each time we ran the function it would return out an element (the next one) from numbers. 
NOTE: It’d have to remember which element was next up somehow

But this would let us think of our array/list as a ‘stream’/flow of data with our function returning the next element from our ‘stream’ - this makes our code more readable and more functional

But it starts with us returning a function from another function

Functions can be returned from other
functions in JavaScript!

function createNewFunction() {
	function add2 (num){
		return num+2;
	}
	return add2;
}

const newFunction = createNewFunction()

const result = newFunction(3)

How can we run/call add2 now? Outside of
createNewFunction?

We want to create a function that holds both
our array, the position we are currently at in
our ‘stream’ of elements and has the ability to
return the next element

function createFunction(array){
	let i = 0

	function inner(){
		const element = array[i]
		i++
		return element
	}

	return inner
}

const returnNextElement = createFunction([4,5,6])

How can we access the first element of our list?

By calling the returnNextElement

function createFunction(array){
	let i = 0
	function inner(){
		const element = array[i];
		i++;
		return element;
	}
	return inner
}

const returnNextElement = createFunction([4,5,6])

const element1 = returnNextElement()

const element2 = returnNextElement()

The bond

	— When the function inner is defined, it gets a bond to the
	surrounding Local Memory in which it has been defined

	— When we return out inner, that surrounding live data is
	returned out too - attached on the ‘back’ of the function
	definition itself (which we now give a new global label
	returnNextElement)

	— When we call returnNextElement and don’t find
	array or i in the immediate execution context, we look
	into the function definition’s ‘backpack’ of persistent live
	data

	— The ‘backpack’ is officially known as the C.O.V.E. or
	‘closure’

returnNextElement has everything we need all bundled up in it

1. Our underlying array itself

2. The position we are currently at in our ‘stream’ of
elements

3. The ability to return the next element

This relies completely on the special property of
functions in javascript that when they are born inside
other functions and returned - they get a backpack
(closure)

What is the posh name for returnNextElement?

So iterators turn our data into ‘streams’ of
actual values we can access one after another.

Now we have functions that hold our underlying array, the
position we’re currently at in the array, and return out the
next item in the ‘stream’ of elements from our array when run

This lets us have for loops that show us the element itself in
the body on each loop and more deeply allows us to rethink
arrays as flows of elements themselves which we can interact
with by calling a function that switches that flow on to give
us our next element

We have truly ‘decoupled’ the process of accessing each
element from what we want to do to each element
*/