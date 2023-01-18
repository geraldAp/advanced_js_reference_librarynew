var todos = [
    "clean room",
    "brushteeth",
    "exercise",
    "study Js",
    "eat healthy"
];
// now if we want to clear the content we'd go this way i dont rally get it but kay
var todosLength = todos.length;
//  we replaced todos.length with the var
// we did so when the loop runs the value is a fixed 5 and the pop loops ver and clears everything
// for (var i = 0; i < todosLength; i++) {

//     console.log(todos[i], i);
// accessing the content
// console.log(todos[i]);
//Now to add something to the content
// console.log(todos[i] + "!"); this addition just appears on the consle but has not been added to the initial todo.
//Now actually adding it and implementing it on the actual todos
// todos[i] = todos[i] + "!";
// }

// FOR EACH LOOP ECMA NEW 
// so the foreach loop here took an array and asked for an argument it wants 
// to know what to do with it and the todos can be represented by a functon
// te function recieves the argument f i which represents each item
//with the for each we arent necesarrily accesing the index

//and to make it even more simpler yo can create a function with the argument and call it 
function logTodo(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodo);
//While loop
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// counting viceversa
// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--
// }


// do loop
// var counterTwo = 0;
// do {
//     console.log(counterTwo);
//     counterTwo++;
// } while (counterTwo < 10);

// VICE VERSA
// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

