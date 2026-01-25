function shortestCompletingWord(licensePlate: string, words: string[]): string {
    let res = ""; 
    let len = res.length > 0 ? res.length : Infinity;

    function formed(strs: string): Map<string, number>{
        const m = new Map<string, number>(); 

        for(const str of strs){
            let s = str.toLowerCase();
            if(/^[A-Za-z]+$/.test(s)){
                m.set(s, (m.get(s) || 0) + 1);
            }
        }
        
        return m;
    }

    const lm = formed(licensePlate); 

    const isMatch = (m1: Map<string, number>, m2:Map<string, number>): boolean => {
        for(const [s, val] of m1){
            if(!m2.has(s)) return false; 

            if(m2.has(s)){
                if(m2.get(s) < val) return false;
            }
        }

        return true;
    }

    for(const word of words){
        const str = formed(word);

        // console.log(word, lm, str);
        if(isMatch(lm, str) && len > word.length){
            res = word; 
            len = word.length;
        }
    };

    return res;
};