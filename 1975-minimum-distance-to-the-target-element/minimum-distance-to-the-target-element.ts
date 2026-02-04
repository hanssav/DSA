function getMinDistance(nums: number[], target: number, start: number): number {
    let minDist = Infinity; 

    for(let i = start; i < nums.length; i++){
        if(nums[i] === target){
            minDist = Math.min(minDist, i - start);
            break;
        }
    }

    for(let i = start; i >= 0; i--){
        if(nums[i] === target){
            minDist = Math.min(minDist, start - i);
            break;
        }
    }

    return minDist;
};