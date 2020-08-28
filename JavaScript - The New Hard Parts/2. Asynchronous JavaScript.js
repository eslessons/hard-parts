/* Asynchronous JavaScript

Asynchronicity is the backbone of modern web
development in 

JavaScript is single threaded (one command executing at a
time) and has a synchronous execution model (each line is
executed in order the code appears)

So what if we need to wait some time before we can
execute certain bits of code? Perhaps we need to wait on
fresh data from an API/server request or for a timer to
complete and then execute our code

We have a conundrum - a tension between wanting to
delay some code execution but not wanting to block
the thread from any further code running while we wait

Solution 1

function display(data){
	console.log(data)
}

const dataFromAPI = fetchAndWait('https://twitter.com/will/tweets/1')

//... user can do NOTHING here
//... could be 300ms, could be half a second
// they're just clicking and getting nothing

display(dataFromAPI)
console.log(“Me later!”);

Problems

	— Fundamentally untenable - blocks our
		single javascript thread from running any
		further code while the task completes

Benefits

	— It’s easy to reason about

Goals

	1. Be able to do tasks that take a long time to
	complete e.g. getting data from the server
	
	2. Continue running our JavaScript code line
	by line without one long task blocking
	further JavaScript executing
	
	3. When our slow task completes, we should
	be able to run functionality knowing that
	task is done and data is ready!

Conundrum

Solution 2 - Introducing Web Browser APIs/
Node background threads

function printHello(){
	console.log(“Hello”);
}

setTimeout(printHello,1000);

console.log(“Me first!”);

We’re interacting with a world outside of
JavaScript now - so we need rules

function printHello(){
	console.log(“Hello”);
}

function blockFor1Sec(){
	//blocks in the JavaScript thread for 1 second
}

setTimeout(printHello,0);

blockFor1Sec()

console.log(“Me first!”);

Problems

	— No problems!

	— Our response data is only available in the callback
	function - Callback hell

	— Maybe it feels a little odd to think of passing a function
	into another function only for it to run much later
	Benefits

	— Super explicit once you understand how it works
	under-the-hood

*/
