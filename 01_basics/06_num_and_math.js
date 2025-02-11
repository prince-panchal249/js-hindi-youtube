const score = 400
// console.log(score);     // 400


const balance = new Number(100);
// console.log(balance);   // [Number: 100]

// console.log(balance.toString().length); // 100 => 3

// console.log(balance.toFixed(2)); // 100.00


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));        

const anotherNumber = 1000000
// console.log(anotherNumber.toLocaleString("en-in")); // 10,00,000



// Math Object ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math); // Math object

// console.log(Math.abs(-5)); // 5 => absolute value, always return positive value
// console.log(Math.round(5.4)); // 5 => round off, nearest integer, 5.5 => 6
// console.log(Math.ceil(5.1)); // 6 => round up, always return upper value
// console.log(Math.floor(5.9)); // 5 => round down, always return lower value
// console.log(Math.sqrt(25)); // 5 => square root
// console.log(Math.pow(2, 4)); // 16 => power of
// console.log(Math.min(2, 4, 6, 8, 10)); // 2 => minimum value    
// console.log(Math.max(2, 4, 6, 8, 10)); // 10 => maximum value

console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random number between 10 and 20, inclusive of 10 and 20, +1 is added to include max value, +min is added to start from min value, floor is added to remove decimal value, random is added to generate random number, * (max - min) is added to generate random number between min and max value, max - min + 1 is added to include max value, min is added to start from min value,  +1 is added to include max value,   random number between 10 and 20, inclusive of 10 and 20.
