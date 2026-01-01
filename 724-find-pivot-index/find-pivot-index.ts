function pivotIndex(nums: number[]): number {
    let total_sum = nums.reduce((acc, curr) => acc + curr, 0) 

    let left_sum = 0; 

    for(let i = 0; i < nums.length; i++){
        let right_sum = total_sum - left_sum - nums[i]; 

        if(left_sum === right_sum) return i; 

        left_sum += nums[i];
    }

    return -1; 
};