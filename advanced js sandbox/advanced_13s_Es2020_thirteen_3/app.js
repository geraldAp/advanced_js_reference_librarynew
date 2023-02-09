// Es2020!
//BigInt
//Nullish Coalescing Operator ??
//Optional Chaining Operator ? .
//Promise.allSettled
//globalThis

// ! Big Int 1
// to get a big int you add n at the end of the number 

typeof 1n 

// as we know js has max safe numbers after that number js cant take it. 
// now js solves that problem with bigInt
9007199254740991
9007199254740991 + 10
9007199254741000 // a broken answer because it exceeded the max safe number 
9007199254740991n + 9007199254740991n
18014398509481982n // worked out fine because we included n at the end this gives as an answer with a typeof bigint

// ! Optional Chaining Operator ? . 2

let will_pokemon = {
    pikachu: {
        species : 'Mouse Pokemon',
        height : 0.4,
        weight : 6
    }
}
// getting wills pokemon's weight  
let weight = will_pokemon.pikachu.weight
console.log('weight', weight)

let Andrei_pokemon = {
    pikachu: {
        species : 'Mouse Pokemon',
        height : 0.8,
        weight : 30,
        // added for the nullish
        power: 'lightning'
    }
}

// how we would have probably checked and assigned the weight of wills pikachu to Andrei's Pikachu
if(Andrei_pokemon.pikachu && Andrei_pokemon.pikachu[weight]){
    let weight2 = Andrei_pokemon.pikachu.weight
} else {
    let weight2 = undefined;
    console.log(weight2)
}

//A better and simpler way to the above without getting errors 
// all thats being done is its checking if there is an object called
// andrei pokemon and a nested  object in it called pikachu with a property of weight before assigning
//it to weight 3 since pikachu cant be found it will assign undefined to it 
let weight3 = Andrei_pokemon?.pikachu?.weight
console.log(weight3)


//! Nullish Coalescing Operator ?? 3
// referencing the data above 
// so with this it checks if it has the property and gives a conditional output eg
// since pikachu has a power lightning it will assign it if not it will out
let power = Andrei_pokemon?.pikachu?.power || 'no power' 

// so in a case where the pikachu still evolving and has no power value yet but has the potential for power 
// we'd preferably use this the nullish operator this doesn't check whether its truthy 
// but checks whether its null or undefined 
let power2 = Andrei_pokemon?.pikachu?.power ?? 'no power' 





// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER) -9007199254740991 // this


// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
//because not all the values have a bign attached to them
3n + 4n + 1n // fixed

// Exercise 3: Clean up this code using optional chaining
let will_pokemon2 = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon2 = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))

