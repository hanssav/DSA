function residuePrefixes(s: string): number {
    let count = 0; 
    const set = new Set(); 

    for(let i = 0; i < s.length; i++){
        set.add(s[i]); 
        
        const length = i + 1; 

        if(set.size === (length % 3)) count++; 
    }

    return count
};