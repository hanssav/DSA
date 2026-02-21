function longestWord(words: string[]): string {
    words.sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return b.localeCompare(a);
    });
    
    const set = new Set<string>([""]); 
    const n = words.length; 

    let longgest = ""; 

    for(let i = 0; i < n; i++){
        const val = words[i].substring(0, words[i].length - 1)

        if(set.has(val)){
            set.add(words[i])
            
            if(words[i].length >= longgest.length) longgest = words[i];
        };
    }

    return longgest;
};