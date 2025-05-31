                             // Promises in JavaScript --- resolve 

const promiseOne = new Promise(function(resolve, reject){
    // do an asynchronous task
    // DB call, cryptography, network

    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

                            // shorthand syntax


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2'); 
        resolve()
    })
}, 1000).then(() => {
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Prince', email: 'prince@example.com'})
    }, 1000)
})

promiseThree.then(function(empty){    // we can name the parameter anything
    console.log(empty);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Rohit', passowrd: '123'})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((errer) => {
    console.log(errer);
}).finally(() => console.log('the promise is either resolved or rejected'));  // finally is always executed


const promiseFive = new Promise((resolve, reject)=> {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: 'Javascript', passowrd: '123'})
        }
        else{
            reject('Error: js Went wrong')
        }
    }, 1000)
})


async function consumePromsieFive() {
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);
    }   
}

consumePromsieFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()     //  converts the response to JSON and it taked time tht's why we use await
//         console.log(data);
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// }

// getAllUsers() 


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json();  // converts the response to JSON
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))