function stringMatching(words: string[]): string[] {
    words.sort((a, b) => a.length - b.length)
    const res: string[] = []; 

    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            if(words[j].includes(words[i])){
                res.push(words[i])
                break
            }
        }
    }

    return res; 
};