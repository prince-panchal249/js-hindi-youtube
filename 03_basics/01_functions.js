function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}

// sayMyName()
// console.log(" ");
// sayMyName()

                                       // first type.....

// function addTwoNumbers(number1, number2) {    // its called parameter that is separate in parentheses

//     console.log(number1 + number2);

// }

                                       // second type.....

// function addTwoNumbers(number1, number2) {    // its called parameter that is separate in parentheses

//     const result = number1 + number2
//     return result

// }

                                       // third type.....

function addTwoNumbers(number1, number2) {    // its called parameter that is separate in parentheses

    return number1 + number2

}

// addTwoNumbers(2, 5)  // its called arguments that defines value of parameter to invoke function, and that call the function.

const result = addTwoNumbers(2, 5)
// console.log("Result: ", result);

                            //  part - 1


// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage(""));  // or empty string

                           //    part - 2  


// function loginUserMessage (username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage(""));  // reverse of part - 1

                           //    part - 3

function loginUserMessage (username = "Sammy"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prince"));
// console.log(loginUserMessage("Prince"));


                            // lecture - 2 

            
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 800))

                                    // function through object 

const user = {
    username: "prince",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "gayle",
    price: 333
})

                                    //  function through array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getarray) {
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));