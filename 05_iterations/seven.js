const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map ( (num) => (num + 10) )      // remember that this is a called callback function
// console.log(newNumbers); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// The map method creates a new array with the results of calling a provided function on every element in the calling array.
// if you create callback function, and use curly braces you need to use return keyword. otherwise output will be undefined. and if you use arrow function without curly braces, you don't need to use return keyword.


// const newNumbers = myNumbers.forEach ((num) => {
//     console.log(num + 10);   // it will print 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
//     // return num + 10;       // it will not return array, it will return undefined
// })
// console.log(newNumbers); // undefined
// The forEach method executes a provided function once for each array element.


                                              // chain map methods

const newNumbers = myNumbers
                    .map ( (num) => num * 10 ) 
                    .map ( (num) => num + 1 )     // in map, we have to perform operations on it
                    .filter ( (num) => (num >= 40) )   // we can use boolean value to filter the array
console.log(newNumbers);      // [41, 51, 61, 71, 81, 91]   // it will return array