const mynums = [1, 2, 3]

                                        // normal function

// const totalNumers = mynums.reduce ( function (accumulator, currentvalue) {
// console.log(`Accumulator: ${accumulator} and Current value : ${currentvalue} `);      // to see the values of acc and currvalue
// return accumulator + currentvalue
// }, 0 )           // here 0 is the initial value of accumulator

// console.log(totalNumers);


                                        // arrow function

// const totalNumers = mynums.reduce ( (accumulator, currentvalue) => (accumulator + currentvalue), 0 )
// console.log(totalNumers);


const shoppingCart = [
    {
        itemName: 'js-course',
        price: 2999
    },
    {
        itemName: 'py-course',
        price: 999
    },
    {
        itemName: 'mpbile-dev-course',
        price: 5999
    },
    {
        itemName: 'data-science-course',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (accumulator, items) => (accumulator + items.price), 0 )
console.log(priceToPay);
