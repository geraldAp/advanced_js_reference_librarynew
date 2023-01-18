// robot instructions
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
       
   
   
    console.log("buy " + calcBottles(money,1.5) + " bottles of milk");   
   
    console.log("moveLeft");
    console.log("moveLeft");  
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown"); 
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
   
    
   return  calcChange(money,1.5);
       
           
   }
   
   function calcBottles(startingMoney, costPerBottles){
   
           var numberOfBottles = Math.floor(startingMoney / costPerBottles);
   return numberOfBottles;
      
   }
   
   function  calcChange(startingAmount, costPerBottles) {
       var change = startingAmount % costPerBottles; 
       return change;
   }
   console.log("Dear sir your change is " + getMilk(5));



   // SIMPLER METH
 function getMilk(money ,costPerBottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
       
   
   
    console.log("buy " + calcBottles(money, costPerBottles) + " bottles of milk");   
   
    console.log("moveLeft");
    console.log("moveLeft");  
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown"); 
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
   
    
   return  calcChange(money, costPerBottles);
       
           
   }
   
   function calcBottles(startingMoney, costPerBottles){
   
           var numberOfBottles = Math.floor(startingMoney / costPerBottles);
   return numberOfBottles;
      
   }
   
   function  calcChange(startingAmount, costPerBottles) {
       var change = startingAmount % costPerBottles; 
       return change;
   }
   console.log("Dear sir your change is " +  getMilk(10, 1.5));