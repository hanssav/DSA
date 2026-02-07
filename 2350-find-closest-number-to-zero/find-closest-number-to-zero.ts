function findClosestNumber(nums: number[]): number {
    let closest = nums[0];

    for(let i = 1; i < nums.length; i++){
        let diff = Math.abs(nums[i])
        if(Math.abs(closest) > diff){
            closest = nums[i];
        } else if(Math.abs(closest) === diff && nums[i] > closest){
            closest = nums[i]
        }
    }

    return closest;
};