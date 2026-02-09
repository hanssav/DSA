function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a)

    for(let i = 1; i <= citations.length; i++){
        if(citations[i - 1] < i) return i - 1;
    }

    return citations.length;
};