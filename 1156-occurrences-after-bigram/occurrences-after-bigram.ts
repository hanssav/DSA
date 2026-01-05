function findOcurrences(text: string, first: string, second: string): string[] {
    const res: string[] = []
    const strs = text.split(" ");
    let idx = 0; 

    while(idx < strs.length){
        if(strs[idx] === first){
            if(strs[idx + 1] === second && !!strs[idx + 2]) res.push(strs[idx + 2]) 
        } 
        idx++
    } 

    return res 
};