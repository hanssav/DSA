function singleNonDuplicate(nums: number[]): number {
    let left = 0; 
    let right = nums.length - 1; 

    while(left < right){
        const mid = Math.floor((right + left) / 2); 
        let partner: number; 

        if(mid % 2 === 0){
            partner = mid + 1;
        } else {
            partner = mid - 1;
        }
        // console.log(left, right, mid, partner)

        if(nums[mid] === nums[partner]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};