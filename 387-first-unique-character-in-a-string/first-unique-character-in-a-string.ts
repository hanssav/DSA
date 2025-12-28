function firstUniqChar(s: string): number {
    let i = 0

    while(i < s.length){
        let count = 0

        for(const str of s) {
            if(str === s[i]){
                count++
                if(count > 1) break
            }
        }
        
        if(count == 1) {
            return i;
        }
        
        i++;
    }
    return -1
};