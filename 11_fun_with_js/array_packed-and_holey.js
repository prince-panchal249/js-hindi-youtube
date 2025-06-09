const myArr = []
// %DebugPrint(myArr)            // ????

// SMI (small integer)

// continious(PACKED), holey
// continious means it will run continously
// holey means there is a hole in array, hole means there is a missing value in array

// SMI (small integer)
// packed element
// double (float, string, function)

                                        // continious, means same type of data-type

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENT    // it is default

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENT

arrTwo.push('7')
// PACKED_ELEMENT

                                        // holey, means there is a gap or different types of data-types
                                        //  if your element once become holey, then it will be forever consider as a holey element

arrTwo[10] = 11
// HOLEY_ELEMENT

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9])


                         // when there is hole in array, you must follow below process       

// bound check
// hasOwnProperty(arrtwo, 9)
// hasOwnProperty(arrtwo.prototype, 10)
// hasOwnProperty(Object.prototype, 9)

// holes are very expensive in js


const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);


// SMI > DOUBLE > PACKED         --->    continious
// H_SMI > H_DOUBLE > H_PACKED   --->    holey


const arrFour = new Array(3)
// just 3 holes. holey_SMI_ELEMENT
arrFour[1] = '1'  // HOLEY_ELEMENT
arrFour[1] = '2'  // HOLEY_ELEMENT
arrFour[1] = '3'  // HOLEY_ELEMENT

const arrFive = []
arrFive.push('1')   // PACKED_ELEMENT
arrFive.push('2')   // PACKED_ELEMENT
arrFive.push('3')   // PACKED_ELEMENT


const arrSix = [1, 2, 3, 4, 5]
// arrSix.push(NAN)           // PACKED_DOUBLE
arrSix.push(Infinity)      // PACKED_DOUBLE


// for, for-of, forEACH  ---- loops will recommend fisrt