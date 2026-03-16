function minimumOperations(grid: number[][]): number {
    let count = 0; 
    const col = grid[0].length; 
    const row = grid.length;

    for(let i = 0; i < col; i++){
        for(let j = 1; j < row; j++){
            const cur = grid[j][i];
            const prev = grid[j - 1][i]; 

            if(prev >= cur) {
                let sum = prev + 1;
                const need = sum - cur
                count += need
                grid[j][i] = sum; 
                
                // console.log(grid, sum, count, i)
            }
        }
        
        // const prev = grid[i - 1][i - 1]; 
        // const curr = grid[i][i]; 

        // if(curr < prev){
        //     count + (prev - curr) + 1; 
        // }
    }

    return count;
};