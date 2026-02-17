function isGood(nums: number[]): boolean {
    nums.sort((a, b) => a - b); 

    const n = nums.length - 1;
    if(n < 1) return false; 

    for(let i = 0; i < n - 1; i++){
        if(nums[i] !== i + 1) return false;
    }; 

    if(nums[n - 1] !== n || nums[n] !== n) return false;

    return true;
};