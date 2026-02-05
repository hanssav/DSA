function kLengthApart(nums: number[], k: number): boolean {
    let lastIdx = -1; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) continue;

        if(lastIdx >= 0){
            let count = i - lastIdx - 1; 
            
            if(count < k) return false;
            else lastIdx = i;
            continue;
        }

        lastIdx = i;
    }

    return true;
};