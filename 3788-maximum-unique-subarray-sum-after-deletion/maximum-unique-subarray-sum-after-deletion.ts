function maxSum(nums: number[]): number {
    const set = new Set<number>(); 
    let count = 0;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);

        if (nums[i] > 0 && !set.has(nums[i])) {
            count += nums[i];
            set.add(nums[i]);
        }
    }

    return count > 0 ? count : max;
}
