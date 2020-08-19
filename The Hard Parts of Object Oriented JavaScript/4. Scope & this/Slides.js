/* Scope & this

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

We need to introduce arrow functions - which bind this
lexically

function UserCreator(name, score){
 this.name = name;
 this.score = score;
}

UserCreator.prototype.increment = function(){
 const add1 = () => { this.score++ }
 add1()
};

UserCreator.prototype.login = function(){
 console.log("login");
};

const user1 = new UserCreator(“Eva”, 9)
user1.increment()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution 4

We’re writing our shared methods separately from our
object ‘constructor’ itself (off in the User.prototype
object).

Other languages let us do this all in one place. ES2015
lets us do so too.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The class ‘syntactic sugar’

class UserCreator {

 constructor (name, score){
   this.name = name;
  this.score = score;
 }

 increment (){
  this.score++;
 }

 login (){
  console.log("login");
 }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Class 'Syntactic Sugar'

Solution 3 in full:

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
};

User.prototype.login = function() {
  console.log("login");
}

const user1 = new UserCreator("Eva", 9)

user.increment();


Solution 4 in full:

class UserCreator {
  constructor (name, score) {
    this.name = name;
    this.score = score;
  }
  increment () {
    this.score++;
  }
  login () {
    console.log("login");
  }
}

const user1 = new UserCreator("Eva", 9);

user1.increment();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Benefits:

— Emerging as a new standard

— Feels more like style of other languages (e.g. Python)
Problems

— 99% of developers have no idea how it works and
therefore fail interviews

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You won't be one of this 99%!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JavaScript uses this proto link to give objects, functions and arrays a bunch of bonus functionality. 
All objects by default have __proto__

const obj = {
 num : 3
}

obj.num // 3

obj.hasOwnProperty("num") // ? Where's this method?

Object.prototype // {hasOwnProperty: FUNCTION}

— With Object.create we override the default __proto__ reference to Object.prototype and replace with functionStore

— But functionStore is an object so it has a __proto__ reference to Object.prototype - we just intercede in the chain

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
