// loops

// ones we already know
//for loop
const basket = ["apples", "grapes", "oranges"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 100,
};
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//for each
basket.forEach((basket) => console.log(basket));

//new ways we dont know
// 1 for of loop
// we are iterating meaning going one by one through an item and look at the item
// we can iterate over arrays and strings
//this doesnt work with objects
for (item of basket) {
  console.log(item);
}

// 2 for in loop
// enumerating is for objects
// works with both but returns the index of arrays
for (items in detailedBasket) {
  console.log(items);
}

const basket2 = ["apples", "oranges", "grapes"];
const detailedBasket2 = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach((item) => {
  console.log(item);
});

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray(arr) {
  highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }

  return highest;
}
// nb this is usually used for objects and will only return indexes of arrays
function biggestNumberInArray2(arr) {
  let highest = 0;
  for (item in arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}

function biggestNumberInArray3(arr) {
   let highest = 0;
   arr.forEach(item => {
      if (highest < item) {
         highest = item;
       }
   })

   return highest;
}


function biggestNumberInArray4(arr) {
   let highest = 0;
   for (item  of arr) {
     if (highest < item) {
       highest = item;
     }
   }
   return highest;
}

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
   for(item in basket){
      if( lookingFor = item){
         return `${lookingFor} is in your basket`
      }
      else{
         return `Sorry what you are looking for does not exist in this basket `
      }
   }
}
