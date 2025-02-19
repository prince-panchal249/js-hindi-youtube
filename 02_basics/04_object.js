// const tinderuser = new Object()  // singleton object
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "rohitsharma264@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohit",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}   // spread method
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

// console.log(users[1].id);
// console.log(users.slice(0,2));

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLogged"));

// console.log(tinderuser.toLocaleString());  // don't know the parameter that's why don't print

// console.log(tinderuser.length);

                                    //  objet de-structure


const cource = {
    courceName: "js in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

// cource.courceInstructor

const {courceInstructor: instructor} = cource  // object de-structure

// console.log(courceInstructor);
console.log(instructor);

                                        // json API

// {       // its like object, but here keys are also string. in object, keys are not in string
//     "name": "hitesh",
//     "courcename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// randomuser me api
// json formatter