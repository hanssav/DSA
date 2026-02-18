function maxKDistinct(nums: number[], k: number): number[] {
    const n = nums.length;

    for(let i = 0; i < n; i++){
        let max = i; 

        for(let j = i + 1; j < n; j++){
            if(nums[j] > nums[max]) max = j
        }

        if(max !== i) {
            [nums[i], nums[max]] = [nums[max], nums[i]];
        }
    }


    const maximize = new Set<number>();

    for(let i = 0; i < n; i++){
        maximize.add(nums[i]);
        if(maximize.size === k) break;
    }

    return [...maximize];
};