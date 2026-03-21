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

// function numDecodings(s: string): number {
//     if (!s || s[0] === '0') return 0;

//     let prev2 = 1; // Analog dengan dp[i-2]
//     let prev1 = 1; // Analog dengan dp[i-1]

//     for (let i = 1; i < s.length; i++) {
//         let current = 0;
        
//         // Cek satu digit
//         if (s[i] !== '0') {
//             current += prev1;
//         }

//         // Cek dua digit
//         const double = parseInt(s.substring(i - 1, i + 1));
//         if (double >= 10 && double <= 26) {
//             current += prev2;
//         }

//         // Geser variabel untuk iterasi berikutnya
//         prev2 = prev1;
//         prev1 = current;
        
//         // Jika di tengah jalan tidak ada cara sama sekali
//         if (current === 0) return 0;
//     }

//     return prev1;
// }

// function numDecodings(s: string): number {
//     const n = s.length;
//     if (n === 0 || s[0] === '0') return 0;

//     // prev2 adalah dp[i-2], prev1 adalah dp[i-1]
//     let prev2 = 1;
//     let prev1 = 1;

//     for (let i = 1; i < n; i++) {
//         let current = 0;
        
//         // Cek satu digit: s[i]
//         // Jika digit saat ini bukan '0', kita bisa meneruskan jumlah cara dari prev1
//         if (s[i] !== '0') {
//             current += prev1;
//         }

//         // Cek dua digit: s[i-1]s[i]
//         // Kita hitung manual angkanya untuk menghindari substring() yang memakan memori
//         const ten = (s.charCodeAt(i - 1) - 48) * 10;
//         const one = s.charCodeAt(i) - 48;
//         const twoDigit = ten + one;

//         if (twoDigit >= 10 && twoDigit <= 26) {
//             current += prev2;
//         }

//         // Jika di tengah jalan tidak ada cara untuk lanjut (misal ketemu "30" atau "00")
//         if (current === 0) return 0;

//         // Geser posisi untuk iterasi berikutnya
//         prev2 = prev1;
//         prev1 = current;
//     }

//     return prev1;
// }

// function numDecodings(s: string): number {
//     const n = s.length;
//     // Paling cepat: variabel sederhana untuk menyimpan hasil sebelumnya
//     let next1 = 1; // Merepresentasikan dp[i+1]
//     let next2 = 0; // Merepresentasikan dp[i+2]

//     for (let i = n - 1; i >= 0; i--) {
//         let current = 0;
//         const char = s[i];

//         // Jika karakter adalah '0', current tetap 0 (tidak bisa di-decode)
//         if (char !== '0') {
//             // Opsi 1: Ambil 1 digit (pasti valid karena bukan '0')
//             current = next1;

//             // Opsi 2: Ambil 2 digit (cek jika i+1 tersedia dan <= 26)
//             if (i + 1 < n) {
//                 // Konversi manual ke angka (lebih cepat dari parseInt)
//                 const twoDigit = (char.charCodeAt(0) - 48) * 10 + (s.charCodeAt(i + 1) - 48);
//                 if (twoDigit <= 26) {
//                     current += next2;
//                 }
//             }
//         }

//         // Geser pointer
//         next2 = next1;
//         next1 = current;
//     }

//     return next1;
// }

function numDecodings(s: string): number {
    const n = s.length;
    // Early exit untuk kasus yang jelas mustahil
    if (n === 0 || s[0] === '0') return 0;

    // Gunakan variabel let sederhana (primitive)
    // prev2 = dp[i-2], prev1 = dp[i-1]
    let prev2 = 1;
    let prev1 = 1;

    for (let i = 1; i < n; i++) {
        let current = 0;
        
        // Ambil charCode sekali saja untuk menghindari pemanggilan berulang
        const charCode = s.charCodeAt(i);
        const prevCharCode = s.charCodeAt(i - 1);

        // 1. Cek satu digit (s[i])
        // Karakter '1'-'9' adalah charCode 49-57
        if (charCode !== 48) { // 48 adalah ASCII untuk '0'
            current = prev1;
        }

        // 2. Cek dua digit (s[i-1]s[i])
        // Puluhan: (prevCharCode - 48) * 10
        // Satuan: (charCode - 48)
        const twoDigit = (prevCharCode - 48) * 10 + (charCode - 48);

        if (twoDigit >= 10 && twoDigit <= 26) {
            current += prev2;
        }

        // Jika tidak ada jalur valid, langsung stop
        if (current === 0) return 0;

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}