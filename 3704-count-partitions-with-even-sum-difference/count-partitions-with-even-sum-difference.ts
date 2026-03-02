function countPartitions(nums: number[]): number {
    let left = 0; 
    let right = nums.reduce((acc, curr) => acc + curr, 0);

    let count = 0; 

    for(const num of nums){
        left += num; 
        right -= num;

        if(right < 1) break;
        if((left - right) % 2 === 0) count++;

    }

    return count
};