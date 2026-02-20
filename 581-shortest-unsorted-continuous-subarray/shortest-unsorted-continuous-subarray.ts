function findUnsortedSubarray(nums: number[]): number {
    let n = nums.length;
    let start = n; 
    let end = -1;
    
    let maxLeft = nums[0]; 

    for(let i = 1; i < n; i++){
        if(nums[i] < maxLeft){
            end = i;
        } else {
            maxLeft = Math.max(maxLeft, nums[i]);
        }
    }

    let minRight = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] > minRight) {
            start = i;  
        } else {
            minRight = Math.min(minRight, nums[i]);
        }
    }

    return start > end ? 0 : end - start + 1;
};