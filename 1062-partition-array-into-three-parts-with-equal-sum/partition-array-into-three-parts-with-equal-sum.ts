function canThreePartsEqualSum(arr: number[]): boolean {
    const total = arr.reduce((acc, curr) => acc + curr, 0); 

    if(total % 3 !== 0) return false;
    
    const target = total / 3; 
    let count = 0;
    let res = 0; 

    // console.log(total, target)

    for(const num of arr){
        count += num

        if(count === target){
            res++; 
            count = 0;
        }
        // console.log(res, num, count, target)
    }

    return res > 2 ? true : false 
};