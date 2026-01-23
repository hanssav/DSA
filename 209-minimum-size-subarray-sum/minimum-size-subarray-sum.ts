function minSubArrayLen(target: number, nums: number[]): number {
    let min = Infinity; 
    let sum = 0; 
    let left = 0;

    for(let right = 0; right < nums.length; right++){
        sum += nums[right];

        while(sum >= target){
            min = Math.min(min, right - left + 1); 

            sum -= nums[left]; 
            left++;
        }
    }
    
    return min === Infinity ? 0 : min;
};