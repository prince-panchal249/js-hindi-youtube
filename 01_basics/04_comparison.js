// console.log(2 > 1); // true
// console.log(2 >= 1); // true    
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true, string '2' gets converted to number
// console.log("02" > 1); // true, string '02' gets converted to number

              // may be this type of conversion can confusing sometimes. most of the cases we should avoid this type of conversion

console.log(null > 0); // false, null gets converted to 0
console.log(null == 0); // false, null gets converted to 0
console.log(null >= 0); // true, null gets converted to 0
console.log(null < 0); // false, null gets converted to 0

console.log(undefined == 0); // false, undefined gets converted to NaN
console.log(undefined > 0); // false, undefined gets converted to NaN
console.log(undefined == null); // true, undefined gets converted to NaN and null gets converted to 0

// ===

console.log("2" === 2); // false, string and number are of different types
console.log(null === 0); // false, null is an object and 0 is a number