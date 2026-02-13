function sumOfEncryptedInt(nums: number[]): number {
    let sum = 0; 

    for(let i = 0; i < nums.length; i++){
        let val = nums[i].toString().split(""); 

        let max = 0;
        for(let j = 0; j < val.length; j++){
            if(Number(val[j]) > max) max = Number(val[j]);
        }
        
        const acc = [];

        for(let z = 0; z < val.length; z++){
            acc.push(max)
        }

        sum += Number(acc.join(""));
    };

    return sum
};