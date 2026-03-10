function findColumnWidth(grid: number[][]): number[] {
    const m = grid.length;       // Jumlah baris
    const n = grid[0].length;    // Jumlah kolom
    const ans: number[] = [];

    // 1. Iterasi berdasarkan KOLOM (j)
    for (let j = 0; j < n; j++) {
        let maxWidth = 0;

        // 2. Iterasi berdasarkan BARIS (i) untuk kolom tersebut
        for (let i = 0; i < m; i++) {
            // Ubah angka menjadi string untuk menghitung panjang karakternya
            // Angka negatif seperti -10 akan otomatis terhitung panjangnya 3 ("-", "1", "0")
            const currentLength = String(grid[i][j]).length;

            // 3. Update nilai maksimum jika ditemukan yang lebih panjang
            if (currentLength > maxWidth) {
                maxWidth = currentLength;
            }
        }

        // 4. Simpan lebar maksimal kolom ini ke dalam hasil
        ans.push(maxWidth);
    }

    return ans;
}