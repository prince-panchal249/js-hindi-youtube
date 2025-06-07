// this all works after ES6, but not before

class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const chai = new user('chai', 'chai@gmail.com', '456')

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


                                       // behind the scenes, this is what happens


function myUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

myUser.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

myUser.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new myUser('tea', 'tea@gmail.com', '123')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());