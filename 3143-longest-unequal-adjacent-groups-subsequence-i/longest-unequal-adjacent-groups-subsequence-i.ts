function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const res = [words[0]]; 
    const g = [groups[0]]

    for(let i = 1; i < words.length; i++){
        if(groups[i] !== g[g.length -1]){
            g.push(groups[i]); 
            res.push(words[i])
        }
    }

    return res;
};