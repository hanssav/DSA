function findTheArrayConcVal(nums: number[]): number {
    let l = 0; 
    let r = nums.length - 1; 

    let count = 0; 

    while(r >= l){
        if(r === l){
            count += nums[l];        
            l++;
        } else {
            count += parseInt(nums[l].toString() + nums[r].toString())
            r--; 
            l++;
        };    
    }

    return count;
};