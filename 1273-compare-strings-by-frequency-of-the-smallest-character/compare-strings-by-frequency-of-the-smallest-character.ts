function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    const f = (s: string): number => {
        const m = new Map(); 
        let small = s[0]; 

        for(let str of s){
            m.set(str, (m.get(str) || 0) + 1); 

            if(small > str) small = str;
        }

        return m.get(small)
    }

    const f_words: number[] = []

    for(const word of words){
        f_words.push(f(word))
    }

    // console.log(f_words, 'f words'); 

    const res: number[] = []; 

    for(let i = 0; i < queries.length; i++){
        const freq = f(queries[i])
        let count = 0; 

        for(let j = 0; j < f_words.length; j++){
            // console.log(freq, f_words[i], 'freq')
            if(f_words[j] > freq) count++;
        }

        res.push(count);
    }

    // console.log(res, 'res')
    return res;
};