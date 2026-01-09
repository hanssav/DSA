function prefixesDivBy5(nums: number[]): boolean[] {
    let curr = 0; 
    let res = []
    for(let i = 0; i < nums.length; i++){
        curr = (curr * 2 + nums[i]) % 5
        
        res.push(curr === 0);
        // if(curr === 0) res.push(true); 
        // else res.push(false)
    }

    return res
};