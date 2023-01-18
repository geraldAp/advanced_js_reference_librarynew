// Advanced objects //
// reference type
// context
// instantiation



// ! reference type 1

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object3 // false

object1 === object2 // true

object1.value = 15; // the value has been chnged to 15

object2.value; // we get 15

object3.value // still 10

// basically all whats being said is object1 and 2 have their own world and changes that happen in each are individual and they are created and defined by the programmer

// ! context 2
// this is the window object 
