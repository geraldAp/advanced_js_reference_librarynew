// Asynchronous Java Script 
// Application performance interface 

// call Stack 
//Synchronous 
// works 1 by 1 
console.log(1);
console.log(2);
console.log(3);

// Asynchronous 
// eg 
console.log(1);
setTimeout(() => {
    console.log(2)
}, 1500)

console.log(3);
//part of the web api
// this is in the call stack but since we activated the set time out we activated the web api
//so we pop the settime out from the callStack thus making the others after it gets executed 
// after the time given is  elapsed the web api checks whats in it 
// realizes its a call back it gets it ready to be called then the event loops looks through 
// the empty call stack again and realizes the is a callback and  executes immediately
// even setting a time of 0 everything will 


// aside the js engine we also need the js run time environment 
 // namely web apis callback que and event loops

 // Call Stack



 //Web API

//  callback que 













 //Event loop
