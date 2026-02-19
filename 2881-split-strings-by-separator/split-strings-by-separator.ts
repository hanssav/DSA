function splitWordsBySeparator(words: string[], separator: string): string[] {
    const res: string[] = []; 

    for(const word of words){
        let arr = word.split(separator).filter(s => s !== "");

        for(const a of arr){
            res.push(a);
        }
    }
    return res; 
};