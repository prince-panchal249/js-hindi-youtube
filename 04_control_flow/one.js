// if statement

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 40){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// console.log("execute");


// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


                                // short-hand notation of if else

// const balance  = 1000

// if (balance > 500) console.log("test"), console.log("test2");  // don't do that (semi-colon between console.log)

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("les than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debircard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debircard && 2==3) { //(and) in &&, all the condition must have been true otherwise it will not print if's condition
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  // any one condition must have been true to run statement
    console.log("user logged in");
}