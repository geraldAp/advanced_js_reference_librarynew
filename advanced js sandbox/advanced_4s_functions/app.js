// advanced functions

// function first() {
//     var greet = 'hi'
//     function second() {
//         alert(greet)
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();

// new way better
// closures 1
const first = () => {
    const greet = 'hi'
    const second = () => {
        alert(greet)
    }
    return second
}

// okay so bassically the code above as you can read is returning the result of the child function. the child  function has 
// so the child scope function has access to the parent scope but parent scopes dont have acces to the child scope var unless the child scpe is returned
const newFunc = first();
newFunc();

//curryng 2
// the process of converting a function that takes multiple arguments into a function that takes them one at a time 
const multiply = (a, b) => a * b;
// here we go 
const curriedMultiply = (a) => (b) => a * b;

//now when i call multiplyBy5() what ever s put in the bracket is multiplied by 5
const multiplyBy5 = curriedMultiply(5);

// compose 3 i
// the act of putting two functions together to form a third functin and the output of one function is the input of the other function
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1

// compose(sum,sum)(5);

// it returns 7

// Most important thing to do as a web developer when coding
// avoiding side effects, functional purity.

//Solve these problems:

// //#1 Create a one line function that adds adds two parameters

// //Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

// // answer 13

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

// // answer 31


// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

// // answer 17

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

// // answer 16



// //What are the two elements of a pure function?




