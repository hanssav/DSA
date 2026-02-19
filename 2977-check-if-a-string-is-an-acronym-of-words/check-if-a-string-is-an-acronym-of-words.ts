function isAcronym(words: string[], s: string): boolean {
    if(words.length !== s.length) return false; 

    for(let i = 0; i < words.length; i++){
        const word = words[i];

        if(word[0] !== s[i]) return false;
    }; 

    return true;
};