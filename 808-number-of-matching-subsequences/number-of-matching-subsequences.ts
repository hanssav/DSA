function numMatchingSubseq(s: string, words: string[]): number {
    const indices = new Map<string, number[]>();

    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(!indices.has(c)) indices.set(c, []);

        indices.get(c)!.push(i);
    }

    let count = 0; 

    for(const word of words){
        if(isSubsquence(word, indices)) count++;
    };

    return count;
};

function isSubsquence(word: string, indices: Map<string, number[]>): boolean {
    let last = -1; 

    for(const c of word){
        if(!indices.has(c)) return false;

        const ids = indices.get(c)!; 

        let left = 0; 
        let right = ids.length -1; 
        let found = -1;

        while(left <= right){
            const mid = Math.floor((left + right) / 2);

            if(ids[mid] > last){
                found = ids[mid]; 
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if(found === -1) return false;

        last = found;
    }

    return true;
}