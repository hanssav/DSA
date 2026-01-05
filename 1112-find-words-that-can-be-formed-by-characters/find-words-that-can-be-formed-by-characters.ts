function countCharacters(words: string[], chars: string): number {
    const m = new Map(); 

    for(let char of chars){
        if(!m.has(char)) m.set(char, 0); 
        m.set(char, m.get(char) + 1); 
    }  

    function is_formed(str){
        const str_map = new Map(); 

        for(let a of str){
            if(!str_map.has(a)) str_map.set(a, 0)
            str_map.set(a, str_map.get(a) + 1); 

            if(!m.has(a) || str_map.get(a) > m.get(a)) return false; 
        }
        return true;
    }

    let count = 0; 

    for(let word of words){
        if(is_formed(word)){
            count += word.length; 
        }
    }

    return count
};