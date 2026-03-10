function checkXMatrix(grid: number[][]): boolean {
    const n= grid.length; 

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let is_diagonal = i === j || i + j === n - 1

            if(is_diagonal){
                if(grid[i][j] === 0) return false
            } else {
                if(grid[i][j] !== 0) return false
            }
        }
    }

    return true;
};