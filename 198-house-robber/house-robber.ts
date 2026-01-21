function rob(nums: number[]): number {
    const n = nums.length;
    let memo = {}; 

    let res = 0;

    function solve(n){
        if(n < 0) return 0; 
        if(n === 0) return nums[0]; 

        if(n in memo) return memo[n]; 

        res = Math.max(solve(n - 1), nums[n] + solve(n - 2)); 
        memo[n] = res;
        return res;
    }


    return solve(n - 1)
};