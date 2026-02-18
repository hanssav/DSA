function minimumCost(nums: number[]): number {
    const arr = nums.splice(1, nums.length -1).sort((a, b) => a - b);
    return nums[0] + arr[0] + arr[1];
};