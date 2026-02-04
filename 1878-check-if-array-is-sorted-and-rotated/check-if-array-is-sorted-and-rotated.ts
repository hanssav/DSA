function check(nums: number[]): boolean {
    const n = nums.length; 
    // count nums[i] > nums[i + 1];
    // if ( count <= 1 ) true 
    let count = 0;

    for(let i = 0; i < n; i ++){
        if(nums[i] > nums[(i + 1) % n]) count++;
    } 

    return count <= 1;
};