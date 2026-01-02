function uncommonFromSentences(s1: string, s2: string): string[] {
    const m = new Map(); 

    const getWords = (strs) => {
        let sentences = strs.split(" ")
        for(let str of sentences){
            if(!m.has(str)) m.set(str, 0); 
            m.set(str, m.get(str) + 1)
        }
    }
    
    getWords(s1); 
    getWords(s2);

    const res = []
    
    for(let [key, val] of m){
        if(val === 1) res.push(key)
    }

    return res
};