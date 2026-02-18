function maximizeExpressionOfThree(nums: number[]): number {
    const n = nums.length; 

    for(let i = 0; i < n; i++){
        let max = i; 

        for(let j = i + 1; j < n; j++){
            if(nums[j] > nums[max]) max = j;
        }; 

        if(max !== i) [nums[i], nums[max]] = [nums[max], nums[i]];
    }

    return nums[0] + nums[1] - nums[n - 1];
};