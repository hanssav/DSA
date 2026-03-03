function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const n = nums.length;
    const res = [];
    let lastAdded = -1;

    // 1. Cari semua INDEKS j di mana nilainya adalah key
    for (let j = 0; j < n; j++) {
        if (nums[j] === key) {
            
            // 2. Tentukan rentang j-k sampai j+k
            let start = Math.max(0, j - k);
            let end = Math.min(n - 1, j + k);

            // 3. Gunakan trik lastAdded agar tidak memasukkan indeks yang sama
            // Kita mulai dari yang terbesar antara 'start' atau 'lastAdded + 1'
            for (let i = Math.max(start, lastAdded + 1); i <= end; i++) {
                res.push(i);
                lastAdded = i;
            }
        }
    }

    return res;
}