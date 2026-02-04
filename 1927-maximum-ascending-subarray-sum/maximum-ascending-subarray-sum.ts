function maxAscendingSum(nums: number[]): number {
    let curr = 0; 
    let max = 0; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > (nums[i - 1] || 0)) curr += nums[i]; 
        else {
            if(max < curr) max = curr; 
            curr = nums[i];
        }

    }

    return curr > max ? curr : max;
};