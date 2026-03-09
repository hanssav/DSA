function construct2DArray(original: number[], m: number, n: number): number[][] {
    let res: number[][] = []

    if(original.length !== m * n) return []; 

    for(let i = 0; i < m; i++){
        let s = i * n; 
        let e = s + n; 

        res.push(original.slice(s, e))
    }
    return res;
};