function largestMerge(word1: string, word2: string): string {
    let a = 0; 
    let b = 0;
    
    console.log(word1[a], word2[10], "a" > ""); 

    let res = ""; 

    while(a < word1.length || b < word2.length){
        if(word1.slice(a) > word2.slice(b)){
            res += word1[a]; 
            a++;
        } else {
            res += word2[b]; 
            b++;
        }
    }

    return res;
};