// Dates

// date start from 1st Jan 1970, and it is represented in milliseconds, date is an object type in JS

let myDate = new Date()
// console.log(typeof myDate); // object
// console.log(myDate.toString());  
// console.log(myDate.toDateString());  
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getDate());

// let myCreatedDate = new Date(2023,0, 23) // 23rd Jan 2023, 12:00:00 AM, 0 based index for month
// let myCreatedDate = new Date(2023, 0, 23, 11, 30, 30)
// let myCreatedDate = new Date("2023-01-23") // 23rd Jan 2023, 12:00:00 AM, 1 based index for month
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// Time

let myTimeStamp = Date.now(); // returns the number of milliseconds since 1st Jan 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // returns the number of milliseconds since 1st Jan 1970
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // + 1 because month start from 0.
console.log(newDate.getDay());

// `${newDate.getDate()} and the time is ${newDate.getTime()}`

newDate.toLocaleString('default', {   // localeStrings parameter or customize formate
    weekday: "long",
})
