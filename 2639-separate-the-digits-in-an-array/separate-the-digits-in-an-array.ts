function separateDigits(nums: number[]): number[] {
    let res = []; 

    for(const num of nums){
        let n = num.toString(); 

        for(let i = 0; i < n.length; i++){
            res.push(parseInt(n[i]))
        }
    }

    return res;
};