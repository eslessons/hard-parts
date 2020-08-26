/* Node with HTTP

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

Our return message is also in HTTP format

We can use the body to send the data and
headers to send important metadata

In the headers we can include info on the
format of the data being sent back - e.g. it’s
html so to load it as a webpage

Getting access to Node’s built in features with
require

We have to tell Node we want to have access
to each of its C++ features independently -
we get a built-in function to do this
require

const http = require(‘http’);

How do we start Javascript off to do all this?

	1. Write the code (VSCode et al)

	2. Load it into Node and run it (have to load
	in using the terminal interface)

	3. Need to reload our code with Node every
	time we make a change so nodemon

Do we need an always-on computer in our
house to run a server?

	1. Write code on your computer

	2. SSH into someone else’s computer (one of
	AWS’s)

	3. Set up DNS to match domain name to
	right IP

But what about testing our server?

Do you need to load the code to be run on an
AWS computer?

OS developers included the loopback feature
with localhost as the pseudo-domain

*/
