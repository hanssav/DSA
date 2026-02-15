function missingMultiple(nums: number[], k: number): number {
    const set = new Set<number>([...nums]); 
    let ops = k; 

    for(let i = 0; i <= nums.length; i++){
        if(!set.has(ops)) return ops;
        ops += k;
    }

    return -1;
};