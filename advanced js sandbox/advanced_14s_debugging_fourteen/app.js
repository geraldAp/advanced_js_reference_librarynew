const play = [[0,1],[2,3],[4,5]];

// const flattened = play.reduce((a,b) => a.concat(b),[]) 

//debuged method
function runCodeFromTerminal() {
    const flattened = play.reduce(
        (accumulator,array) => {
            // when used thee console opens a debbuger for us 
            console.log(array);
       return accumulator.concat(array)
    },[])
    // this is basically flattening the array

}
runCodeFromTerminal()