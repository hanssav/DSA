function sortedSquares(nums: number[]): number[] {
    // for(let [i, num] of nums.entries()) nums[i] = Math.pow(num, 2)
    for(let i = 0; i < nums.length; i++){
        nums[i] *= nums[i]
    }
    return nums.sort((a, b) => a - b)
};