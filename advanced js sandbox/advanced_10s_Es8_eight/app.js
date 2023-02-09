,// Es8 added features
//  New functions added to strings 
// .padStart()
// .padEnd()
// eg PadStart
'Turtle'.padStart(10);
// "    Turtle" what it returns
// eg PadEnd
'Turtle'.padEnd(10);
// "Turtle    " what it returns

// for alignment of strings if you want specific padding

// 2 Trailing commas in functions parameter lists and calls

const fun = (
    a,
    b,
    c,
    d,
) => {
    console.log(a, b, c, d);
}

fun(1, 2, 3, 4,)
// apprently its syntatically beautiful

// ! 3 Object.values and object.entries object.keys

// using the object.keys to iterate or loop through objects 
eg

obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})

// now with object.values you only get and iterate through the object values
// here it goes
Object.values(obj).forEach((value) => {
    console.log(value)
})
// now with object.entries it gives you more power you get to iterate through the property and values
// here it goes it creates an array for each property and value given it an index too
Object.entries(obj).forEach(value => {
    console.log(value)
})

// Nb: you can use for each map and all the array functions as well.

// real life scenario
// getting this data from a backend database and we want it to generate usernames we would go this way

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})


