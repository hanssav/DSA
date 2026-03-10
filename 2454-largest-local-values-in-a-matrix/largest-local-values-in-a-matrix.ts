function largestLocal(grid: number[][]): number[][] {
    let res = []; 
    const n = grid.length; 

    for(let row = 0; row < n - 2; row++){
        let v = [];

        for(let col = 0; col < n - 2; col++){
            let max = 0

            for(let i = row; i < row + 3; i++){
                for(let j = col; j < col + 3; j++){
                    max = Math.max(grid[i][j], max)
                }
            }

            v.push(max);
        }

        res.push(v)
    }

    return res;
};