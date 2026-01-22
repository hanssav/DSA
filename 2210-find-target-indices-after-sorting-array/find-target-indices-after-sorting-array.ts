function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b); 

    let left = 0; 
    let right = nums.length - 1; 

    const res: number[] = [];

    while(right >= left){
        let mid = Math.floor(left + (right - left) / 2);
        let _mid = nums[mid];

        if(_mid === target){   
            let s_right = mid; 
            let s_left = mid - 1; 

            while(nums[s_right] === _mid || nums[s_left] === _mid){
                
                if(nums[s_left] === target){
                    res.unshift(s_left); 
                    s_left--;
                }

                if(nums[s_right] === target){
                    res.push(s_right);
                    s_right++;
                }

            }

            break
        } else if(_mid > target) right = mid - 1; 
        else left = mid + 1;
    }

    // console.log(res, 'res')
    return res;
};