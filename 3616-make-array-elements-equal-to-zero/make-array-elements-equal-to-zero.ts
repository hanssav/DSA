function countValidSelections(nums: number[]): number {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    let runningSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            const left = runningSum;
            const right = totalSum - runningSum;

            if (left === right) count += 2;
            else if (Math.abs(left - right) === 1) count += 1;
        } else {
            runningSum += nums[i];
        }
    }

    return count;
}