function dominantIndices(nums: number[]): number {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sumAfter = 0;
        for (let j = i + 1; j < nums.length; j++) {
            sumAfter += nums[j];
        }
        
        const countAfter = nums.length - i - 1;
        if (countAfter > 0) {
            const avgAfter = sumAfter / countAfter;
            if (nums[i] > avgAfter) {
                count++;
            }
        }
    }

    return count;
}