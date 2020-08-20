/* Subclassing with Factory Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Subclassing

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A core aspect of an OOP approach is inheritance - passing knowledge down

Note the bond between user, moderator and upgradedUser

user ----------- user1          user2           user3
- name        | name: "Will" | name: "Tim" | name: "Eva"
- score       | score: 3     | score: 5    | score: 9
- increaseScore {}

              user
    /                      \
moderator                  paidUser ------ paidUser1(name..)
- sharePublicMessage {}  | - bonusScore   
- (all properties and    | - increaseBalance {}
   functions from "user" | - (all properties and
   are available)        |    functions from "user"
                         |    are available)
   moderator
   /        \
Owner       General

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We can achieve this in
JavaScript in Solution 2, 3
and 4

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Subclassing in Solution 2
Factory function approach

function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

userFunctions = {
  sayName: function() {
    console.log("I'm + this.name");
  },
  increment: function() {
    this.score++;
  }
}

const user1 = userCreator("Phil", 5);

user1.sayName(); // "I am Phill"

function paidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++;
  }
};

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser1 = paidUserCreator("Alyssa", 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName(); // "I'm Alyssa"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Interlude - We have another way of running a function that
allow us to control the assignment of this

const obj = {
  num: 3,
  increment: function() { this.num++; }
};

const otherObj = {
  num: 10
};

obj.increment(); // obj.num now 4

obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);

this always refers to the object to the left of the dot on which the function (method) is being called - unless we override that by running the function using .call() or .apply() which lets us set the value of this inside of the increment function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
