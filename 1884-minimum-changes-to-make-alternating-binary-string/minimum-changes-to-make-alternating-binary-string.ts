function minOperations(s: string): number {
    let count0 = 0; 
    const n = s.length; 

    for(let i = 0; i < n; i++){
        let expected = (i % 2 === 0) ? "0" : "1"; 

        if(s[i] !== expected) count0++
    }

    return Math.min(count0, n - count0)
};