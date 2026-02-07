function findClosestNumber(nums: number[]): number {
    let closest = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const absCurrent = Math.abs(current);
        const absClosest = Math.abs(closest);
        
        if(absClosest > absCurrent) {
            closest = current;
        } else if(absClosest === absCurrent && current > closest) {
            closest = current;
        }
    }
    
    return closest;
};