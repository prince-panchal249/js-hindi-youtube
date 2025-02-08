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