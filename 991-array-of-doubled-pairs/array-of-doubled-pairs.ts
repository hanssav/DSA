function canReorderDoubled(arr: number[]): boolean {
    const counts = new Map<number, number>(); 

    for(const a of arr){
        counts.set(a, (counts.get(a) || 0) + 1);
    }

    arr.sort((a, b) => Math.abs(a) - Math.abs(b));
    
    for(const num of arr){
        if(counts.get(num) === 0) continue;

        let pair = 2 * num; 
        let count_num = counts.get(num) || 0; 
        let count_pair = counts.get(pair) || 0; 

        if(count_pair === 0) return false;

        counts.set(num, count_num - 1); 
        counts.set(pair, count_pair - 1);
    }

    return true;
};