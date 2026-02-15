function majorityFrequencyGroup(s: string): string {
    const map = new Map<string, number>();

    for(const str of s){
        map.set(str, (map.get(str) || 0) + 1);
    };

    const groupMap = new Map<number, string[]>(); 

    for(const [ch, freq] of map){
        if(!groupMap.has(freq)) groupMap.set(freq, []); 

        groupMap.get(freq)!.push(ch);
    }; 

    let maxSize = 0; 
    let bestFreq = 0; 

    for(const [freq, chars] of groupMap){
        if(
            chars.length > maxSize ||
            (chars.length === maxSize && freq > bestFreq) 
        ) {
            maxSize = chars.length; 
            bestFreq = freq;
        }
    }

    return groupMap.get(bestFreq)!.join("")
};