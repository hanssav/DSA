function arithmeticTriplets(nums: number[], diff: number): number {
    const set = new Set([...nums]); 

    let count = 0; 

    for(const num of nums){
        if(set.has(num - diff) && set.has(num + diff)) count++;
    };
    
    return count;
};