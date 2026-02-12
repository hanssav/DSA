function countPrefixSuffixPairs(words: string[]): number {
    let count = 0; 
    const n = words.length; 

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(isPreffixAndSuffix(words[i], words[j])) count++;
        }
    }

    return count;
};

function isPreffixAndSuffix(s1: string, s2:string): boolean {
    const n1 = s1.length; 
    const n2 = s2.length; 

    const preffix = s2.substring(0, n1); 
    const suffix = s2.substring(n2 - n1, n2)

    return preffix === s1 && suffix === s1;
}