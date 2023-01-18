


// Root scope 

var fun = 5;

function funFunction() {
    //  child scope 
    var fun = "helloooo";
    console.log(1, fun)
}
function funerFunction() {
    //  child scope 
    var fun = "Byee";
    console.log(2, fun)
}
function funestFunction() {
    //  child scope 
    fun = "Ahhhhh";
    console.log(3, fun)
}
funFunction()
funerFunction()
funestFunction()

console.log("window", fun);

// scope exercise
