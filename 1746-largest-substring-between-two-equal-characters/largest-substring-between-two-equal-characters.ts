function maxLengthBetweenEqualCharacters(s: string): number {
    let m = new Map<string, number[]>(); 

    for(const [idx, str] of s.split("").entries()){
        if(!m.has(str)) m.set(str, []); 
        m.get(str).push(idx)
    }

    let res = -1; 

    for(const [key, val] of m){
        if(val.length > 1){
            let calc_val = val[val.length - 1] - val[0] -1;

            if(calc_val > res){
                res = calc_val
            }
        }
    }

    return res
};