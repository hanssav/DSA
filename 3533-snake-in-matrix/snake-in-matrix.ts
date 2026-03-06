function finalPositionOfSnake(n: number, commands: string[]): number {
    let m = []; 
    let val = 0; 

    for(let i = 0; i < n; i++){
        let row = []; 

        for(let j = 0; j < n; j++){
            row.push(val); 

            val++
        }

        m.push(row)
    }

    let curr = [0, 0]; 

    for(const c of commands){
        if(c === "LEFT"){
            curr[1]--;
        } else if (c === "RIGHT"){
            curr[1]++;
        } else if (c === "DOWN"){
            curr[0]++; 
        } else {
            curr[0]--;
        }
    }

    return m[curr[0]][curr[1]];
};