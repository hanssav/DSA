function zigzagTraversal(grid: number[][]): number[] {
    const m = grid.length; 
    const n = grid[0].length; 
    const res = []; 

    let okToTake = true;

    for(let i = 0; i < m; i++){
        if(i % 2 === 0){
            for(let j = 0; j < n; j++){
                if(okToTake) res.push(grid[i][j]); 
                okToTake = !okToTake;
            }
        } else {
            for(let j = n - 1; j >= 0; j--){
                if (okToTake) res.push(grid[i][j]);
                okToTake = !okToTake;
            }
        }
    }

    return res;
};