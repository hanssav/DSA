function numberOfArithmeticSlices(nums: number[]): number {
    let count = 0; 

    const isArithmetic = (arr: number[]): boolean => {
        if (arr.length < 3) return false;
        return (arr[1] - arr[0]) === (arr[2] - arr[1]);
    }

    function nextArithmetic(lastIdx: number, diff: number) {
        const nextIdx = lastIdx + 1;
        if (nextIdx < nums.length) {
            if (nums[nextIdx] - nums[lastIdx] === diff) {
                count++;
                nextArithmetic(nextIdx, diff);
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const curr = nums.slice(i, i + 3); 

        if (curr.length < 3) break;
        
        if (isArithmetic(curr)) {
            count++; 
            const diff = curr[1] - curr[0];
            nextArithmetic(i + 2, diff);
        }   
    }

    return count;
};