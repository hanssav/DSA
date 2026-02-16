function countElements(nums: number[]): number {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    let count = 0; 
    
    for(const num of nums){
        if(num > min && num < max) count++;
    }

    return count;
};