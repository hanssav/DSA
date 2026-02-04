function findFinalValue(nums: number[], original: number): number {
    let s = new Set<number>([...nums]);

    while(s.has(original)){
        original *= 2;
    }

    return original;
};