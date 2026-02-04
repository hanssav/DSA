function minOperations(nums: number[]): number {
    let count: number = 0; 

    for(let i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i - 1]){
            const numOps = (nums[i - 1] + 1) - nums[i];
            nums[i] += numOps;
            count += numOps;
        }
    }

    return count;
};