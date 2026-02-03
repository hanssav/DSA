function maximumDifference(nums: number[]): number {
    let diff = -1; 
    const n = nums.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(nums[i] < nums[j] && nums[j] - nums[i] > diff) diff = nums[j] - nums[i];
        }
    }

    return diff;
};