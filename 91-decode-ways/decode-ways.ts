// function numDecodings(s: string): number {
//     const memo = new Map<number, number>();

//     function backtrack(index: number): number {
//         // Jika sudah sampai ujung string, berarti satu cara decoding berhasil
//         if (index === s.length) return 1;
        
//         // Jika angka dimulai dengan '0', tidak bisa di-decode
//         if (s[index] === '0') return 0;

//         // Cek apakah hasil index ini sudah pernah dihitung
//         if (memo.has(index)) return memo.get(index)!;

//         // Opsi 1: Ambil 1 digit saja
//         let res = backtrack(index + 1);

//         // Opsi 2: Ambil 2 digit (jika memungkinkan)
//         if (index + 1 < s.length) {
//             const twoDigit = parseInt(s.substring(index, index + 2));
//             if (twoDigit >= 10 && twoDigit <= 26) {
//                 res += backtrack(index + 2);
//             }
//         }

//         memo.set(index, res);
//         return res;
//     }

//     return backtrack(0);
// }

// function numDecodings(s: string): number {
//     if (!s || s[0] === '0') return 0;

//     const n = s.length;
//     const dp = new Array(n + 1).fill(0);
    
//     dp[0] = 1; // String kosong dianggap 1 cara dasar
//     dp[1] = 1; // Karakter pertama pasti valid karena sudah dicek s[0] !== '0'

//     for (let i = 2; i <= n; i++) {
//         // Cek satu digit terakhir
//         const single = parseInt(s.substring(i - 1, i));
//         if (single >= 1 && single <= 9) {
//             dp[i] += dp[i - 1];
//         }

//         // Cek dua digit terakhir
//         const double = parseInt(s.substring(i - 2, i));
//         if (double >= 10 && double <= 26) {
//             dp[i] += dp[i - 2];
//         }
//     }

//     return dp[n];
// }

function numDecodings(s: string): number {
    if (!s || s[0] === '0') return 0;

    let prev2 = 1; // Analog dengan dp[i-2]
    let prev1 = 1; // Analog dengan dp[i-1]

    for (let i = 1; i < s.length; i++) {
        let current = 0;
        
        // Cek satu digit
        if (s[i] !== '0') {
            current += prev1;
        }

        // Cek dua digit
        const double = parseInt(s.substring(i - 1, i + 1));
        if (double >= 10 && double <= 26) {
            current += prev2;
        }

        // Geser variabel untuk iterasi berikutnya
        prev2 = prev1;
        prev1 = current;
        
        // Jika di tengah jalan tidak ada cara sama sekali
        if (current === 0) return 0;
    }

    return prev1;
}