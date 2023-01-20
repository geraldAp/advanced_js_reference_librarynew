var a = 5;
var b = 10;



var c = [1, 2, 3, 4, 5, 6];
// var d = c;

// d.push(1738);

// how to just clone an object instead of modifying it like the above

// for an Array we could concat
// like this
// c will still be the above and d would be the new thing with ts push
var d2 = [].concat(c);
d2.push(1738);
// for object cloning and putting in a different location in memory instead of referencing


let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);

// even if we are to change a value of a property in obj it want afect clone 
// eg
obj.c = 5;

console.log(clone);

// another way a new feature can be used on both arrays and objects. 
// eg 
let clone2 = { ...obj };

// now the problem with this methods for the object is it is shalow clonning
// if another object happens to be a property value 
// eg 
let objE = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};

let clone3 = { ...objE };
// even tho we cloned obje instead of referencing we didnt clone the inner object
// if we change the value of the inner object it will reflect in the cloned object 
// eg 
objE.c.depp = ' hahaha '
// the cloning only affects the first layer.

// now how to do deep cloning
// we use Json parse
// here we go 
let deepClone = JSON.parse(JSON.stringify(objE))
// becareful