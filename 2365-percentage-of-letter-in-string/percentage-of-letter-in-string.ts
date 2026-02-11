function percentageLetter(s: string, letter: string): number {
    let letCount = 0; 

    for(const str of s){
        if(str === letter) letCount++;
    }

    const n = s.length;

    return Math.floor(letCount / n * 100)
};