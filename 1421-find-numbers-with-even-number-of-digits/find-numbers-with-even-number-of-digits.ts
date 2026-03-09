function findNumbers(nums: number[]): number {
    let count = 0; 

    for(const num of nums){
        let dig = 0; 

        let v = num; 
        while(v > 0){
            v = Math.floor(v / 10); 
            dig++;
        }

        if(dig % 2 === 0) count++
    }

    return count; 
};