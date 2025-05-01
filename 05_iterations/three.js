// for of loop

// ["", "", ""] is an array of 3 empty strings
// for of loop is used to iterate over the values of an iterable object like an array or a string.
// [{}, {}, {}]
// for in loop is used to iterate over the keys of an object.

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(`value  is : ${num}`);
}


const greeting = "Hello World!";
for (const greet of greeting) {
    // if (greet === " ") {
    //     break;
    // }
    // console.log(`each char is ${greet}`);
}


// Maps 

// Sets are also iterable objects

const map = new Map();  // key value pair    // map is an object that contain key value pairs there is no duplicate keys always unique keys     // map is not iterable

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);


for (const [key, values] of map) {
    // console.log(key, ":-" ,values);
}



const myobject = {
    game1: "Cricket",
    game2: "Football",
}

// for (const [key, values] of myobject) {
//     console.log(key, ":-" ,values);       // error because object is not iterable by for of loop
// }