// function minDistance(word1: string, word2: string): number {
//     const m = word1.length;
//     const n = word2.length;

//     // dp[j] akan menyimpan jarak edit untuk word1[0...i] dan word2[0...j]
//     let dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);

//     for (let i = 1; i <= m; i++) {
//         let prev = dp[0]; // Ini merepresentasikan dp[i-1][j-1]
//         dp[0] = i; // Kolom pertama (mengubah word1[0...i] menjadi string kosong)

//         for (let j = 1; j <= n; j++) {
//             let temp = dp[j];
            
//             if (word1[i - 1] === word2[j - 1]) {
//                 // Karakter sama, tidak ada biaya tambahan
//                 dp[j] = prev;
//             } else {
//                 // Karakter beda, ambil minimum dari (hapus, sisip, ganti) + 1
//                 dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
//             }
//             prev = temp;
//         }
//     }

//     return dp[n];
// }

function minDistance(word1: string, word2: string): number {
    let m = word1.length;
    let n = word2.length;

    // 1. Skip awalan yang sama
    let start = 0;
    while (start < m && start < n && word1[start] === word2[start]) {
        start++;
    }

    // 2. Skip akhiran yang sama
    while (start < m && start < n && word1[m - 1] === word2[n - 1]) {
        m--;
        n--;
    }

    // Update panjang setelah trimming
    word1 = word1.substring(start, m);
    word2 = word2.substring(start, n);
    m = word1.length;
    n = word2.length;

    if (m === 0) return n;
    if (n === 0) return m;

    // Pastikan n adalah yang terpendek untuk efisiensi ruang O(min(m, n))
    if (m < n) return minDistance(word2, word1);

    const dp = new Int32Array(n + 1);
    for (let j = 0; j <= n; j++) dp[j] = j;

    for (let i = 1; i <= m; i++) {
        let prev = dp[0];
        dp[0] = i;
        for (let j = 1; j <= n; j++) {
            const temp = dp[j];
            if (word1[i - 1] === word2[j - 1]) {
                dp[j] = prev;
            } else {
                // Math.min dengan 3 argumen terkadang lambat di V8, 
                // nested ternary atau if manual seringkali lebih cepat
                const min = prev < dp[j - 1] ? (prev < dp[j] ? prev : dp[j]) : (dp[j - 1] < dp[j] ? dp[j - 1] : dp[j]);
                dp[j] = min + 1;
            }
            prev = temp;
        }
    }

    return dp[n];
}