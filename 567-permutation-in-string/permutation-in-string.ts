function checkInclusion(s1: string, s2: string): boolean {
    const s1Count = new Array(26).fill(0); 
    const s2Count = new Array(26).fill(0); 
    const charCodeA = "a".charCodeAt(0);

    for(let i = 0; i < s1.length; i++){
        s1Count[s1.charCodeAt(i) - charCodeA]++; 
        s2Count[s2.charCodeAt(i) - charCodeA]++;
    }

    const isMatch = () => s1Count.every((val, idx) => val === s2Count[idx]); 

    if(isMatch()) return true; 

    for(let i = s1.length; i < s2.length; i++){
        s2Count[s2.charCodeAt(i) - charCodeA]++; 
        s2Count[s2.charCodeAt(i - s1.length) - charCodeA]--;

        if(isMatch()) return true;
    }

    return false;
};