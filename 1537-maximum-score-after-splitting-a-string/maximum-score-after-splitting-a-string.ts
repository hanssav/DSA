function maxScore(s: string): number {
    let count = new Map<string, number>(); 

    for(const ch of s){
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    let left = 0, right = count.get("1") || 0, maxDif = 0; 

    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === "0") left++; 
        else if(s[i] === "1") right--;

        maxDif = Math.max(maxDif, left + right)
    }
    return maxDif;
};