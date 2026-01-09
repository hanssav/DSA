function shiftGrid(grid: number[][], k: number): number[][] {
    const flat = grid.flat()

    for(let i = 0; i < k; i++){
        // const last = flat.pop() 
        flat.unshift(flat.pop());
    }

    const res = []
    const cols = grid[0].length; 

    for(let i = 0; i < flat.length; i += cols){
        res.push(flat.slice(i, i + cols))
    } 
    
    // console.log(flat, res)
    return res
};