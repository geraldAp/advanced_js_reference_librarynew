//out of context 1)....how to listen to mouse events ( click)
// // var button = document.getElementsByTagName("button")[0];
// //button.addEventListener("click", function () {
// // console.log("Click!!!!");
// // })

// // here we are selecting the button the input and the ul to add the events 

// //1) creating the variables
// var button = document.getElementById("enter");
// var input = document.getElementById("user-input");
// var ul = document.querySelector("ul");
// const LI = document.querySelectorAll("li");

// // we created a function for the input.value.length 

// function inputLength() {
// 	return input.value.length;
// }

// // we created a function for the list element 
// function createListElement() {
// 	// we are creating another li using the create element method 
// 	var li = document.createElement("li");
// 	// the li we have created we want to attach it to the bottom of the list thus we do this
// 	li.appendChild(document.createTextNode(input.value));
// 	// this has ben created but has not been aattached to anything  
// 	ul.appendChild(li);




// 	// by doing this we have appended (added the li to the ul)
// 	input.value = "";
// 	//this was done so when the first instructions and the input value has been added the input section clears


// 	var button = document.createElement("button");
// 	button.appendChild(document.createTextNode("Done!"));
// 	Li.appendChild(button);
// 	button.onclick = underlineParent;
// 	// CREATE AN ELEMENT
// 	var button = document.createElement("button");
// 	// APPEND TEXT TO BUTTON
// 	button.appendChild(document.createTextNode("Delete!"));
// 	// APPEND BUTTON TO LIST
// 	Li.appendChild(button);

// 	button.onclick = removeParent;
// 	//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
// }


// function underlineParent(event) {
// 	event.target.parentNode.classList.toggle("done");
// }


// function removeParent(evt) {
// 	evt.target.parentNode.remove();
// }


// // we created this function to be used as what we want the click to do
// function addListAfterClick() {
// 	// the if statement here was created to to give a condition in order to prevent empty values from being added to the list  
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }


// button.addEventListener("click", addListAfterClick)

// //**** this is being done so as to enable the user use a keyboard command to initialie their input value to be added to the List 
// //- instead of button we used input here
// // when the input value is pressed it s storen n the function here 

// function addListAfterKeypress(event) {
// 	// since the enter keyes key code is 13 we add the event.key in the condition to be equal
// 	if (inputLength() > 0 && event.keyCode == 13) {
// 		createListElement()
// 	}
// }


// //line through function
// function clickToToggle() {
// 	li.classList.toggle('done');
// }

// input.addEventListener("keypress", addListAfterKeypress)


// li.classList.toggle("done");



var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");



//add event listener to first 6 btns in HTML file
for (var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function lineThrough(event) {
	var a = event.target;

	if (count == 0) {

		a.classList.add("done");
	}
	else {
		a.classList.toggle("done");
	}
	count++;


}

ul.onclick = function (event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


//adding new items:

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}


function addToListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addToListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);




