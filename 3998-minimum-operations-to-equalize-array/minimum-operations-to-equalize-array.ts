function minOperations(nums: number[]): number {
    // Cek apakah semua elemen sudah sama
    const first = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== first) {
            return 1; // butuh 1 operasi
        }
    }
    return 0; // sudah sama
}