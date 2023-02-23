//Climbing the mountain of modules

// Amagyei's guys version of modules

// Basic Setup
// the regular way we would handle this
// challenges global name space incase we want to create another people var
// hard to navigate if this gets bigger

//importing the data from data.js in the util folder
import { random, people } from "./utils/data.js";
// since its multiple things coming from the same file we separate it with a comma
// we also have to add an extension thats data.js in this case
//nb we wont be able to use it until we let js know we will be using modules
// we do this in the index.html file // done it now

//default export you can name it whatever you want
import showPeople from "./utils/showPeople.js";

// Get element 
import get from "./utils/getElement.js";

const container = get(".container");
const button = get(".btn");


button.addEventListener("click", () => {
  //callback function to get the people data
  //   now we do this thats from using the default export we passed in people
  // and set the container inner html to showPeople
  container.innerHTML = showPeople(people);
});

// to continue wit the modules you can either create a new file in this current folder
// or create a folder in this module folder
