function mergeAlternately(word1: string, word2: string): string {
    let res = ""; 

    const n = Math.max(word1.length, word2.length); 


    for(let i = 0; i < n; i++){
        if(!!word1[i]) res += word1[i];
        if(!!word2[i]) res += word2[i];
    }


    return res;
};