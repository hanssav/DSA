function mostFrequent(nums: number[], key: number): number {
    const map = new Map<number, number>();
    let maxCount = 0;
    let result = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            const next = nums[i + 1];
            const count = (map.get(next) || 0) + 1;
            map.set(next, count);

            if (count > maxCount) {
                maxCount = count;
                result = next;
            }
        }
    }

    return result;
}
