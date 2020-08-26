/* Introduction

Hard Parts: Servers &
Node.js

The power of Node

	— Most powerful technology in web development
		to emerge in 10 years

	— Enables applications that can handle millions
		of users without blocking

	— From simple webpages to largest scaled
		applications, to Windows/Mac desktop apps
		(with Electron), and hardware (embedded
		systems)

	— Allows us to build entire applications end-to-end 
		in one language - JavaScript

From client side development to full stack
development

Our users open twitter.com - they need
code and data to load twitter.com on
their computers

	— What code/data do they need to load?
	— Where’s the code/data coming from?

Servers are the behind-the-scenes of all web
applications - where our client-side code/data
comes from

Computer connected to the internet - a permanent store
of code/data, always on, ready to receive messages over
the internet from users requesting code/data and send it
back

	— How’s this computer know what to send back?
	— What languages can we use to write these instructions?

But how can we access these inbound messages as
developers and send code/data back in response?

Sending the right data back requires using
multiple features of the computer

	— Network socket - Receive and send back messages over
	the internet

	— Filesystem - that’s where the html/css/javascript code
	is stored in files

	— CPU - for cryptography and optimizing hashing
	passwords

	— Kernel - I/O management

Our dream - be able to use JavaScript to control this
computer because (1) we know JavaScript and (2) it has
some really nice design decisions

Each programming language (PHP, Ruby, C++,
JavaScript) have different levels of ability to
interact with these features directly

C++ has many features that let it directly
interact with the OS directly

JavaScript does not! So it has to work with C+
+ to control these computer features. What is
this combination known as? ... Node.js

JS -> Node -> Computer feature (e.g.
network, file system)

Rewind. We had better understand JavaScript
to understand Node.js then

It’s a language that does 3 things (and 1
involves a lot of help from C++)

	1. Saves data and functionality (code)

	2. Uses that data by running functionality
	(code) on it

	3. Has a ton of built-in labels that trigger
	Node features that are built in C++ to use
	our computer’s internals

Let’s see the 2 things that JS does by itself -
saving and using data

let num = 3;

// 1. Save a function (code to run, parameters awaiting inputs)
function multiplyBy2 (inputNumber){
	const result = inputNumber*2;
	return result;
}

// 2a. Call/run/invoke/execute a function (with parens)
// and 2b. insert an input (an argument)
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

So let’s see JavaScript other talent - built-in
labels that trigger Node features

We can set up, with a JavaScript label, a
Node.js feature (and so computer internals)
to wait for requests for html/css/js/tweets
from our users

How? The most powerful built-in Node
feature of all: http (and its associated builtin label 
in JS - also http conveniently)

Using http feature of Node to set up an open
socket

const server = http.createServer()
server.listen(80)

Inbound web request -> run code to send
back message

if inbound message -> send back
data

But at what moment?

*/
