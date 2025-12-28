/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    const temp = new Map(); 

    for(let i = nums.length - 1; i >= 0; i--){
        if(!temp.has(nums[i])) { temp.set(nums[i], 0)}; 
        temp.set(nums[i], temp.get(nums[i]) + 1); 

        if(temp.get(nums[i]) > 2) { nums.splice(i, 1)}
    }
    // const temp = new Map(); 
    // let i = nums.length - 1; 
    
    // while(i >= 0){
    //     if(!temp.has(nums[i])){
    //         temp.set(nums[i], 0)
    //     }
    //     // console.log(temp, 'temp')
    //     // console.log(temp.get(nums[i]), 'nums i')

    //     temp.set(nums[i], temp.get(nums[i]) + 1)

    //     if(temp.get(nums[i]) > 2){
    //         nums.splice(i, 1);
    //     }
    //     i--;
    // };
} 