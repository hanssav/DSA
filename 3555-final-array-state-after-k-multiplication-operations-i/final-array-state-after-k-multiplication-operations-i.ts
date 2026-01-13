function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for(let i = 0; i < k; i++){
        let min_idx = 0; 

        for(let j = 0;  j < nums.length; j++){
            if(nums[min_idx] > nums[j]) min_idx = j;
        }

        nums[min_idx] *= multiplier; 
    }

    return nums;
};