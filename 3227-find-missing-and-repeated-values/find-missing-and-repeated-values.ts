function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let dimension = grid.length * grid[0].length;

    let arr = new Array(dimension + 1).fill(0);
    let res = [0, 0]

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            arr[grid[i][j]]++; 
        }
    }

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === 0) res[1] = i;
        else if (arr[i] === 2) res[0] = i;

        if(res[0] > 1 && res[1] > 1) break;
    }

    return res;
};