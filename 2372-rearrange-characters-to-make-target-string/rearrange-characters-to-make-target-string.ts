function rearrangeCharacters(s: string, target: string): number {
    function countWord(word: string){
        const m = new Map<string, number>();

        for(const w of word){
            m.set(w, (m.get(w) || 0) + 1);
        }

        return m;
    }

    const tMap = countWord(target); 
    const sMap = countWord(s); 
    
    let count = 0; 

    while(sMap.get(target[0]) > 0){

        for(const [s, v] of tMap){
           if(!sMap.has(s) || sMap.get(s) - v < 0) return count; 

           sMap.set(s, sMap.get(s) - v);
        }

        count++;
    }

    return count;
};