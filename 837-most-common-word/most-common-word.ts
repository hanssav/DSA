function mostCommonWord(paragraph: string, banned: string[]): string {
    // split depends char non-words like , : -  
    const words = paragraph.split(/[^a-zA-Z]+/);

    const m = new Map(); 
    const bann = new Set(banned)

    for(let word of words){
        const w = word.toLowerCase()
        if(!bann.has(w) && !!w){
            if(!m.has(w)) m.set(w, 0); 

            m.set(w, m.get(w) + 1)
        }
    }

    let max = 0; 
    let word = ""

    for(let [key, val] of m){
        if(val > max){
            max = val; 
            word = key
        }
    }

    return word
};