function numberOfSpecialChars(word: string): number {
    const m = new Set();
    let count = 0; 

    for(const w of word){
        if(m.has(w)) continue;

        if(m.has(w.toLowerCase()) || m.has(w.toUpperCase())) count++; 

        m.add(w)
    }

    return count;
};