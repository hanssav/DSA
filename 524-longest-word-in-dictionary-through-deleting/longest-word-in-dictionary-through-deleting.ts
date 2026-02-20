function findLongestWord(s: string, dictionary: string[]): string {
    dictionary.sort((a, b) => a.localeCompare(b));

    let longgest_word = ""; 

    for(const word of dictionary){
        let s_idx = 0; 
        let d_idx = 0; 

        while(s_idx < s.length && d_idx < word.length){
            if(s[s_idx] !== word[d_idx]) s_idx++
            else {
                s_idx++; 
                d_idx++;
            }
        }

        if(d_idx === word.length && longgest_word.length < word.length) longgest_word = word;
    };

    return longgest_word;
};