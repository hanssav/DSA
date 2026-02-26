function makeEqual(words: string[]): boolean {
    let counts = new Map<string, number>();

    for(const word of words){
        for(const ch of word){
            counts.set(ch, (counts.get(ch) || 0) + 1);
        }
    }

    const arr = Array.from(counts.values());
    
    return arr.every(v => v % words.length === 0);
};