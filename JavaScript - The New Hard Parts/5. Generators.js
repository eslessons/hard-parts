/* Generators

JavaScript’s built in iterators are actually
objects with a next method that when called
returns the next element from the ‘stream’/
flow - so let’s restructure slightly

function createFlow(array){
	let i = 0
	const inner = { 
	next : function() {
			const element = array[i]
			i++
			return element
		}
	}
	return inner
}

const returnNextElement = createFlow([4,5,6])
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()

And the built in iterators actually produce 
the next element in the format: {value: 4} 

Once we start thinking of our data as flows
(where we can pick of an element one-by-one)
we can rethink how we produce those flows -
JavaScript now lets us produce the flows using
a function 

function *createFlow(){
	yield 4
	yield 5
	yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()

What do we hope returnNextElement.next() will
return? But how?

This allows us to dynamically set what data
flows to us (when we run returnNextElement’s function)

function *createFlow(){
	const num = 10
	const newNum = yield num
	yield 5 + newNum
	yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next() // 10
const element2 = returnNextElement.next(2) // 7

returnNextElement is a special object (a generator object)
that when its next method is run starts (or continues) 
running createFlow until it hits yield and returns out 
the value being ‘yielded’

function *createFlow(){
	const num = 10
	const newNum = yield num
	yield 5 + newNum
	yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next() // 10
const element2 = returnNextElement.next(2) // 7

We end up with a ‘stream’/flow of values that we can get
one-by-one by running returnNextElement.next()

And most importantly, for the first time we get
to pause (‘suspend’) a function being run and
then return to it by calling returnNextElement.next()

In asynchronous javascript we want to

	1. Initiate a task that takes a long time (e.g. requesting data from
	the server)

	2. Move on to more synchronous regular code in the meantime

	3. Run some functionality once the requested data has come back

What if we were to yield out of the function at the moment of
sending off the long-time task and return to the function only
when the task is complete

We can use the ability to pause createFlow’s
running and then restart it only when our data
returns

function doWhenDataReceived (value){
	returnNextElement.next(value)
}

function* createFlow(){
	const data = yield fetch('http://twitter.com/will/tweets/1')
	console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next()
futureData.then(doWhenDataReceived)

We get to control when we return back to createFlow and continue
executing - by setting up the trigger to do so
(returnNextElement.next()) to be run by our function that
was triggered by the promise resolution (when the value returned
from twitter)

Async/await simplifies all this and finally fixes
the inversion of control problem of callbacks

async function createFlow(){
	console.log("Me first")
	const data = await fetch('https://twitter.com/will/tweets/1')
	console.log(data)
}

createFlow()
console.log("Me second")

No need for a triggered function on the promise
resolution, instead we auto trigger the resumption
of the createFlow execution (this functionality
is still added to the microtask queue though)

*/