function lastStoneWeight(stones: number[]): number {
    let sorted = stones.sort((a, b) => a - b); 

    // console.log(sorted); 

    while(sorted.length > 1){
        let n = sorted.length; 
        let smashed = sorted[n - 1] - sorted[n - 2] 
        sorted.splice(n - 2, 2)

        
        if(smashed > 0){
            sorted.push(smashed)
            sorted.sort((a, b) => a - b); 
        } 
        // console.log(sorted, 'sorted')
    }

    return sorted.length > 0 ? sorted[0] : 0
};