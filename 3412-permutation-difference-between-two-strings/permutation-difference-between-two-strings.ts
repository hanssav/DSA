function findPermutationDifference(s: string, t: string): number {
    const sset = new Map(); 
    const tset = new Map(); 

    const n = s.length
    for(let i = 0; i < n; i++){
        sset.set(s[i], i);
        tset.set(t[i], i);
    }

    let sum = 0; 

    for(const [key, idx] of sset){
        sum += Math.abs(idx - tset.get(key))    
    }

    return sum
};