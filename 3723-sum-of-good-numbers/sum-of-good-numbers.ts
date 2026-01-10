function sumOfGoodNumbers(nums: number[], k: number): number {
    let res = 0; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > (nums[i + k] || 0) && nums[i] > (nums[i - k] || 0)){
            console.log(nums[i])
            res += nums[i]
        } 
    }
    
    return res;
};