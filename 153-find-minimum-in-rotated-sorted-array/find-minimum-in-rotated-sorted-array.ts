// function findMin(nums: number[]): number {
//     return Math.min(...nums)
// };


function findMin(nums: number[]): number {
    let left = 0; 
    let right = nums.length - 1; 
    let min = Infinity;

    while(right >= left){
        let mid = Math.floor((left + right) / 2); 

        if(nums[mid] < min) min = nums[mid]

        if(Math.min(nums[mid], nums[left]) > Math.min(nums[mid], nums[right]) ){
            left = mid + 1; 
        } else right = mid - 1;
    }

    return min;
};