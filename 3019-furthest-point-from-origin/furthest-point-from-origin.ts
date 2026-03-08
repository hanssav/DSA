function furthestDistanceFromOrigin(moves: string): number {
    let count = 0; 
    let countM = 0; 

    for(const m of moves){
        if(m === "L") count--
        else if(m === "R") count++
        else countM++
    }; 

    return Math.abs(count) + countM
};