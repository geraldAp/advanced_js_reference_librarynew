// let and const

// const player = 'bobby';
// let experience = 100;
// let wizardlevel = false;



// Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardlevel: false
}

// const player = obj.player;
// const experience = obj.experience;
// const wizardlevel = obj.wizardlevel;

// destructers make writing and getting the above esier and cleaner
const { player, experience } = obj
let { wizardlevel } = obj;

// Object Properties//
const name1 = 'john snow';

const obj2 = {
    [name1]: 'hello',
    [1 + 2]: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};

//  Object properties sub 2
// useful in react section when the value and property are the same you do this now instead of the old one
const obj3 = {
    // old way //
    // a:a,
    // b:b,
    // c:c
    // New way//
    a,
    b,
    c
}

//  Object properties sub 3
//template strings
// const name2 = "Sally";
// const age = 34;
// const pet = "horse";
// const greet = "fine";
// // old way
// const greeting = "hello " + name2 + " you seem to be doing " + greet + "!";
// // new way
// const greetingBest = `Hello ${name2} you seem to be ${age - 10}, what a lovely ${pet} you have. `

// Default arguments sub 4 //
function greet(name = "", age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age - 10}, what a lovely ${pet} you have.`
}

// Symbol sub 5
let syn1 = symbol();
let syn2 = symbol('foo');
let syn3 = symbol('foo');

// Arrow functions sub 6

// normal function way 
function add(a, b) {
    return a + b;
}

// arrow function
const add2 = (a, b) => a + b;
or
const add3 = (a, b) => {
    return a + b;
}


// ****************************************************************************************************************************************************************
// excercise

// // change everything below to the newer Javascript!

// // let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';
// // answer
// let a = 'test'
// const b = true;
// const c = 789;
// let a = 'test2';

// // Destructuring
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };



// // const firstName = person.firstName;
// // const lastName = person.lastName;
// // const age = person.age;
// // const eyeColor = person.eyeColor;

// // answer
// const { firstName, lastName, age, eyeColor } = person

// // Object properties
// const a = 'test';
// const b = true;
// const c = 789;

// // const okObj = {
// //     a: a,
// //     b: b,
// //     c: c
// // };

// // answer
// const okObj = {
//     a,
//     b,
//     c
// };


// // Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// // answer
// const message = `Hello ${firstName} have  met you before? I think we met in ${city} last summer no???`


// // default arguments
// // default age to 10;
// function isValidAge(age) {
//     return age
// }

// // answer
// function isValidAge(age = 10) {
//     return age
// }

// const isValidAge = (age = 10) => age

// // Symbol
// // Create a symbol: "This is my first Symbol"
// // answer
// const sym = Symbol(`This is my first Symbol`)

// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

// // answer

// const whereAmI = (username, Location) => {
//     if (username && Location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

