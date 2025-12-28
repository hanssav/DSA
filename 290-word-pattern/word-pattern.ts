function wordPattern(pattern: string, s: string): boolean {
    const p_map = new Map(); 
    const s_map = new Map();
    const strs = s.split(" "); 
    
    if(strs.length !== pattern.length) return false; 
    
    for(let i = 0; i < pattern.length; i++){
        const p_char = pattern[i] 
        const s_char = strs[i];

        if(!p_map.has(p_char)) p_map.set(p_char, s_char);
        if(!s_map.has(s_char)) s_map.set(s_char, p_char);
        
        const cond_1 = p_map.get(p_char) !== s_char;
        const cond_2 = s_map.get(s_char) !== p_char;
        
        if(cond_1 || cond_2) return false
    }

    return true
};