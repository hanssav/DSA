function missingInteger(nums: number[]): number {
    // Cari consecutive prefix terpanjang dari awal
    let sum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }
    
    // Buat set untuk pengecekan cepat
    const set = new Set<number>(nums);
    
    // Cari angka terkecil >= sum yang tidak ada di set
    while (set.has(sum)) {
        sum++;
    }
    
    return sum;
}