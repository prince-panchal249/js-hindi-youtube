// for loop

// const array = [1, 2, 3, 4, 5, 6]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(`element at index ${index} : ${element}`);
//     // console.log(element);
// }


for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is even number");
    }

    // console.log(element);
}

// console.log(element);


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + ' X ' + j + '=' + i*j);
        
    }
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



// break and continue


                                        // break keyword

// for (let index = 1; index <= 20; index++) {
//     // const element = array[index];

//     if (index == 5) {
//         console.log(`Detected 5`);
//         break            // break keyword ends the loop of iteration and  get out of the scope
//     }

//     console.log(`value of i is ${index}`);
// }

                                        // continue keyword


for (let index = 1; index <= 20; index++) {
    // const element = array[index];

    if (index == 5) {
        console.log(`Detected 5`);
        continue              // continue skips the iteration for temporary and works again as same as before
    }

    console.log(`value of i is ${index}`);
}