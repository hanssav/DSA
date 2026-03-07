function mapWordWeights(words: string[], weights: number[]): string {
    let res = ""; 

    for(const word of words){
        let totalWeight = 0;

        for(const char of word){
            totalWeight += weights[char.charCodeAt(0) - 97]; 
        }

        const remainder = totalWeight % 26; 
        const mapped = String.fromCharCode(122 - remainder); 

        res += mapped;
    }

    return res; 
};