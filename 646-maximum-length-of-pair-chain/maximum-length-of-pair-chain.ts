function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[0] - b[0]);
    
    const n = pairs.length;
    const memo = new Array(n).fill(0); 
    
    function solve(i: number): number{
        if(memo[i] !== 0) return memo[i]
 
        let res = 1; 

        for(let j = 0; j < i; j++){
            if(pairs[j][1] < pairs[i][0]){
                res = Math.max(res, solve(j) + 1);
            }
        }

        memo[i] = res; 
        return res;
    }

    let maxChain = 0; 

    for(let i = 0; i < n; i++){
        maxChain = Math.max(maxChain, solve(i))
    }

    return maxChain;
};