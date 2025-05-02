const user = {
    username: "Prince",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

// console.log(this);     // this run in browser and see the global methods.


// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


                                     // arrow function


// const chai = function () {      // normal functions get their "this" value from the object that calls them
//     let username = "Prince"     // it simply calls the object.
//     console.log(this.username);  
// }

// chai()


// const chai = () => {         // arrow functions inherit the "this" value from the scope where they are defined
//     let username = "Prince"   // arrow function inherits the value from the scope whre it defines.
//     console.log(this);
// }

// chai()

                                        //  type - 1.....


// const addtwo = (num1, num2) => {     // we need to write return keyword explicitly
//     return num1 + num2
// }

// console.log(addtwo(3, 4))

                                        //  type - 2.....
                                        

// implicit return other name of arrow function

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2 )   // when we use parentheses we doesn't need to declare return keyword

const addtwo = (num1, num2) =>  ({username: "Prince"})

console.log(addtwo(3, 4))


                              // syntax to write arrow functions


const myArray = [2, 5, 7, 9, 3]
// myArray.forEach()

// myArray.forEach(function () {})
// myArray.forEach( () => {})
// myArray.forEach( () => ())