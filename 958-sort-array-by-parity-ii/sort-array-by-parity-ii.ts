function sortArrayByParityII(nums: number[]): number[] {
    //[even, odd, oven, odd, ... ]

    let e = 0; 
    let o = 1; 
    let len = nums.length; 

    while(e < len && o < len){
        const mod_e = nums[e] % 2
        const mod_o = nums[o] % 2

        if(mod_e !== 0 && mod_o === 0){
            [nums[e], nums[o]] = [nums[o], nums[e]]; 
            e += 2; 
            o += 2; 
        } else if(mod_e === 0) e += 2; 
        else o += 2; 
    }

    return nums
};