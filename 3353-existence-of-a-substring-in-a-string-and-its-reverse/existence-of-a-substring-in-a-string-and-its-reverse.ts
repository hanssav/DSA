function isSubstringPresent(s: string): boolean {
    const m = new Set(); 

    const n = s.length;
    
    for(let i = n - 1 - 1; i >= 0; i--){
        m.add(`${s[i + 1]}${s[i]}`)
    }

    for(let i = 1; i < n; i++){
        if(m.has(`${s[i - 1]}${s[i]}`)) return true;
    }
    
    return false;
};