function minDistinctFreqPair(nums: number[]): number[] {
    const counts = new Map<number, number>(); 
    for(const num of nums){
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    const arr = Array.from(counts.keys()).sort((a, b) => a - b); 
    const n = arr.length;

    for(let i = 0; i < n; i++){
        const x = arr[i]; 
        const freqX = counts.get(x);

        for(let j = i + 1; j < n; j++){
            const y = arr[j]; 
            const freqY = counts.get(y); 

            if(freqX !== freqY){
                return [x, y]
            }
        } 
    }

    return [-1, -1]
};