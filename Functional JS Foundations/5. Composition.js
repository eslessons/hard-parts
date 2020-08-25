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

*/
