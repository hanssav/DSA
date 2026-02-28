function minimumSum(nums: number[]): number {
    const n = nums.length;
    let minSum = Infinity;
    
    for (let j = 1; j < n - 1; j++) {
        let minLeft = Infinity;
        // Cari nilai terkecil di kiri yang lebih kecil dari nums[j]
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                minLeft = Math.min(minLeft, nums[i]);
            }
        }
        
        let minRight = Infinity;
        // Cari nilai terkecil di kanan yang lebih kecil dari nums[j]
        for (let k = j + 1; k < n; k++) {
            if (nums[k] < nums[j]) {
                minRight = Math.min(minRight, nums[k]);
            }
        }
        
        // Jika kedua sisi ada yang valid
        if (minLeft !== Infinity && minRight !== Infinity) {
            const sum = minLeft + nums[j] + minRight;
            minSum = Math.min(minSum, sum);
        }
    }
    
    return minSum !== Infinity ? minSum : -1;
}