/* Object Creation

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's suppose we're building a quiz game with users

Some of our users

Name: Phil
Score: 4

Name: Julia
Score: 5

Functionality
+ Ability to increase score

What would be the best way to store this data and
functionality?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objects - store functions with their associated data!

const user1 = {
 name: "Phil",
 score: 4,
 increment: function() {
 user1.score++;
 }
};

user1.increment(); //user1.score => 4

This is the principle of encapsulation.
Let's keep creating our objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Note we would in reality have a lot of different relevant
functionality for our user objects

— Ability to increase score
— Ability to decrease score
— Delete user
— Log in user
— Log out user
— Add avatar
— get user score
— … (100s more applicable functions)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What alternative
techniques do we have for
creating objects?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Creating user2 using 'dot notation'

const user2 = {}; //create an empty object
user2.name = "Julia"; //assign properties to that object
user2.score = 5;
user2.increment = function() {
 user2.score++;
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Creating user3 using Object.create

const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
 user3.score++;
};

Our code is getting repetitive, we're breaking our DRY principle
And suppose we have millions of users!
What could we do?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution 1. Generate objects using a function

function userCreator(name, score) {
 const newUser = {};
 newUser.name = name;
 newUser.score = score;
 newUser.increment = function() {
 newUser.score++;
 };
 return newUser;
};

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Problems:

Each time we create a new user we make space in our
computer's memory for all our data and functions. But
our functions are just copies

Is there a better way?

Benefits:
It's simple and easy to reason about!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
