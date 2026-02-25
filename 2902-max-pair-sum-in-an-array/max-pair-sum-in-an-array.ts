function maxSum(nums: number[]): number {
    let sum = -1; 

    const n = nums.length; 

    for(let i = 0; i < n; i++){
        const a = nums[i].toString().split("");
        const dscA = a.sort((a, b) => b.localeCompare(a)); 

        for(let j = i + 1; j < n; j++){
            const b = nums[j].toString().split("");
            const dscB = b.sort((a, b) => b.localeCompare(a)); 

            if(dscA[0] !== dscB[0]) continue;

            const count = nums[i] + nums[j];
            if(count > sum) sum = count;
        }
    }

    return sum
};