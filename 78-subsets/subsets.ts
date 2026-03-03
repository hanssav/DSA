function subsets(nums: number[]): number[][] {
    let res = []; 
    let currSubset = []; 

    const n = nums.length; 

    function backracking(idx: number){
        res.push([...currSubset]);

        for(let i = idx; i < n; i++){
            currSubset.push(nums[i])

            backracking(i + 1);

            currSubset.pop();
        }
    }

    backracking(0)

    return res;
};