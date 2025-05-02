// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values = coding.forEach ( (language) => {
//     console.log(language);
//     // return language
// } )

// console.log(values); // undefined
// The forEach method does not return any value, it returns undefined.
// The forEach method is not chainable, meaning you cannot call another array method on the result of forEach.
// The forEach method is used to execute a function on each element of an array.
// The forEach method does not create a new array, it simply executes the provided function on each element of the array.


const myNmuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNmuns.filter ( (num) => (num > 4) )  // if we use rounded brackets in arrow function then we don't need to use return keyword ......  remember 03_basics/03_arrow.js
// console.log(newNums); // [5, 6, 7, 8, 9, 10]  


// const newNums = myNmuns.filter ( (num) => {       // if we use curly brackets in arrow function then we need to use return keyword  .....     remember 03_basics/03_arrow.js
//     return num > 4
// } )
// console.log(newNums); // [5, 6, 7, 8, 9, 10]



                          // another way to write the same code


// const anotherNum = []

// myNmuns.forEach ( (num) => {
//     if (num > 4) {
//         anotherNum.push(num)
//     }
// } )

// console.log(anotherNum);     // [5, 6, 7, 8, 9, 10]


// checkout chai with code's github repo for book example that contains database example for practice