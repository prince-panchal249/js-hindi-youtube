let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valurInNumber = Number(score)
// console.log(typeof valurInNumber)

// console.log(valurInNumber)


// "33" => 33  convert string to number
// "33abc" => NaN  convert string to number, if string contains any character then it will return NaN, Not a Number, it is a special value in javascript 
// true => 1  convert boolean to number
// false => 0  convert boolean to number
// null => 0  convert null to number
// undefined => NaN  convert undefined to number

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true  convert number to boolean
// 0 => false  convert number to boolean
// "" => false  convert empty string to boolean
// "Prince" => true  convert string to boolean

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)


// ****************************** operations ******************************

let value = 3
let negvalue = -value
// console.log(negvalue)


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(3%2) // 1
// console.log(2+2*3) // 8
// console.log((2+2)*3) // 12

let str1 = "Hello"
let str2 = " Prince"

let str3 = str1 + str2
// console.log(str3);
// console.log(str1 + str2);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // 2

// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
