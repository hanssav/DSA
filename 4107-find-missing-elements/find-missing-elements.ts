function findMissingElements(nums: number[]): number[] {
    const min = Math.min(...nums); 
    const max = Math.max(...nums); 
    
    const set = new Set<number>([...nums]);

    const res: number[] = []

    for(let i = min; i <= max; i++){
        if(!set.has(i)) res.push(i);
    }

    return res;
};