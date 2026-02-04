function largestAltitude(gain: number[]): number {
    let curr = 0; 
    let max = 0; 

    for(const g of gain){
        curr += g; 
        max = Math.max(curr, max);
    }

    return max;
};