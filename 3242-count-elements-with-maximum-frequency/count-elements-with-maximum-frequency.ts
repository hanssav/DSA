function maxFrequencyElements(nums: number[]): number {
    const counts = new Map<number, number>(); 

    for(const num of nums){
        counts.set(num, (counts.get(num) || 0) + 1); 
    }; 

    let max_freq = 0; 

    for(const [key, count] of counts){
        if(count > max_freq) max_freq = count;
    }; 

    let sum = 0; 

    for(const [key, count] of counts){
        if(count === max_freq) sum += count;
    }

    return sum;
};