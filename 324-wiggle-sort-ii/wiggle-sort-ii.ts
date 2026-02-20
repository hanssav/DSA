/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    const n = nums.length;
    const sorted = [...nums].sort((a, b) => a - b); 

    let mid = Math.floor((n + 1) / 2);

    let smallPtr = mid - 1; 
    let largePtr = n - 1; 

    for(let i = 0; i < n; i++){
        if(i % 2 === 0){
            nums[i] = sorted[smallPtr]; 
            smallPtr--;
        } else {
            nums[i] = sorted[largePtr]; 
            largePtr--;
        }
    }
};