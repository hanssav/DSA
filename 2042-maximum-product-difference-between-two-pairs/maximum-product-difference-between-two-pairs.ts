function maxProductDifference(nums: number[]): number {
    let max1 = -Infinity; 
    let max2 = -Infinity; 
    let min1 = Infinity; 
    let min2 = Infinity; 

    const n = nums.length; 

    for(let i = 0; i < n; i++){
        if(nums[i] > max1){
            max2 = max1;
            max1 = nums[i]; 
        } else if(nums[i] > max2){
            max2 = nums[i];
        } 
        
        if(min1 > nums[i]){
            min2 = min1; 
            min1 = nums[i]; 
        } else if (min2 > nums[i]){
            min2 = nums[i]
        }
    }

    return (max1 * max2) - (min1 * min2);
};