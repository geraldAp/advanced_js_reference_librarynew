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
// this is the object obect environment its in eg if we had an object obj with propert name this.name translates to obj.name so this is to the left of the dot 

const object41 = {
    a: function () {
        console.log(this);
    }


}

// ! instantiation 1
//making a copy of the object and reusing the code
// a constructor is a special method for assigning properties.
// It Automatically  called when creating an object
class Player {
    constructor(name, type) {
        console.log('Player', this)
        this.name = name;
        this.type = type;

    }

    // by extending and using super  this on the left becomes 
    // wizard and the wiard class has acces to the introduce object  
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}
// we used the extend to access the player and add on to what player has 
class Wizard extends Player {
    // We used super to acces the name and type in the player
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)

    }
    play() {
        console.log(`Weeeeee I'm a ${this.type}`)
    }
}

// now when we want to create multiple wizards or characters

const wizard1 = new Wizard('Shelly', 'healer')
const wizard2 = new Wizard('Bran', 'night walker')


// Excercise
//Evaluate these:
//#1
[2] === [2]  //false 
{ } === {} // fase

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5 }; // 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color
    }

}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound() {
        console.log(`moo I'm ${this.name} a ${this.color} ${this.type}`)
    }
}

const cow = new Mammal('rita', 'cow', 'brown');