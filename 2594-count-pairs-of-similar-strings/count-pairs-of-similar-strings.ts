function similarPairs(words: string[]): number {
    let m = new Map(); 

    for(const word of words){
        const ac = [...new Set(word)].sort().join("");
        m.set(ac, (m.get(ac) || 0) + 1);

    }

    let result = 0;
    for(const count of m.values()){
        // rumus kombinasi
        result += count * (count - 1) / 2;
    }
    

    return result;
};