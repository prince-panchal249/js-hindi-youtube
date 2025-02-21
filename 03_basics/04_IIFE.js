// Immediately Invoked Function Expression (IIFE)


(function chai(){      // remember this from last file (03_arrow.js)
         // named IIFE
    console.log(`DB CONNECTED`);    // iife define for avoid variable of global scope pollution.
})();           // IIFE function ends with "semicolon" otherwise it will give error


                       // IIFE in arrow function


( (name) => {
            // simple IIFE   (unnamed IIFE)
    console.log(`DB CONNECTED TWO ${name}`);
} )("Prince");        // IIFE function ends with "semicolon" otherwise it will give error