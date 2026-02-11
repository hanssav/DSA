function oddString(words: string[]): string {
    const mp = new Map<string, string[]>(); 

    function convertToString(str: string): string{
        let s = ""; 

        for(let i = 1; i < str.length; i++){
            s += String((str[i].charCodeAt(0) - 97) - (str[i - 1].charCodeAt(0) - 97)); 
            s += ","
        }

        return s;
    }

    for(const word of words){
        const str = convertToString(word); 

        if(!mp.has(str)) mp.set(str, []);

        mp.get(str).push(word);
    }

    for(const [k, v] of mp){
        if(v.length === 1) return v[0]
    }
};