function minMoves(nums: number[]): number {
    const max = Math.max(...nums); 
    let count = 0;
    
    for(const val of nums){
        let num = val; 

        while(num !== max){
            num++; 
            count++;
        }
    }

    return count; 
};