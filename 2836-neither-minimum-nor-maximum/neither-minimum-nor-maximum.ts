// function findNonMinOrMax(nums: number[]): number {
//     let min = Infinity; 
//     let max = -Infinity; 

//     for(const num of nums){
//         if(num < min) min = num; 
//         if(num > max) max = num;
//     }; 

//     for(const num of nums){
//         if(num !== min && num !== max) return num; 
//     }; 

//     return -1;
// };

function findNonMinOrMax(nums: number[]): number {
    if(nums.length < 2) return -1; 

    let min = Math.min(...nums); 
    let max = Math.max(...nums); 

    for(const num of nums){
        if(min !== num && max !== num) return num
    }
    return -1;
};