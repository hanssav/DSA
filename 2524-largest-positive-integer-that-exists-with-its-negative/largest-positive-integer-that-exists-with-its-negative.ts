function findMaxK(nums: number[]): number {
    const set = new Set<number>(nums); 

    let max = -1;
     
    for(const num of nums){
        if(num > max && set.has(num - (2 * num))) max = num;
    };

    return max;
};