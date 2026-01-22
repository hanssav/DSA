function answerQueries(nums: number[], queries: number[]): number[] {
    let res: number[] = [];     
    let sum: number[] = [];

    nums.sort((a, b) => a - b); 

    for(let i = 0; i < nums.length; i++){
        sum.push((sum[i - 1] || 0) + nums[i]); 
    }
    
    function checkMaxSum(max: number): number{
        let l = 0; 
        let r = sum.length - 1;
        
        let bestIdx = -1; 

        while(r >= l){ 
            const mid = Math.floor(l + (r - l) / 2)
            
            if(sum[mid] <= max) {
              bestIdx = mid; 
              l = mid + 1;
            } else r = mid - 1;
        } 

        return bestIdx + 1;
    }

    for(let i = 0; i < queries.length; i++){
        let len = checkMaxSum(queries[i])
        res.push(len);
    }

    return res;
};