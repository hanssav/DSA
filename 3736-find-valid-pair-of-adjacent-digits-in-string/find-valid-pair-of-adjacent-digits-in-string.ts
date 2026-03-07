function findValidPair(s: string): string {
    let m = new Map(); 

    for(const dig of s){
        m.set(dig, (m.get(dig) || 0) + 1)
    }

    for(let i = 0; i < s.length - 1; i++){
        const f = s[i]; 
        const sec = s[i + 1]; 

        if(f !== sec && m.get(f) === parseInt(f) && m.get(sec) === parseInt(sec)) return f + sec
    }

    return ""
};