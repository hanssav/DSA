function distinctDifferenceArray(nums: number[]): number[] {
    const n = nums.length; 
    const res: number[] = []; 

    for(let i = 0; i < n; i++){
        const prefix = new Set(nums.slice(0, i + 1));

        const suffix = new Set(nums.slice(i + 1));
        
        res.push(prefix.size - suffix.size); 
    }

    return res;
};