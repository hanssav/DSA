function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n = s1.length;
    const m = s2.length;

    if (n + m !== s3.length) return false;

    // dp[i][j] melambangkan apakah s1[0...i-1] dan s2[0...j-1] bisa membentuk s3[0...i+j-1]
    const dp: boolean[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));

    dp[0][0] = true;

    // Isi kolom pertama (hanya menggunakan s1)
    for (let i = 1; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // Isi baris pertama (hanya menggunakan s2)
    for (let j = 1; j <= m; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Isi sisa tabel
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const charS3 = s3[i + j - 1];
            
            // Bisa ambil dari s1 jika s1[i-1] cocok DAN sebelumnya sudah valid
            const fromS1 = dp[i - 1][j] && s1[i - 1] === charS3;
            
            // Bisa ambil dari s2 jika s2[j-1] cocok DAN sebelumnya sudah valid
            const fromS2 = dp[i][j - 1] && s2[j - 1] === charS3;

            dp[i][j] = fromS1 || fromS2;
        }
    }

    return dp[n][m];
}