function searchRange(nums: number[], target: number): number[] {
    const findBound = (isFirst: boolean): number => {
        let left = 0; 
        let right = nums.length - 1; 
        let bound = -1;

        while(right >= left){
            const mid = Math.floor((right + left) / 2)
            // console.log(mid, 'mid', isFirst)
            if(target === nums[mid]){
                bound = mid; 

                if(isFirst) right = mid - 1; 
                else left = mid + 1;

            } else if (nums[mid] > target) {
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        }

        return bound
    }

    const first = findBound(true); 
    const last = findBound(false); 
    
    return [first, last];
};