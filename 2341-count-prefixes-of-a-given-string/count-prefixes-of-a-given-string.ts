function countPrefixes(words: string[], s: string): number {
    let pref = new Set<string>();

    let cstr = "";
    for(const str of s){
        cstr += str; 

        pref.add(cstr);
    }

    let count = 0;

    for(const word of words){
        if(pref.has(word)) count++;
    }
    
    return count;
};