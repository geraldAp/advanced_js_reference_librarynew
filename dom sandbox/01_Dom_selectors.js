










changing styles using dom selectors
1.) using the style tag
eg
document.querySelector("h1").style;

**** */ to change the background of what you selected
document.querySelector("h1").style.background = "blue";
the issue tho is seperation of concern in a sense html focuses on the text
css on the style and js on the action

2) a better way to do this using the class name and class title
classNAme: var h1 = document.querySelector("h1");
undefined
h1.className= "coolTitle";
'coolTitle'
there is a style with class cooltitle and these class hass been added to the hi
classList(using the class list th eelement in question must already have a class)
classList:
using add adding a class: document.querySelector("li").classList.add("coolTitle");
using removing a class: document.querySelector("li").classList.remove("coolTitle");
adding another class: document.querySelector("li").classList.add("done");
//  incase you want to remove you can use this toggle is verry useful for a lot of things as well :document.querySelector("li").classList.toggle("done");

// 3) bonus but dangerous : Inner html
// changing the element in the h1 tag :
document.querySelector("h1");
document.querySelector("h1").innerHTML = "<em>Trick or Treat</em>";
// this changed the initial value in the h1 tag to trick r treat