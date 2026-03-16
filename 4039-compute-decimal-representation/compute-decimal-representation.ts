function decimalRepresentation(n: number): number[] {
    const res = [];
    const s = n.toString();

    for(let i = 0; i < s.length; i++){
        if(s[i] !== '0'){
            res.push(Number(s[i]) * Math.pow(10, s.length - 1 - i))
        }
    }

    return res;
};