// function findDuplicate(nums: number[]): number {
//     const m = new Set();  

//     for(const num of nums){
//         if(m.has(num)) return num;

//         m.add(num)
//     }

//     return -1; 
// };

function findDuplicate(nums: number[]): number {
    let left = 0; 
    let right = nums.length - 1;

    while(right > left){
        const mid = Math.floor((left + right) / 2); 
        const count = nums.filter((num => num <= mid)).length; 

        if (count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}