function deleteGreatestValue(grid: number[][]): number {
    for(let i = 0; i < grid.length; i++){
        grid[i].sort((a, b) => b - a);
    }; 

    let count = 0; 

    while(grid[0].length > 0){
        let currMax = 0; 

        for(let i = 0; i < grid.length; i++){
            currMax = Math.max(currMax, grid[i].shift())
        }

        count += currMax;
    }

    return count;
};