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

// function minPathSum(grid: number[][]): number {
//     const memo: Map<string, number> = new Map();

//     function calculate(r: number, c: number): number {
//         if (r === 0 && c === 0) return grid[0][0]; // Titik awal
//         if (r < 0 || c < 0) return Infinity; // Luar batas grid
        
//         const key = `${r},${c}`;
//         if (memo.has(key)) return memo.get(key)!;

//         // Biaya = harga kotak ini + minimum dari (atas atau kiri)
//         const res = grid[r][c] + Math.min(calculate(r - 1, c), calculate(r, c - 1));
//         memo.set(key, res);
//         return res;
//     }

//     return calculate(grid.length - 1, grid[0].length - 1);
// }

// function minPathSum(grid: number[][]): number {
//     const m = grid.length;
//     const n = grid[0].length;
//     const memo: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));

//     function solve(r: number, c: number): number {
//         if (r === 0 && c === 0) return grid[0][0];
//         if (r < 0 || c < 0) return Infinity;
//         if (memo[r][c] !== -1) return memo[r][c];

//         const res = grid[r][c] + Math.min(solve(r - 1, c), solve(r, c - 1));
//         memo[r][c] = res;
//         return res;
//     }

//     return solve(m - 1, n - 1);
// }

function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            
            // Logika digabung untuk mengurangi jumlah pengecekan 'if'
            const top = i > 0 ? grid[i - 1][j] : Infinity;
            const left = j > 0 ? grid[i][j - 1] : Infinity;
            
            grid[i][j] += Math.min(top, left);
        }
    }
    return grid[m - 1][n - 1];
}