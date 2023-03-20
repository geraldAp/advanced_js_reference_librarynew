/* using the asynchronous 
BROWSER!!! they are not js functionality but rather given by the browser
 Fetch data, Get Geolocation, setTimeout, setTimer etc
Asynchronously simply means we are handing this off to a browser so we can do things in the browser while js is running
callbacks,promises, async/await
*/

/*in order to use the await you would have to put the asynch before the function eg
async function someFunction (){
    await (what the awaits does is it waits till the promise is settled ) when you are not
     returning any kind of data there isn't a need to put it inside any variable 
} for an arrow function it would be 
const otherFunction = async() =>{
    await
}

*/

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  /*/ because the function is asynchronous it will work when you add the .then when you place
   async before a function, it is always going to return a promise*/
  const result = await displayColor();
  console.log(result);

  /*if you decide to return a value it will make sense to assign it to a variable and put the await before it it acts like the .then*/
});

async function displayColor() {
  /*/ put it in the try and catch block try works and catch catches any error and it does what
you want it to do 
/*/
  try {
    const first = await addColor(1000, heading1, "red");
    await addColor(1000, heading2, "green");
    await addColor(1000, heading3, "yellow");
  } catch (error) {
    console.log(error);
  }

  return "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
}

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
