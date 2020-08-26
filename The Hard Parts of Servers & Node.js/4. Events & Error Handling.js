/* Events & Error Handling

In server side development we get errors

Understandable - we’re interacting with
others’ computers over the internet - there’s
lots of issues that could arise

How can we handle this? We need to
understand our background Node http server
feature better

What triggers the doOnIncoming function to
run? Events

	— http.createServer(doOnIncoming)
	is actually a one-line version of setting up
	the server that will auto-release (‘emit’)
	events (‘messages in Node’) that trigger a
	function to auto-run if we’ve set one

	— These events are preset on http: ‘request’,
	‘error’

Node will automatically send out the
appropriate event depending on what it gets
from the computer internals (http message or
error)

function doOnIncoming(incomingData, functionsToSetOutgoingData){
	functionsToSetOutgoingData.end("Welcome to Twitter")
}

function doOnError(infoOnError){
 console.error(infoOnError)
}

const server = http.createServer();
server.listen(80)

server.on('request', doOnIncoming)
server.on('clientError', doOnError)

*/
