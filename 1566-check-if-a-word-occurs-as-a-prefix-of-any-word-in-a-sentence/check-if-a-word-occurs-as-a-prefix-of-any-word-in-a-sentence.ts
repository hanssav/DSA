function isPrefixOfWord(sentence: string, searchWord: string): number {
    for(let [idx, word] of sentence.split(" ").entries()){
        const len = searchWord.length; 
        const prefix = word.substring(0, len); 
        // console.log(prefix, len, word, idx)
        if(prefix === searchWord) return idx + 1
    }
    return -1
};