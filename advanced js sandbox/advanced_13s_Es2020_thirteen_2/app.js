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
    raichu: {
        species : 'Mouse Pokemon',
        height : 0.8,
        weight : 30
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
