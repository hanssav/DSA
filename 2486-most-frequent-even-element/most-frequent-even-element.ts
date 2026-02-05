function mostFrequentEven(nums: number[]): number {
    const evens = new Map<number, number>(); 

    let res = -1; 
    let maxFreq = 0;
    
    for(const num of nums){
        if(num % 2 === 0){
            const count = (evens.get(num) || 0) + 1;
            evens.set(num, count);

            if(count > maxFreq || (count === maxFreq && num < res)){
                maxFreq = count; 
                res = num;
            }
        }
    }

    return res;
};