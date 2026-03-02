function subarraySum(nums: number[]): number {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    
    // Hitung prefix sum
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        const start = Math.max(0, i - nums[i]);
        // Sum dari start ke i = prefix[i+1] - prefix[start]
        totalSum += prefix[i + 1] - prefix[start];
    }
    
    return totalSum;
}