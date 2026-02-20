function findPairs(nums: number[], k: number): number {
    const n = nums.length; 

    const counts = new Map(); 
    let count = 0; 
   
    for(const num of nums){
        counts.set(num, (counts.get(num) || 0) + 1); 
    }

    for(const [num, freq] of counts){
        if(k === 0){
            if(freq >= 2) count++;
        } else{
            if(counts.has(num + k)) count++;
        }
    }

    return count;
};