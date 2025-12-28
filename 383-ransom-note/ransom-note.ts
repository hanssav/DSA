function canConstruct(ransomNote: string, magazine: string): boolean {
    const rn_map = new Map();
    
    for(let str of ransomNote){
        if(!rn_map.has(str)) rn_map.set(str, 0); 

        rn_map.set(str, rn_map.get(str) + 1);
    } 

    for(let str of magazine){
        const get_val = rn_map.get(str)
        
        if(rn_map.size === 0) return true;

        if(rn_map.has(str)) rn_map.set(str, get_val - 1) 
        if(rn_map.get(str) === 0) rn_map.delete(str);   
        
    }

    return rn_map.size === 0 ? true : false
};