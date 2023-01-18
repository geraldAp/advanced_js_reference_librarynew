var facebook = {
    username: "mr.quick",
    password: "G000012345",
}

var database = [
    {
        username: "Gerald",
        password: "G000012345",
    },
    {
        username: "Kirk",
        password: "1738",
    },
    {
        username: "Richmann",
        password: "4190",
    }
];

var newsfeed = [
    {
        username: "Gerald",
        timeline: "today has been great cant wait for tomorrow",
    },
    {
        username: "Kirk",
        timeline: "chaley ano chop ohhh",
    },
    {
        username: "Richmann",
        timeline: "we go hard again",
    }
];
// if the name and pase is correct the loop will end and it will be true f not it will be false
function isUserValid(username, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username
            && database[i].password === pass) {
            return true;
        }
    }
    return false;
}
//what this is saying is if uservalid is true provide the feed if not and its false ren the else
function signIn(username, pass) {

    if (isUserValid(username, pass)) {
        console.log(newsfeed);
    } else {
        alert("sorry wrong user name or password ");
    }
    // if username == da
}

var userName = prompt("please type in your user name")
var passWord = prompt("please type in your password")

signIn(userName, passWord);


