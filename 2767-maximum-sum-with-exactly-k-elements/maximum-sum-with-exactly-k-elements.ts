function maximizeSum(nums: number[], k: number): number {
    let max = Math.max(...nums); 
    
    let res = 0;

    for(let i = 0; i < k; i++){
        res += max; 
        max++
    }

    return res
};