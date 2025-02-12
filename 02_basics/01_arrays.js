// array

const myArr = [0, 1, 2, 3 , 4, 5]  // we can use any dataTypes in array, like Number and string together.
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// array methods

// myArr.push(6)            // it adds element at the end of the array
// myArr.push(7)  
// myArr.pop()             // it delete an element at the end of the array automatically, it doesn't take any argument

// myArr.unshift(9)       // it adds an element at start  of the array, and then index of element will be changed , that's why pc takes loads and it's time consuming method.
// myArr.shift()           // it doesn't take ant argument just like pop, and delete the first element of the array.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8));  // it gives -1 value if the value of index is out of bound.

// const newArr = myArr.join()  // it convert array into string automatically. and make a string object.

// console.log(myArr);
// console.log(typeof newArr);



// slice, splice

console.log("A ", myArr);  // original array


const myn1 = myArr.slice(1, 3)  // not includes ending element of range. and contain it's original array.
console.log(myn1);
console.log("B ", myArr);   


const myn2 = myArr.splice(1, 3)  // it includes the ending element of the range. but splice contains the some of the arguments and that same arguments delete the element in the original array, that's why end of process original array has been changed.
console.log(myn2);
console.log("c ", myArr); // difference between slice and splice is, slice can not change the origial array, but splice can change

