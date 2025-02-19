// var c = 300
let a = 300   // this is global scope variable

if(true){
    let a = 10  // this is local scope variable or block scope variable
    const b = 20  // this is local scope variable or block scope variable
    // console.log("INNER: ", a);   
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Prince"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if(true) {
    const username = "Prince"
    
    if (username === "Prince") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++


console.log(addone(5));  // we can call function before declaration when it's not store not variable

function addone(num){
    return num + 1
}
// addone(5)



console.log(addtwo(5));     // we can not call function before declaration when it store function in variable.

const addtwo = function(num){
    return num + 2
}
addtwo(5)
// console.log(addtwo(5));
