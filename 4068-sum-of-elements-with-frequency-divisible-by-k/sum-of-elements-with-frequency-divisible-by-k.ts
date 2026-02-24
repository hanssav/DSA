function sumDivisibleByK(nums: number[], k: number): number {
    const counts = new Map<number, number>(); 

    for(const num of nums){
        counts.set(num, (counts.get(num) || 0) + 1);
    }; 

    let sum = 0; 

    for(const [key, count] of counts){
        if(count % k === 0) sum += count * key;
    }

    return sum; 
};