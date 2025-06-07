const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // 3.141592653589793
// Math.PI is a read-only property, so it cannot be changed.

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log('Code fati gayo');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
    // configurable: false,
    // iteratable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }

    // console.log(`${key} : ${value}`);
}