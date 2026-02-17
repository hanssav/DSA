function findNonMinOrMax(nums: number[]): number {
    let min = Infinity; 
    let max = -Infinity; 

    for(const num of nums){
        if(num < min) min = num; 
        if(num > max) max = num;
    }; 

    for(const num of nums){
        if(num !== min && num !== max) return num; 
    }; 

    return -1;
};