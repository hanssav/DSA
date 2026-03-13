function uniquePaths(m: number, n: number): number {
    const dp: number[] = Array(n).fill(1); 

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            // dp[j] yang lama = sel di atas (i-1, j)
            // dp[j-1] yang baru = sel di kiri (i, j-1)

            dp[j] = dp[j] + dp[j - 1];

            // console.log(dp)
        }
    }

    return dp[n - 1];
};