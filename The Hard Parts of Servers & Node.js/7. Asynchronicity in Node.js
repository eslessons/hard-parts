/* Asynchronicity in Node

The call stack, event loop and callback queue in Node

	— Call stack: JavaScript keeps track of what function
	is being run and where it was run from. Whenever
	a function is to be run, it’s added to the call stack

	— Callback queue - any functions delayed from
	running (and run automatically by Node) are
	added to the callback queue when the background
	Node task has completed (or there’s been some
	activity like a request)

	— Event loop - Determines what function/code to
	run next from the queue(s)

Bringing it all together

But Node is most powerful because of the
automated JS function execution triggered by
Node at just the right moment.

This means we don’t have to wait in JS for the
right moment to run code and block any other
code running

But it also means we better know intimately
how Node decides what to automatically
execute at what moment...

The event loop is very strict. What rules does it
set for what code to run next and when it may
run?

function useImportedtweets(errorData, data){
	const tweets = JSON.parse(data)
	console.log(tweets.tweet1)
}

function immediately(){console.log("Run me last")}

function printHello(){console.log("Hello")}

function blockFor500ms(){
	// Block JS thread DIRECTLY for 500 ms
	// With e.g. a for loop with 5m elements
}

setTimeout(printHello,0)

fs.readFile('./tweets.json', useImportedtweets)

blockFor500ms()

console.log("Me first")

setImmediate(immediately)


Rules for the automatic execution of the JS
code by Node

	1. Hold each deferred function in one of the
	task queues when the Node background API
	‘completes’

	2. Add the function to the Call stack (i.e.
	execute the function) ONLY when the call
	stack is totally empty (Have the Event Loop
	check this condition)

	3. Prioritize functions in Timer ‘queue’ over I/
	O queue, over setImmediate (‘check’) queue

*/