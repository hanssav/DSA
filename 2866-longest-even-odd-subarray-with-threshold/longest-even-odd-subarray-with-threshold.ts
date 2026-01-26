function longestAlternatingSubarray(nums: number[], threshold: number): number {
    // l => even; / nums[l] % 2 === 0;  
    //in range : nums[i] % 2 !== nums[i + 1] & 2; => [even, odd, even ....]; 
    // in range : nums[i] <= threshold; 

    let longest = 0; 
    let currLen = 0; 

    for(let i = 0; i < nums.length; i++){
        if(currLen === 0){
            if(nums[i] % 2 === 0 && nums[i] <= threshold){
                currLen = 1;
            }
        } else {
            if(nums[i] % 2 !== nums[i - 1] % 2 && nums[i] <= threshold){
                currLen++;
            } else {
                longest = Math.max(longest, currLen); 

                if(nums[i] % 2 === 0 && nums[i] <= threshold){
                    currLen = 1; 
                } else {
                    currLen = 0;
                }
            }
        }

        longest = Math.max(longest, currLen);
    }
    return longest; 
};