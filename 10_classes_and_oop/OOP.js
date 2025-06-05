const user = {
    userName: 'Prince',
    loginCount: 9,
    signedIn: true,

    getMyDetails: function(){
        // console.log('got user details from database');
        // console.log(`username: ${this.userName}`);
        console.log(this);
    }

}

// console.log(user.loginCount);
// console.log(user.getMyDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.userName = username
    this.loginCount = loginCount
    this.signedIn = isLoggedIn

    this.greetings = function() {
        console.log(`welcome ${this.username}`);
    }

    return this                 // this is implicitly returned
}

const userOne = new User('hitesh', 10, true)
const userTwo = new User('Prince', 5, false)

console.log(userOne.constructor);
// console.log(userTwo);


// instanceof method