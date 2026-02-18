function absDifference(nums: number[], k: number): number {
    const n = nums.length; 
    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i + 1; j < n; j++){
            if(nums[min] > nums[j]) min = j;
        }

        if(min !== i) [nums[i], nums[min]] = [nums[min], nums[i]];
    }

    let count = 0; 
    let left = 0; 
    let right = n - 1; 

    while(right >= 0 || left < n){
        if(k < 1) break;

        count += nums[right] - nums[left]
        left++; 
        right--; 
        k--;
    }; 

    return k > 0 ? 0 : count;
};