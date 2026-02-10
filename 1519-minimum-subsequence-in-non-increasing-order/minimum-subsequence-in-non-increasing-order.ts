function minSubsequence(nums: number[]): number[] {
    nums.sort((a, b) => b - a); 

    const sum = nums.reduce((acc, curr) => acc + curr, 0); 

    const target = sum / 2; 
    
    let curr = 0;
    let res = [];
    
    for(let i = 0; i < nums.length; i++){
        curr += nums[i]; 
        res.push(nums[i]); 

        if(curr > target) return res; 
    }
};