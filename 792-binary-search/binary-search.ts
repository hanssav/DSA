function search(nums: number[], target: number): number {
    let start = 0; 
    let end = nums.length - 1; 

    while(end >= start){
        const mid = Math.floor((start + end) / 2)

        if(nums[mid] === target) return mid; 
        else if(target < nums[mid]) end = mid - 1; 
        else start = mid + 1
    }

    return -1;
};