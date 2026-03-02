function incremovableSubarrayCount(nums: number[]): number {
    const n = nums.length;
    let count = 0;
    
    // Cek semua kemungkinan subarray yang dihapus
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // Buat array sisa setelah hapus [i..j]
            const remaining: number[] = [];
            
            // Tambah elemen sebelum i
            for (let k = 0; k < i; k++) {
                remaining.push(nums[k]);
            }
            // Tambah elemen setelah j
            for (let k = j + 1; k < n; k++) {
                remaining.push(nums[k]);
            }
            
            // Cek apakah remaining strictly increasing
            let isIncreasing = true;
            for (let k = 1; k < remaining.length; k++) {
                if (remaining[k] <= remaining[k-1]) {
                    isIncreasing = false;
                    break;
                }
            }
            
            if (isIncreasing) {
                count++;
            }
        }
    }
    
    return count;
}