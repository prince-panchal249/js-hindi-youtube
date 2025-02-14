// singleton :- if we make an object with constructor, then it will be singleton object. amd if we make an object with literal, it will become multi instances.
// Object.create  // singlrton  ==> constructor .

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Prince",
    "full name": "prince Panchal",
    [mysym]: "mykey1",          // if we want to use symbol, we can use square bracket. otherwise it will become normal string
    age: 18,
    location: "ahmedabad",
    email: "princepanchal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email = "prince@chatgpt.com"

// Object.freeze(jsUser)  // when we make changes after this method, it will not changes in output. that's the use of freeze
jsUser.email = "prince@chatgptmicrosoft.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS user")
}

jsUser.greeting2 = function () {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
