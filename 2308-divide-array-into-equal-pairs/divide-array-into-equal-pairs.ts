function divideArray(nums: number[]): boolean {
    const counts = new Map<number, number>(); 

    for(const num of nums){
        counts.set(num, (counts.get(num) || 0) + 1);
    };

    for(const [key, val] of counts){
        if(val % 2 !== 0) return false; 
    }

    return true;
};