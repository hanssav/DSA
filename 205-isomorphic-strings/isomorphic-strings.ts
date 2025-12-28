function isIsomorphic(s: string, t: string): boolean {
    const t_map = new Map(); 
    const s_map = new Map(); 

    for(let i = 0; i < s.length; i++){
        let char_s = s[i]; 
        let char_t = t[i]; 
        
        let condition_1 = s_map.has(char_s) && s_map.get(char_s) !== char_t
        let condition_2 = t_map.has(char_t) && t_map.get(char_t) !== char_s  
        
        if(condition_1 || condition_2) return false

        s_map.set(char_s, char_t); 
        t_map.set(char_t, char_s)
    }

    return true
}