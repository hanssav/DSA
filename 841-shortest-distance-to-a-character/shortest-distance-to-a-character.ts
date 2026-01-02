function shortestToChar(s: string, c: string): number[] {
    const len = s.length; 
    const res = new Array(len); 

    let pos = -Infinity; 

    for(let i = 0; i < len; i++){
        if(s[i] === c) pos = i; 

        res[i] = i - pos
    }

    // console.log(res, 'res')
    
    pos = Infinity; 

    for(let i = len - 1; i >= 0; i--){
        if(s[i] === c) pos = i; 

        res[i] = Math.min(res[i], pos - i)
    }

    return res
};