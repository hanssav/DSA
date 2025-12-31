function findShortestSubArray(nums: number[]): number {
    const degree = new Map(); 

    let max_curr = 0; 

    nums.forEach((val, idx) => {
        if(!degree.has(val)) degree.set(val, []);

        degree.get(val).push(idx)
        
        const len = degree.get(val).length

        if(len > max_curr) {
            max_curr = len
        }
    })

    let res = Infinity;

    for(let [num, indices] of degree){
        if(indices.length === max_curr){
            const curr_len = indices[indices.length - 1] - indices[0] + 1; 

            if(curr_len < res){
                res = curr_len; 
            }
        }
    }

    return res
};