var css = document.querySelector("h3");
//selected a class
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body = document.getElementById("gradient");

//we are using an event called input thus if the input value is changed we get the value
// using the on input in the js file
color1.addEventListener("input", BgStyle)

color2.addEventListener("input", BgStyle)

function BgStyle() {
    body.style.background =
        "linear-gradient( to right,"
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}


// trying somethung out
//color 1
// css.appendChild(document.createTextNode(color1.value))