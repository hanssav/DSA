function minStartValue(nums: number[]): number {
    let curr = 0; 
    let min = 0; 

    for(const num of nums){
        curr += num; 

        min = Math.min(curr, min)
    }

    return 1 - min; 
};