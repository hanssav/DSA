function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // Jika start atau finish ada rintangan, tidak ada jalan sama sekali
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

    // Langkah 1: Set titik awal jadi 1 jalan
    obstacleGrid[0][0] = 1;

    // Langkah 2: Isi baris pertama (i = 0)
    for (let j = 1; j < n; j++) {
        // Jika kotak ini bukan rintangan DAN kotak sebelumnya bisa dilewati
        obstacleGrid[0][j] = (obstacleGrid[0][j] === 0 && obstacleGrid[0][j - 1] === 1) ? 1 : 0;
    }

    // Langkah 3: Isi kolom pertama (j = 0)
    for (let i = 1; i < m; i++) {
        // Jika kotak ini bukan rintangan DAN kotak atasnya bisa dilewati
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1) ? 1 : 0;
    }

    // Langkah 4: Loop utama untuk sisa grid
    for (let i = 1; i < m; i++) {
        const row = obstacleGrid[i];
        const prevRow = obstacleGrid[i - 1];
        
        for (let j = 1; j < n; j++) {
            if (row[j] === 1) {
                // Ada rintangan, set jalur jadi 0
                row[j] = 0;
            } else {
                // Jumlah jalur = atas + kiri
                row[j] = prevRow[j] + row[j - 1];
            }
        }
    }

    return obstacleGrid[m - 1][n - 1];
}