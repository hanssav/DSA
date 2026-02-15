function checkSubarraySum(nums: number[], k: number): boolean {
    const remainderMap = new Map<number, number>(); 
    remainderMap.set(0, -1); 

    let remainingSum = 0; 
    for(let i = 0; i < nums.length; i++){
        remainingSum += nums[i]; 

        let remainder = remainingSum % k; 

        if(remainder < 0) remainder += k; 

        if(remainderMap.has(remainder)){
            const prevIndex = remainderMap.get(remainder)!;
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i)
        }

    }
    return false;
};