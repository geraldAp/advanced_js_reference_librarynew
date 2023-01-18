// Advanced arrays

const array = [1, 2, 10, 16];
const double = [];
// when you have a single parameter with an arrow function yo can avoid the bracket
const newArray = array.forEach(num => {
    // pushes the result of multiplying 2 with the val of the existing array into the double array 
    double.push(num * 2);
})

console.log('foreach', double);

// map, filter, reduce

// ! map 1
// so for the above using map t get the same result
//with map you have to return what you want
const mapArray = array.map(val => val * 2);
//use map for  simple iterations  map transforms the array into a new array with for each we had to push into an empty array 

console.log('map', mapArray);

// ! filter 1
// this filters through the array and you can give it a condition and it returns the val f thre condition given

const filterArray = array.filter(num => num > 5)

// ! Reduce 3 apparently the most pwerful and yu can really d a lot with reduce you can map and filter with reduce
// takes two arguments accumulator and num or whatever 
// the accumulator stores what ever is returned previusly
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
    // the number after the curly braces is the reduced 
}, 5)



// Complete the below questions using this array:
const array2 = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames


let pushArray = []

array2.forEach(user => {
    let { username } = user;
    username = username + "!";
    pushArray.push(username);
})
console.log(pushArray);
//Create an array using map that has all the usernames with a "? to each of the usernames

const newArray2 = array2.map(user => {
    let { username } = user;
    return username + '!'
})

console.log(newArray2)

//Filter the array to only include users who are on team: red

const filterarray2 = array2.filter(user => {
    return user.team === "red";
})
console.log(filterarray2)

// //Find out the total score of all users using reduce
// const total = array.reduce((acc, user) => {
// 	return acc + user.score
// }, 0);
// console.log(total);


// // (1), what is the value of i? INDEX of the array.
// // (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	return num * 2;
// })



// //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const answer = array.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);
// // 