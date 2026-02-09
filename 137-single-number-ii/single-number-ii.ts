function singleNumber(nums: number[]): number {
    const m = new Map<number, number>(); 

    for(let i = 0; i < nums.length; i++){
        m.set(nums[i], (m.get(nums[i]) || 0) + 1);
        if(m.get(nums[i]) >= 3) m.delete(nums[i]); 
    }
    
    const [first] = m.keys();
    return first;
};