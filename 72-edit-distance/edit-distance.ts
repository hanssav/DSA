function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;

    // dp[j] akan menyimpan jarak edit untuk word1[0...i] dan word2[0...j]
    let dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);

    for (let i = 1; i <= m; i++) {
        let prev = dp[0]; // Ini merepresentasikan dp[i-1][j-1]
        dp[0] = i; // Kolom pertama (mengubah word1[0...i] menjadi string kosong)

        for (let j = 1; j <= n; j++) {
            let temp = dp[j];
            
            if (word1[i - 1] === word2[j - 1]) {
                // Karakter sama, tidak ada biaya tambahan
                dp[j] = prev;
            } else {
                // Karakter beda, ambil minimum dari (hapus, sisip, ganti) + 1
                dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
            }
            prev = temp;
        }
    }

    return dp[n];
}