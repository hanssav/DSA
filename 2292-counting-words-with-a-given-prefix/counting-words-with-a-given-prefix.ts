function prefixCount(words: string[], pref: string): number {
    let count = 0; 

    for(const w of words){
        if(w.substring(0, pref.length) === pref) count++;
    }

    return count;
};