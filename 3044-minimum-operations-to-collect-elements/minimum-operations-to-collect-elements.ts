function minOperations(nums: number[], k: number): number {
    const set = new Set<number>(); 

    for(let i = 1; i <= k; i++){
        set.add(i); 
    }

    let count = 0; 
    
    while(set.size > 0){
        let val = nums.pop(); 

        if(set.has(val)) set.delete(val); 
        count++;
    }; 

    return count;
};