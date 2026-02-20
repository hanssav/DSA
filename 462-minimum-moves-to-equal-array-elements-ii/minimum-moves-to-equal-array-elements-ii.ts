function minMoves2(nums: number[]): number {
    nums.sort((a, b) => a - b); 

    const n = nums.length; 
    const median = nums[Math.floor(n / 2)]; 

    let count = 0; 

    for(const num of nums){
        count += Math.abs(median - num);
    }; 

    return count;
};