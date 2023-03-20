/*
 js is a single threaded, synchronous language.
Make Soup
boil water 10min
chop carrots 
add carrots boil for 5min
chop onion
add onion boil for 5min


boilWater()
console.log("chop carrots");



// this is a call back hell through the nesting and this is annoying
function boilWater(time){
    console.log(`boiling......`);
setTimeout( ()=>{
    console.log("done");
console.log('add carrots hot water')

setTimeout( ()=>{
    console.log("Carrots are done");
    // after the carrots finish boiling 
    console.log("add onions to the hot water")
    // then you boil the onion
    setTimeout(()=>{
        console.log('Onions are done')
    },2000)
},3000)
// while the carrots are boiling you chop the onions
console.log("chop Onions");
},5000)}


 */

/* using the asynchronous 
BROWSER!!! they are not js functionality but rather given by the browser
 Fetch data, Get Geolocation, setTimeout, setTimer etc
Asynchronously simply means we are handing this off to a browser so we can do things in the browser while js is running
callbacks,promises, async/await
*/

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

// call back and call back hell
/*btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";

    setTimeout(() => {
      heading2.style.color = "green";

      setTimeout(() => {
        heading3.style.color = "blue";
      }, 2000);
    }, 3000);
  }, 2000);
});*/


/*/ with this setup tho its better than the callback hell, if there
 is an error with one of them. the subsequent ones will not execute */
btn.addEventListener("click", () => {
  addColor(1000, heading1, "red")
    .then(() => addColor(2000, heading2, "green"))
    .then(() => addColor(1000, heading3, "blue"))
    .catch((err) => console.log(err));
});

// the promises to avoid the call back hell
function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        //   in this case we don't have to provide any data
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
  s;
}
