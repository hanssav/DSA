function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let minPositive = Infinity; 
    const n = nums.length; 

    for(let start = 0; start < n; start++){
        let sum = 0; 

        for(let end = start; end < n; end++){
            sum += nums[end]; 
            const length = end - start + 1; 

            if(length >= l && length <= r && sum > 0 ){
                minPositive = Math.min(minPositive, sum); 
            }
        }
    }
    return minPositive === Infinity ? -1 : minPositive; 
};