function evenNumberBitwiseORs(nums: number[]): number {
    let res = 0; 

    for(let i = 0; i < nums.length; i++){
        const num = nums[i]; 

        if((num & 1) === 0){
            res |= num;
        }
    }

    return res; 
};