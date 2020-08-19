/* Default Prototype Chain

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

Arrays and functions are also objects so they get access to
all the functions in Object.prototype but also more
goodies

function multiplyBy2(num){
 return num*2
}

multiplyBy2.toString() 
//Where is this method?

Function.prototype 
// {toString : FUNCTION, call : FUNCTION, bind : FUNCTION}

multiplyBy2.hasOwnProperty("score") 
// Where's this function?

Function.prototype.__proto__ 
// Object.prototype {hasOwnProperty: FUNCTION}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
