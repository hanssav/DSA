function sumCounts(nums: number[]): number {
    let sum = 0; 

    for(let i = 0; i < nums.length; i++){
        const dis = new Set<number>();
    
        for(let j = i; j < nums.length; j++){
            dis.add(nums[j]); 

            const count = dis.size; 
            sum += count * count
        }
    }


    return sum;
};