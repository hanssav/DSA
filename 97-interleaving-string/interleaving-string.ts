// function isInterleave(s1: string, s2: string, s3: string): boolean {
//     const n = s1.length;
//     const m = s2.length;

//     if (n + m !== s3.length) return false;

//     // dp[i][j] melambangkan apakah s1[0...i-1] dan s2[0...j-1] bisa membentuk s3[0...i+j-1]
//     const dp: boolean[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));

//     dp[0][0] = true;

//     // Isi kolom pertama (hanya menggunakan s1)
//     for (let i = 1; i <= n; i++) {
//         dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
//     }

//     // Isi baris pertama (hanya menggunakan s2)
//     for (let j = 1; j <= m; j++) {
//         dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
//     }

//     // Isi sisa tabel
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             const charS3 = s3[i + j - 1];
            
//             // Bisa ambil dari s1 jika s1[i-1] cocok DAN sebelumnya sudah valid
//             const fromS1 = dp[i - 1][j] && s1[i - 1] === charS3;
            
//             // Bisa ambil dari s2 jika s2[j-1] cocok DAN sebelumnya sudah valid
//             const fromS2 = dp[i][j - 1] && s2[j - 1] === charS3;

//             dp[i][j] = fromS1 || fromS2;
//         }
//     }

//     return dp[n][m];
// }

// function isInterleave(s1: string, s2: string, s3: string): boolean {
//     const n = s1.length;
//     const m = s2.length;

//     if (n + m !== s3.length) return false;

//     // Gunakan array 1D untuk menghemat alokasi memori
//     const dp = new Uint8Array(m + 1); // Uint8Array lebih cepat dari boolean array biasa

//     // Base case: string kosong
//     dp[0] = 1;

//     // Inisialisasi baris pertama (hanya s2)
//     for (let j = 1; j <= m; j++) {
//         dp[j] = (dp[j - 1] && s2[j - 1] === s3[j - 1]) ? 1 : 0;
//     }

//     // Iterasi untuk setiap karakter di s1
//     for (let i = 1; i <= n; i++) {
//         // Update dp[0] untuk kolom pertama (hanya s1)
//         dp[0] = (dp[0] && s1[i - 1] === s3[i - 1]) ? 1 : 0;

//         for (let j = 1; j <= m; j++) {
//             const charS3 = s3[i + j - 1];
            
//             // Logika: (Bisa dari atas?) ATAU (Bisa dari kiri?)
//             const fromAbove = dp[j] && s1[i - 1] === charS3;
//             const fromLeft = dp[j - 1] && s2[j - 1] === charS3;

//             dp[j] = (fromAbove || fromLeft) ? 1 : 0;
//         }
//     }

//     return dp[m] === 1;
// }

function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n = s1.length;
    const m = s2.length;

    if (n + m !== s3.length) return false;

    // Cache untuk menyimpan hasil yang gagal (0: belum dicek, 1: gagal)
    // Kita tidak butuh simpan yang "true" karena jika true langsung return
    const memo = new Uint8Array((n + 1) * (m + 1));

    function check(i: number, j: number): boolean {
        // Jika sudah sampai ujung s3
        if (i + j === s3.length) return true;

        // Cek memo (indeks 2D ke 1D)
        const key = i * (m + 1) + j;
        if (memo[key]) return false;

        const charS3 = s3[i + j];

        // Opsi 1: Ambil dari s1
        if (i < n && s1[i] === charS3) {
            if (check(i + 1, j)) return true;
        }

        // Opsi 2: Ambil dari s2
        if (j < m && s2[j] === charS3) {
            if (check(i, j + 1)) return true;
        }

        // Jika kedua opsi gagal, tandai di memo agar tidak dicek lagi
        memo[key] = 1;
        return false;
    }

    return check(0, 0);
}