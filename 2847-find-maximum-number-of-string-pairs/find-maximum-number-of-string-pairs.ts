function maximumNumberOfStringPairs(words: string[]): number {
    let reversed = []; 

    for(const word of words){
        reversed.push(word.split("").reverse().join(""))
    }

    let count = 0;
    const n = words.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(words[i] === reversed[j]) count++;
        }
    }
    return count;
};