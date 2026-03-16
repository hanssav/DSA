function constructTransformedArray(nums: number[]): number[] {
    const n = nums.length; 
    const res: number[] = new Array(n)

    for(let i = 0; i < n; i++){
        console.log(res)
        const val = nums[i];
        let idx = (i + val) % n;;

        if(idx < 0) idx += n

        res[i] = nums[idx]
    }

    return res;
};