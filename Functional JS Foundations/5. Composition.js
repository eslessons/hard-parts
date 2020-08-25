/* Composition 

Function composition

	— Chaining with dots relies on JavaScript prototype
	feature - functions return arrays which have access to
	all the HOFs (map, filter, reduce)

	— I’m passing my output into the next function
	automatically
	
	— What if I want to chain functions that just return a
	regular output
	
	— e.g. multiplyBy2, add3, divideBy5

We could keep track with global variables

const multiplyBy2 = x => x*2

const add3 = x => x+3

const divideBy5 = x => x/5

const initialResult = multiplyBy2(11)

const nextStep = add3(initialResult)

const finalStep = divideBy5(nextStep)

console.log("finalStep", finalStep)

But that’s risky, people can overwrite

Or we can use the fact that JavaScript evaluates every
function call before it moves on

const multiplyBy2 = x => x*2

const add3 = x => x+3

const divideBy5 = x => x/5

const result = divideBy5(add3(multiplyBy2(11)))

Now this is pretty unreadable though

(Btw This relies on our functions being ‘referentially transparent’ - we can replace the call to the function with its return value with no consequences on our app)

We’re combining a function with a value to get a result
then combining that result with another function to get
another result and so on

What’s this remind you of?

Reduce as the most versatile function in programming

const multiplyBy2 = x => x*2

const add3 = x => x+3

const divideBy5 = x => x/5

const reduce = (array, howToCombine, buildingUp) => {
	for (let i = 0; i < array.length; i++){
		buildingUp = howToCombine(buildingUp, array[i])
	}
	return buildingUp
}

const runFunctionOnInput = (input,fn) => {
	return fn(input)
}

const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)

Listing out our ‘lines of code’ (functions) by name with each one’s consequence limited to only affect the next ‘line’ (function call/invocation)

const multiplyBy2 = x => x*2

const add3 = x => x+3

const divideBy5 = x => x/5

const subtract4 = x => x-4

const reduce = (array, howToCombine, buildingUp) => {
	for (let i = 0; i < array.length; i++){
		buildingUp = howToCombine(buildingUp, array[i])
	}
	return buildingUp
}

const runFunctionOnInput = (input,fn) => { return fn(input) }

const output = reduce([
	multiplyBy2,
	add3,
	divideBy5,
	subtract4
	],
	runFunctionOnInput, 11
)

Function composition

	— Easier to add features - This is the essential aspect of
	functional javascript - being able to list of our units of
	code by name and have them run one by one as
	independent, self-contained pieces

	— More readable - reduce here is often wrapped in
	compose to say ‘combine up’ the functions to run our
	data through them one by one. The style is ‘point free’

	— Easier to debug - I know exactly the line of code my bug
	is in - it’s got a label!

Pure functions

	— Functions as tiny units to be combined and run automatically must
	be highly predictable

	— We rely on using their evaluated result to pass the input to the next
	unit of code (automatically). Any ‘side effects’ would destroy this

let num = 10
const add3 = x => {
	num++
	return x+3
}
add3(7)

Immutability

const array = [1,2,3]

const multiplyBy2 = num => num*2

const result = array.map(multiplyBy2) // [2,4,6]

const newResult = array.map(multiplyBy2) // [2,4,6]

If we want the only consequence of map to be on that line and to achieve
‘referential transparency’ (I can call the function with its output and it’s the same) - then I need to preserve my data and not manipulate it

JavaScript passes a reference (‘link back’) to the arr when it’s inserted into the function map. If we change (‘mutate’) the input array our function is not pure - it’s unpredictable - I can’t figure out what it does just be reading it and looking at its output there in that line - undoes all our hard work

Pure functions & immutability

	— Easier to add features - Every saved function be
	safely used in new combinations , confident it won’t
	break other parts of the app

	— More readable - Every line is ‘complete’ - it’s fully
	descriptive - exactly what it does is discoverable its
	name and limited to that input/output

	— Easier to debug - No 1000s of lines of
	interdependence

*/
