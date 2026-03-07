function hasSpecialSubstring(s: string, k: number): boolean {
    let count = 1; 

    for(let i = 1; i <= s.length; i++){        
        if(s[i] === s[i - 1]){
            count++; 
        } else {
            if(count === k) return true;
            count = 1;
        }
    }

    return false; 
};