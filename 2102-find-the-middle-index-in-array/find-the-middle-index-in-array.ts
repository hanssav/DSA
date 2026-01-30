function findMiddleIndex(nums: number[]): number {
    const n = nums.length; 

    let totalSum = 0; 

    for(const num of nums){
        totalSum += num;
    }

    let left = 0; 
    
    for(let i = 0; i < n; i++){
        const right = totalSum - left - nums[i];

        if(right === left) return i;

        left += nums[i];
    };

    return - 1
};