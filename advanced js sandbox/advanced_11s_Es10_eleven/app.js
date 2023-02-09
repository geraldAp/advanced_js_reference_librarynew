// // Es10 2019




const array = [1, 2, 3, 4, 5];
array.flat();
// returns (5) [1,2,3,4,5] because the array is already flat.

const array2 = [1, [2, 3], [4, 5]];
array2.flat();
// returns (5) [1,2,3,4,5] because the array is flattens it by the default 1 thus killing the inner single arrays.

const array3 = [1, 2, [3, 4, [5]]];
array3.flat();
// returns (5) [1,2,3,4, Array(1)];
//ths because the happen to be two instances of an inner array and
// since the default is set to one it will only flatten ones if the flat value was set to two we would get resauts like the abve

const JurassicPark = [['🦞', '🦀'], '🕷', '🐢', ['🐍', '🐊'], [[[['🦖']]]], '🦕']
// nw wit this instead of counting the number of arrays in order to flatten the array
// set a much random high value fr the flat and youd get your desired full flat result

// another useful thing from flat

// real life scenario entries from users
// we get entries and also end up getting empty entries
const entries = ['bob', 'sally', , , , , , 'cindy'];
entries.flat() // cleans it up and returns  (3) ['bob','sally','cindy']

// ! flatMap 2
// works just like the map but makes us flatten the result to a depth of one
const JurassicParkChaos = JurassicPark.flatMap(creature => creature + '🦖')
// returns this (6) ['🦞,🦀🦖', '🕷🦖', '🐢🦖', '🐍,🐊🦖', '🦖🦖', '🦕🦖'] ;

// ! trimStart(), trimEnd(). 3,4
// lets say we get user input and there ar  spaces this can clean it up eg

const userEmail1 = '            justinwahala16@gmail.com';
const userEmail2 = 'justinwaha17@gmail.com               ';

console.log(userEmail1.trimStart()) // returns without wide unwanted spaces
console.log(userEmail2.trimEnd()) // returns without wide unwanted spaces




// ! fromEntries 5
// opposite of entries  changes key value pairs in arrays to objects unlike entries which converts the object to an array


userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

Object.fromEntries(userProfiles);
// returns
// {commanderTom: 23, derekZlander: 40, hansel: 18}
// an object


// error handling try and catch block
// you try a piece of code if its valid it runs if not 
// you set a condition or message in the catch block to catch the error and notify you
// this threw an error

// old way 
// had to pass in an error parameter
try {
    1 + 2
    bob + 2
} catch (error) {
    console.log('you messed up')
}
// answer 3
// you messed up

// new way with es10
try {
    1 + 2
    bob + 2
} catch {
    console.log('you messed up')
}
// answer 3
// you messed up






































