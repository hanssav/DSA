// function minPathSum(grid: number[][]): number {
//     const m = grid.length; 
//     const n = grid[0].length; 

//     for(let i = 0; i < m; i++){
//         for(let j = 0; j < n; j++){
//             if (i === 0 && j === 0) continue;

//             if(i ===0){
//                 grid[i][j] += grid[i][j - 1]; 
//             } else if(j === 0){
//                 grid[i][j] += grid[i - 1][j];
//             } else {
//                 grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
//             }
//         }
//     }

//     return grid[m - 1][n - 1];
// };

function minPathSum(grid: number[][]): number {
    const memo: Map<string, number> = new Map();

    function calculate(r: number, c: number): number {
        if (r === 0 && c === 0) return grid[0][0]; // Titik awal
        if (r < 0 || c < 0) return Infinity; // Luar batas grid
        
        const key = `${r},${c}`;
        if (memo.has(key)) return memo.get(key)!;

        // Biaya = harga kotak ini + minimum dari (atas atau kiri)
        const res = grid[r][c] + Math.min(calculate(r - 1, c), calculate(r, c - 1));
        memo.set(key, res);
        return res;
    }

    return calculate(grid.length - 1, grid[0].length - 1);
}