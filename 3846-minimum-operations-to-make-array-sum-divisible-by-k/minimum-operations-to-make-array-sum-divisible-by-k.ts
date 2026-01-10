function minOperations(nums: number[], k: number): number {
    let total = nums.reduce((acc, curr) => acc + curr, 0); 

    const need = total % k; 
    return total === 0 ? total : need
};