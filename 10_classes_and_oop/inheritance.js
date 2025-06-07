class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // Call the parent class constructor
        this.email = email 
        this.password = password
    }

    addCource() {
        console.log(`a new cource was added by ${this.username}`);
    }

}

const chai = new Teacher('chai', 'chai#45gmail.com', '123')
chai.addCource()

const masalaChai = new User('masalaChai')
masalaChai.logMe()

console.log(chai instanceof User);      // intsnace of Teacher