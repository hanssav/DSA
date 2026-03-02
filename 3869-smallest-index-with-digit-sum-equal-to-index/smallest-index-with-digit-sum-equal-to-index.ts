function smallestIndex(nums: number[]): number {
    let min = Infinity; 

    for(let i = 0; i < nums.length; i++){
        let sum = 0; 
        let n = nums[i];

        while(n > 0){
            sum += n % 10; 
            n = Math.floor(n / 10);
        }; 

        if(min > sum && sum === i) min = sum;
    }

    return min === Infinity ? -1 : min
};