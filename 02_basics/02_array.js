const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

                           // spread operater
                        
const all_new_heros = [...marvel_heros, ...dc_heros]   // can add more than 2 arrays
// console.log(all_new_heros);


const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // it converts multiple arrays into single element array.

const real_arr = another_arr.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray("Prince"));
console.log(Array.from("Prince"));
console.log(Array.from({name: "Prince"}));   // interesting because it will give empty array if we doesn't specify the value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
