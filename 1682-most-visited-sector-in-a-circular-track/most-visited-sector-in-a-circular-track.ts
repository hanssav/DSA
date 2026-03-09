function mostVisited(n: number, rounds: number[]): number[] {
    let s = rounds[0]; 
    let e = rounds[rounds.length - 1]; 

    let res = []; 

    if(s <= e){
        for(let i = s; i <= e; i++){
            res.push(i)
        }
    } else {
        for(let i = 1; i <= e; i++){
            res.push(i)
        }

        for(let i = s; i <= n; i++){
            res.push(i);
        }
    }

    return res; 
};