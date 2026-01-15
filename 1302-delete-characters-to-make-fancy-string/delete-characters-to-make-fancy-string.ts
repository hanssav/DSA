function makeFancyString(s: string): string {
    let res = []; 

    for(let char of s){
        if(res.length >= 2 && res[res.length - 1] === char && res[res.length - 2] === char)continue
        res.push(char)
    }

    return res.join("")
};