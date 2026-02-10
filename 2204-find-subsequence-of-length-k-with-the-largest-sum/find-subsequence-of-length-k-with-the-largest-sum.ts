function maxSubsequence(nums: number[], k: number): number[] {
    let indexedNums = nums.map((val, idx) => [val, idx]); 

    indexedNums.sort((a, b) => b[0] - a[0]); 

    let topK = indexedNums.slice(0, k); 

    topK.sort((a, b) => a[1] - b[1]); 

    return topK.map(item => item[0])
};