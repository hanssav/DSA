function findLHS(nums: number[]): number {
    const m = new Map<number, number>(); 

    for(let num of nums){
        if(!m.has(num)) m.set(num, 0)
        m.set(num, m.get(num) + 1)
    }

    let max = 0; 

    for(let [key, val] of m){
        const calc_max = m.get(key) + m.get(key + 1) || 0; 
        if(calc_max > max) max = calc_max
    }

    return max;
};