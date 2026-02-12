function largestEven(s: string): string {
    let idx = s.length;
    for(let i = s.length - 1; i >= 0; i--){
        if(Number(s[i]) % 2 === 1) {
            idx = i;
        } else {
            break;
        }
    }


    return s.substring(0, idx)
};