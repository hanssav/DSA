function smallestAbsent(nums: number[]): number {
    const set = new Set<number>([...nums]);

    let av = nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
    
    let val = av > 0 ? Math.floor(av) : 0;

    while(true){
        val++; 

        if(!set.has(val)) break;
    }

    return val;
};