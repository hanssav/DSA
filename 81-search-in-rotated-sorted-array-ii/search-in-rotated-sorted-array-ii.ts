function search(nums: number[], target: number): boolean {
    let left = 0; 
    let right = nums.length - 1; 

    while(right >= left){
        let mid = Math.floor((left + right) / 2); 

        if(nums[mid] === target) return true;

        if(nums[left] === nums[mid] && nums[mid] === nums[right]){
            left++; 
            right--; 
            continue;
        }
        // console.log(nums[mid], nums[left], nums[mid] >= nums[left])

        if(nums[mid] >= nums[left]){
            if(target >= nums[left] && nums[mid] > target){
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        } else {
            if(nums[right] >= target && target > nums[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};