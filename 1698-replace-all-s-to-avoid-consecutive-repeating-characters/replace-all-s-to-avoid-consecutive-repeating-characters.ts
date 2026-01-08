function modifyString(s: string): string {
    let res = ""; 

    for(let i = 0; i < s.length; i++){
        if(s[i] !== "?"){
            res += s[i]
        } else {
            const prev = res[i - 1]; 
            const next = s[i + 1]; 

            if (prev !== 'a' && next !== 'a') res += 'a';
            else if (prev !== 'b' && next !== 'b') res += 'b';
            else res += 'c';
        }
    }

    return res
};