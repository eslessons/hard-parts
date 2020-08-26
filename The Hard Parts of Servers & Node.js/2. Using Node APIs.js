/* Using Node APIs


Node auto-runs the code (function) for us when 
a request arrives from a user

function doOnIncoming(incomingData, functionsToSetOutgoingData){
	functionsToSetOutgoingData.end("Welcome to Twitter!")
}

const server = http.createServer(doOnIncoming)
server.listen(80)

1. We don’t know when the inbound request would
come - we have to rely on Node to trigger JS
code to run

2. JavaScript is single-threaded & synchronous. All
slow work (e.g. speaking to a database) is done
by Node in the background (more on this later)

Two parts to calling a function - executing its
code and inserting input (arguments)

In multiplyBy2(3) the argument is 3 and we, the
developer, inserted it

Node not only will auto-run our function at the right
moment, it will also automatically insert whatever the
relevant data is as the argument (input)

Sometimes it will even additional insert a set of functions in an
object (as an argument) which give us direct access to
the message (in Node) being sent back to the user and
allows us to add data to that message

And that’s exactly what Node does with its
http feature

Node inserts the arguments (inputs) automatically in the function it
auto-runs:

	1. ‘Inbound object’ - all data from the inbound (request) message
	2. ‘Outbound object’ - functions to be used to set outbound
	(response) message data

These objects (the arguments to the auto-run function) aren’t given
labels by Node. So how do we access them? We do so with
parameters (placeholders).

We must make sure to format the function Node auto-runs the way
Node expects (use docs)

Code again

function doOnIncoming(incomingData, functionsToSetOutgoingData){
	functionsToSetOutgoingData.end("Welcome to Twitter!")
}

const server = http.createServer(doOnIncoming)
server.listen(80)

People often end up using req and res for the
parameters...

Let’s get more personalized with what we send
back to our user from our server

By writing code to investigate the inbound
message to see exactly what she’s asked for

Our user, needs a specific tweet (tweet 3)
back. How does their browser tell us that?

Messages are sent in HTTP format - The
‘protocol’ for browser-server interaction

HTTP message: Request line (url, method),
Headers, Body (optional)

const tweets = ["Hi", "Hello"]

function doOnIncoming(incomingData, functionsToSetOutgoingData){
	const tweetNeeded = incomingData.url.slice(8)-1
	functionsToSetOutgoingData.end(tweets[tweetNeeded])
}

const server = http.createServer(doOnIncoming)
server.listen(80)

*/