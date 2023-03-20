// Callbacks, promises, async/await
// Promises - Pending, resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

// call back and call back hell

btn.addEventListener("click", () => {});

/* in order to create the promise we have to come up with some kind of variable and use a constructor
and inside the promise constructor we need to pass in the call back function and iside the call back function you pass in two parameters 

*/

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve("hey value is true");
  } else {
    reject('there was a error,value is false')
  }
});
/*after the promise has been resolved we use the promise.then after .catch and 
 what ever you put inside is equal to the value in the resolve or reject
 then its made a call back function and you tell it what to do in this case its console logging 
 */

 promise.then((taco)=>{
    console.log(taco)
 })
 .catch((error)=>{
  console.log(error)
 })