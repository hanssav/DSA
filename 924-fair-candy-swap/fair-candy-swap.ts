function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const total = (arr) => arr.reduce((acc, curr) => acc + curr, 0)
    
    const alice_total = total(aliceSizes); 
    const bob_total = total(bobSizes); 

    for(let i = 0; i < aliceSizes.length; i++){
        for(let j = 0; j < bobSizes.length; j++){
            const a = aliceSizes[i]
            const b = bobSizes[j]
            if(alice_total - a + b === bob_total - b + a) return [a, b]
        }
    }

    return []
};