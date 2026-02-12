function maxDifference(s: string): number {
    const m = new Map(); 

    for(const str of s){
        m.set(str, (m.get(str) || 0) + 1);
    }
    
    let maxOdd = 0; 
    let minEven = Infinity; 

    for(const [_, val] of m){
        if(val % 2 == 0) minEven = Math.min(val, minEven);
        else maxOdd = Math.max(val, maxOdd)
    };


    return maxOdd - minEven;
};