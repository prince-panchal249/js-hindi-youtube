// primitive data types

// 7 primitive data types : number, string, boolean, undefined, null, symbol, bigint

const score = 100
const scorevalue = 100.3

const isLogged = false
const outSideTemp = null
// let userEmail = undefined 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// const bigNumber = 1234567890123456789012345678901234567890n



// non-primitive data types or reference data types

// Array, Object, Function // type of non-primitive data types is object, fot function it is object-function
// Date, RegExp, Map, Set, WeakMap, WeakSet, etc.

const myArray = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name : "prince",
    age : 20,
}

const myFunction = function(){
    console.log("hello world");
}

                                    // typeof of data types for interview perspective 

console.log(typeof scorevalue); // number
console.log(typeof isLogged); // boolean
console.log(typeof outSideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // undefined
console.log(typeof myArray); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory (Primitive data types) , heap memory (Non-primitive data types)

// stack memory : memory allocation is done in stack memory for primitive data types
// heap memory : memory allocation is done in heap memory for non-primitive data types
// stack memory is faster than heap memory
// stack memory is limited, heap memory is not limited
// stack memory is used for static memory allocation, heap memory is used for dynamic memory allocation


                                    // stack

                // stack gives copy of the value to another variable thats why value is not changed


let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName); // hiteshchoudharydotcom  
console.log(anotherName); // chaiaurcode


                                    // heap

                // heap gives reference of the value to another variable thats why value is changed


let userOne = {
    email : "user@gmail.com",
    upi : "user@okhdfcbank"
}

let userTwo = userOne

userTwo.email = "prince@google.com"

console.log(userOne.email);  
console.log(userTwo.email);