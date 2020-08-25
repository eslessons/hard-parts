/* Closure

Closure

	— Most esoteric concept in JavaScript

	— Functions are our units to build with but they’re
	limited - they forget everything each time they finish
	running - with no global state

	— Imagine if we could give our functions memories

Reminding ourselves of how functions actually work


const multiplyBy2 = inputNumber => inputNumber*2;

const output = multiplyBy2(7);

const newOutput = multiplyBy2(3);

No memory of the previous execution - imagine if we
could give our functions permanent memories

It begins with returning a function from a function

Let's call (run) our generated function with the input 3

const functionCreator = () => {
	let counter = 0
	const add3 = (num) => {
		const result = num+3
		return result
	}
	return add3
}

const generatedFunc = functionCreator()
const result = generatedFunc(2) //5

Calling a function inside the function call in which it was
defined

const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter ++;
	}
	incrementCounter();
}

outer();

What determines what data your function have access to
when you call the function? Where we call it?

But what if we call our function outside of where it was
defined?

const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter ++;
	}
}

outer();
incrementCounter();

What happens here?

There is a way to run a function outside where it was
defined
Without an error - we return the inner function and assign it
to a new global label
const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter ++;
	}
	return incrementCounter
}

const newFunction = outer();

Now we can call the function that was originally saved as
incrementCounter by its new global label newFunction

const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter ++;
	}
	return incrementCounter
}

const newFunction = outer();

newFunction()
newFunction()

But we have a problem

The bond

When a function is defined, it gets a bond to the surrounding Local
Memory (“Variable Environment”) in which it has been defined

const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter ++;
	}
	return incrementCounter
}

const newFunction = outer();

newFunction()
newFunction()

The ‘Backpack’

1. When incrementCounter is defined, it gets a bond to the surrounding Local Memory of live data in outer in which it has been defined

2. We then return incrementCounter out of outer into global and store it in
myNewFunction

3. BUT we maintain the bond to the surrounding live local memory from inside of outer 
	- this live memory gets ‘returned out’ attached to the incrementCounter function definition and is therefore now stored attached to myNewFunction - even though outer’s execution context is long gone

4. When we run myNewFunction in the global execution context, it will first look in its
own local memory for any data it needs (as we’d expect), but then in its ‘backpack’ before it looks in global memory

What’s the official name for the ‘backpack’?

The Closed over Variable Environment (COVE) or ‘Closure’

This ‘backpack’ of live data that gets returned out with
incrementCounter is known as the ‘closure’

The ‘backpack’ (or ‘closure’) of live data is attached
incrementCounter (then to myNewFunction)
through a hidden property known as [[scope]] which
persists when the inner function is returned out

Closure in functional JavaScript

— Easier to add features - Our functions can now have
persistent permanent memories attached to them -
it’s going to let us build dramatically more powerful
functions

— Easier to debug - Definitely need to know how it’s
working under the hood!

*/
