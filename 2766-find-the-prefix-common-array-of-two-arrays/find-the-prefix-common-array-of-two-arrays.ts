function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length
    const freq = Array(n + 1).fill(0); 

    const res = [];
    let count = 0;
    for(let i = 0; i < n; i++){
        freq[A[i]]++
        freq[B[i]]++

        if(freq[A[i]] === 2) count++;
        if(freq[B[i]] === 2 && (B[i] !== A[i])) count++;

        res.push(count)
    }

    return res;
};