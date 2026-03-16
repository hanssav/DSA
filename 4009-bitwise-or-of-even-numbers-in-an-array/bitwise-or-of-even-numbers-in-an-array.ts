function evenNumberBitwiseORs(nums: number[]): number {
    let res = 0; 

    for(const num of nums){
        if(num % 2 === 0) res |= num;
    }

    return res; 
};