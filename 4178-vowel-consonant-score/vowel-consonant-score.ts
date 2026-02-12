function vowelConsonantScore(s: string): number {
    const st = new Set(['a', 'e', 'i', 'u', 'o']); 

    let v = 0; 
    let c = 0; 

    for(const ch of s){
        if (ch >= 'a' && ch <= 'z') {
            if (st.has(ch)) {
                v++;
            } else {
                c++;
            }
        }
    };

    if(c === 0) return 0;
    return Math.floor(v / c);
};  