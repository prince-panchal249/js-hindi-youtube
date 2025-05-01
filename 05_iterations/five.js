const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];
// Using forEach to iterate over the array  


// coding.forEach((language, index) => {
//   console.log(`Language ${index + 1}: ${language}`);
// }
// );


                                    // simple function

// coding.forEach( function (language) {
//     console.log("I love coding in " + language);          
// } )

                        
                                    // arrow function

// coding.forEach( (language) => {                            // you have to put arrow instead of function name
//     console.log("I love coding in " + language);            
// }
// )


// function printlanguage(language){
//     console.log(language);
// }                                           // give function as a parameter

// coding.forEach(printlanguage)               // call the function  ---  not necessary to put () after the function name



// coding.forEach( (language, index, arr) => {         //  you can also passs the index and array as a parameter

    // console.log(`language ${index + 1} : ${language} and the array is ${arr}`);  
    // console.log(language, index, arr);            // you can also pass the array as a parameter
    
// }  )


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py",
    }
]


myCoding.forEach( (languageInfo) => {
    console.log(`i love coding in ${languageInfo.languageName} and the file name is ${languageInfo.languageFileName}`);
} )