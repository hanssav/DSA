function groupAnagrams(strs: string[]): string[][] {
    const res = new Map(); 

    const normalize = (s) => s
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split("")
        .sort()
        .join("")

    for(let str of strs){
        const normalized = normalize(str);
        if(!res.has(normalized)) res.set(normalized, []); 

        res.get(normalized).push(str); 
    }

    // console.log(res, 'res')
    return [...res.values()]
};