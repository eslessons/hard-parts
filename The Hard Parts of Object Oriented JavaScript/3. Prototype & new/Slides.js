/* Prototype & new

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution 2:

Store the increment function in just one object and
have the interpreter, if it doesn't find the function on
user1, look up to that object to check if it's there
How to make this link?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using the prototype chain

const functionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("You're loggedin")}
};

const user1 = {
 name: "Phil",
 score: 4
}

user1.name // name is a property of user1 object
user1.increment // Error! increment is not!

Link user1 and functionStore so the interpreter, on not finding .increment, makes sure to check up in functionStore where it would find it

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make the link with Object.create() technique

const user1 = Object.create(functionStore)

user1 // {}

user1.increment // function....

Interpreter doesn't find .increment on user1 and
looks up the prototype chain to the next object and
finds .increment 1 level up

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution 2 in full

function userCreator (name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};

const userFunctionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("You're logged in");}
};

const user1 = userCreator("Phil", 4);

const user2 = userCreator("Julia", 5);

user1.increment();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Problem

No problems! It's beautiful

Maybe a little long-winded

const newUser = Object.create(functionStore);
...
return newUser

Write this every single time - but it's 6 words!
Super sophisticated but not standard

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution 3 - Introducing the keyword that automates the
hard work: new

const user1 = new userCreator("Phil", 4)

When we call the constructor function with new in front we automate 2 things

1. Create a new user object
2. return the new user object

But now we need to adjust how we write the body of userCreator - how can we:
— Refer to the auto-created object?
— Know where to put our single copies of functions?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The new keyword automates a lot of our manual work

function userCreator(name, score) {
  this.name = name;
  this.score = score;
};

// userCreator.prototype // {};

userCreator.prototype.increment = function(){
 this.score++;
}

let user1 = new userCreator("Phil", 4);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Interlude - functions are both objects and functions :/

function multiplyBy2(num){
 return num*2
}

multiplyBy2.stored = 5
multiplyBy2(3) // 6

multiplyBy2.stored // 5
multiplyBy2.prototype // {}

We could use the fact that all functions have a default property on their object version, ’prototype’, which is itself an object - to replace our functionStore object

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Complete Solution 3

function UserCreator(name, score){
 this.name = name;
 this.score = score;
}

UserCreator.prototype.increment = function(){
 this.score++;
};

UserCreator.prototype.login = function(){
 console.log("login");
};

const user1 = new UserCreator(“Eva”, 9)
user1.increment()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Benefits
— Faster to write
— Still typical practice in professional code

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

— 99% of developers have no idea how it works and
therefore fail interviews
— We have to upper case first letter of the function so
we know it requires ‘new’ to work!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What if we want to organize our code inside one of our
shared functions - perhaps by defining a new inner
function

function UserCreator(name, score){
 this.name = name;
 this.score = score;
}

UserCreator.prototype.increment = function(){
 function add1(){
 this.score++;
 }
 // const add1 = function(){this.score++;}
 add1()
};

UserCreator.prototype.login = function(){
 console.log("login");
};

const user1 = new UserCreator(“Eva”, 9)
user1.increment()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
