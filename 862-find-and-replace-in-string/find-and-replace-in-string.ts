function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
    const t = new Array(s.length).fill(null); 

    for(let i = 0; i < indices.length; i++){
        let idx = indices[i]; 
        let source = sources[i]; 

        if(s.substring(idx, idx + source.length) === source){
            t[idx] = {
                len: source.length, 
                target: targets[i],
            }
        }
    }; 

    let res = ""
    let i = 0; 

    while(i < s.length){
        if(t[i]){
            res += t[i].target; 
            i += t[i].len
        } else {
            res += s[i]; 
            i++;
        }
    }

    return res;
};