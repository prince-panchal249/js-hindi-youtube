// let myName = 'prince     '
// let myChannel = 'chai     '

// console.log(myName.trueLength);        // not property but want to use it like a method


let myheros = ['thor', 'spiderman']


let heropowers = {
    thor: 'hammer',
    spiderman: 'webslinging',

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {    // this refers to the object and refer to the prototype of the object
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function() {     // this refers to the array object only
    console.log(`hitesh says hello`);
}

// heropowers.hitesh()
// myheros.hitesh()
// myheros.heyHitesh()
// heropowers.heyHitesh()         // not present in the prototype of the object  ----- error



                                            // inheritance


const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const teacher = {
    makeVideos: true
}

const Teachingsupport = {
    isAvailable: true
}

const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: Teachingsupport
}

teacher.__proto__ = user;        // teacher is inheriting from user



                                        // modern way of doing inheritance


Object.setPrototypeOf(Teachingsupport,teacher)      // Teachingsupport is inheriting from teacher


let anotheruser = 'chaiAurCode' // this is a string object

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotheruser.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()