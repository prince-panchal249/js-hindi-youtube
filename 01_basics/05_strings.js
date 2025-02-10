const name = "Prince"
const repoCount = 3

// console.log(name + repoCount + " repositories") // Prince3 repositories;
// console.log(name + " has " + repoCount + " repositories") // Princehas3repositories;
console.log(`${name} has ${repoCount} repositories`) // Prince has 3 repositories;

const gameName = new String("Pubg-COC-COD") // String Object
// console.log(gameName) // Pubg;

// console.log(gameName[2]);
console.log(gameName.__proto__);  // String Object


console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // PUBG
console.log(gameName.charAt(2)); // b 
console.log(gameName.indexOf('b')); // 2

const newGame = gameName.substring(1, 5)
console.log(newGame); // ubg-

const anotherGame = gameName.slice(-5, -4) // slice is similar to substring but it can take negative values
console.log(anotherGame);   // g-CO

const newStringOne = "    Prince    "  // remove white spaces from both sides
console.log(newStringOne);
console.log(newStringOne.trim()); // Prince


const url = "https://prince.com/prince%20panchal"

console.log(url.replace("%20", "-"));

console.log(url.includes("prince")); // true

// console.log(url.startsWith("https")); // true

// console.log(url.endsWith("panchal")); // true

console.log(url.split("/", 2)); // [ 'https:', '', 'prince.com', 'prince%20panchal' ]  // 2 is limit

