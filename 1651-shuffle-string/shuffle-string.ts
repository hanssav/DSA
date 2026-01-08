function restoreString(s: string, indices: number[]): string {
    const res = ""
    const len = s.length

    const pair = []

    for(let i = 0; i < len; i++){
        pair.push([indices[i], s[i]]); 
    }

    return pair.sort((a,b) => a[0] - b[0]).map(item => item[1]).join("")
};