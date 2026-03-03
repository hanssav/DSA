function applyOperations(nums: number[]): number[] {
    let writePointer = 0; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]){
            nums[i] *= 2; 
            nums[i + 1] = 0;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[writePointer] = nums[i]; 
            if(i !== writePointer) nums[i] = 0; 
            writePointer++;
        }
    }

    return nums
};