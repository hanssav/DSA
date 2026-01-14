function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b); 

    const res:number[][] = [];

    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue; 

        let left = i + 1;
        let right = nums.length - 1; 

        while(right > left){
            let sum = nums[i] + nums[right] + nums[left]; 

            if(sum < 0) left++; 
            else if(sum > 0) right--;
            else{
                res.push([nums[i], nums[right], nums[left]])
                // 2. Skip angka 'left' yang sama
                while (left < right && nums[left] === nums[left + 1]) left++;
                // 3. Skip angka 'right' yang sama
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            }
        }
    }
    return res;
};