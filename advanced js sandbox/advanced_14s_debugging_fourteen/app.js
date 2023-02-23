const play = [[0,1],[2,3],[4,5]];

// const flattened = play.reduce((a,b) => a.concat(b),[]) 

//debugged method
function runCodeFromTerminal() {
    const flattened = play.reduce(
        (accumulator,array) => {
            // when used thee console opens a debugger for us 
            console.log(array);
       return accumulator.concat(array)
    },[])
    // this is basically flattening the array

}
runCodeFromTerminal()

