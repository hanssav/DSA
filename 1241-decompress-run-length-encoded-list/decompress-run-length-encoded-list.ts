function decompressRLElist(nums: number[]): number[] {
    let idx = 0; 

    let res = []; 

    while(idx < nums.length){
        let n = nums[idx]; 
        let val = nums[idx + 1]; 

        for(let i = 0; i < n; i++){
            res.push(val)
        }

        idx += 2;
    }

    return res;
};