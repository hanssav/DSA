function minimumOperations(nums: number[]): number {
    const uniq = new Set(nums); 

    uniq.delete(0);
    return uniq.size;
};