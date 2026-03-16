function maxAdjacentDistance(nums: number[]): number {
    let maxDiff = 0;
    const n = nums.length; 

    for(let i = 0; i < n; i++){
        const nextIndex = (i + 1) % n; 
        const currDiff = Math.abs(nums[i] - nums[nextIndex]);

        if(currDiff > maxDiff) maxDiff = currDiff
    }

    return maxDiff;
};