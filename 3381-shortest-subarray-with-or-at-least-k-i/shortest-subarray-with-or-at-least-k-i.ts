function minimumSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    let minLen = Infinity;
    
    for (let i = 0; i < n; i++) {
        let orVal = 0;
        for (let j = i; j < n; j++) {
            orVal |= nums[j];
            if (orVal >= k) {
                minLen = Math.min(minLen, j - i + 1);
                break; // karena OR hanya naik, kalau sudah >=k, panjang minimal dari i adalah ini
            }
        }
    }
    
    return minLen === Infinity ? -1 : minLen;
}