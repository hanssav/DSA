function findSubarrays(nums: number[]): boolean {
    const n = nums.length;

    const set = new Set(); 

    for(let i = 0; i < n - 1; i++){
        const sum = nums[i] + nums[i + 1];
        if(set.has(sum)) return true; 

        set.add(sum);
    }
    
    return false
};