// Got two new additions to it 
// 1. Includes 
//2. exponential operator

// ! Includes 1
// eg 
'Helooooo'.includes('o') // true

// 2
const pet = ['dog', 'cat', 'bird'];

pet.includes('cat') //true
pet.includes('lion') //false

// ! exponential operator 2
const square = (x) => x ** 2
const cube = (y) => y ** 2



// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons2.filter(names => names.includes('John')) // Returns Johnathan


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const to100 = (x) => x ** 100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
to100(10000) // infinity
