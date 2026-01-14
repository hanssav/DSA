function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    const find = (s: string): string => {
        return String(s.charCodeAt(0) - 97);
    }

    const n = Math.max(firstWord.length, secondWord.length, targetWord.length);
    // console.log(typeof find("a"), find("abc"))

    let idx = 0; 
    let first = ""; 
    let second = ""; 
    let target = ""; 

    while(idx < n){
        if(!!firstWord[idx]) first += find(firstWord[idx])
        if(!!secondWord[idx]) second += find(secondWord[idx])
        if(!!targetWord[idx]) target += find(targetWord[idx])
        idx++;
    }

    return Number(first) + Number(second) === Number(target)
};