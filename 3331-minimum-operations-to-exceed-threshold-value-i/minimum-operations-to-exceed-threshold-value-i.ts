function minOperations(nums: number[], k: number): number {
    let ops = 0; 

    for(const num of nums){
        if(num < k) ops++;
    }
    
    return ops;
};