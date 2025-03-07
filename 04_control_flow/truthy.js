const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("don't have user email");
}


// falsy values ==>   false, 0, -0, BigInt (0n), "" (empty string), null, undefined, NaN

// truthy values ==>  "0", "false", 'false', " " (it's not empty string that's why truthy), [], {}, function{}{} (empty funcion)



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}


// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? null
val1 = null ?? 15 ?? 10  // it print's first value 

console.log(val1);



// ternary operator   like short hand of if else


// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
