// function uniquePaths(m: number, n: number): number {
//     const dp: number[] = Array(n).fill(1); 

//     for(let i = 1; i < m; i++){
//         for(let j = 1; j < n; j++){
//             // dp[j] yang lama = sel di atas (i-1, j)
//             // dp[j-1] yang baru = sel di kiri (i, j-1)

//             dp[j] = dp[j] + dp[j - 1];

//             console.log(dp)
//         }
//         console.log("=====")
//     }

//     return dp[n - 1];
// };

function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(1)); 

    // console.log(dp, 'dp')
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // Cara mencapai (i,j) = cara dari atas + cara dari kiri
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

            // console.log(dp)
        }
        // console.log("====")

    }

    // Hasil akhir ada di pojok kanan bawah
    return dp[m - 1][n - 1];
}