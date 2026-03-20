function reverseBits(n: number): number {
    let res = 0; 
    for(let i = 0; i < 32; i++){
        res = res << 1; 
        const bit = n & 1; 
        res = res | bit; 
        n = n >>> 1;
    }

    return res >>> 0;
};