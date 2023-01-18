// ternary operator //
// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "This works well" : "erro error error";

// var autmatedAnswer =
//     "Your account # is" + (isUserValid(false) ? "1234" : "not available")

// switch statement //

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "yu encunter a monster";
            break;
        case "back":
            whatHappens = "yu encunter a pretty girl";
            break;
        case "right":
            whatHappens = "yu found food";
            break;
        case "left":
            whatHappens = "yu find the trolls hiding place";
            break;
        default:
            whatHappens = "please enter a valid direction";
            break;
    }
    return whatHappens;

}

// Exercise //
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
